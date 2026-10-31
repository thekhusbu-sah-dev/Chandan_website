// api/contact.js — Vercel Serverless Function
// Uses CommonJS (require/module.exports) for maximum Vercel compatibility.

const mongoose = require('mongoose');

// ─── MongoDB Contact Schema ──────────────────────────────────────────────────
const contactSchema = new mongoose.Schema(
  {
    name:    { type: String, required: true, trim: true },
    email:   {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
      match: [/^\S+@\S+\.\S+$/, 'Please provide a valid email address']
    },
    phone:   { type: String, required: true, trim: true },
    message: { type: String, required: true, trim: true }
  },
  { timestamps: true }
);

// Avoid Mongoose model recompilation in serverless (warm invocations share module cache)
const Contact = mongoose.models.Contact || mongoose.model('Contact', contactSchema);

// ─── Cached DB Connection for Serverless ────────────────────────────────────
let cachedConnection = null;

async function connectDB() {
  // Re-use an existing live connection (avoids reconnecting on every request)
  if (cachedConnection && mongoose.connection.readyState === 1) {
    return cachedConnection;
  }

  const uri = process.env.MONGODB_URI;

  if (!uri) {
    throw new Error(
      'MONGODB_URI environment variable is not set. ' +
      'Please add it in your Vercel project settings under Environment Variables.'
    );
  }

  try {
    cachedConnection = await mongoose.connect(uri, {
      serverSelectionTimeoutMS: 10000, // 10 s — give Atlas time to wake up
      socketTimeoutMS: 45000,
    });
    console.log('[MongoDB] Connected to Atlas successfully.');
    return cachedConnection;
  } catch (err) {
    console.error('[MongoDB] Connection failed:', err.message);
    throw err;
  }
}

// ─── CORS Helper ────────────────────────────────────────────────────────────
function setCORSHeaders(res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
}

// ─── Main Handler ────────────────────────────────────────────────────────────
module.exports = async function handler(req, res) {
  setCORSHeaders(res);

  // Handle CORS preflight
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // ── POST: Submit contact form ──────────────────────────────────────────────
  if (req.method === 'POST') {
    try {
      await connectDB();

      const { name, email, phone, message } = req.body || {};

      // ── Validation ────────────────────────────────────────────────────────
      if (!name || !name.trim()) {
        return res.status(400).json({ success: false, message: 'Name is required.' });
      }
      if (!email || !email.trim()) {
        return res.status(400).json({ success: false, message: 'Email address is required.' });
      }
      if (!/^\S+@\S+\.\S+$/.test(email.trim())) {
        return res.status(400).json({ success: false, message: 'Please provide a valid email address.' });
      }
      if (!phone || !phone.trim()) {
        return res.status(400).json({ success: false, message: 'Phone number is required.' });
      }
      if (!message || !message.trim()) {
        return res.status(400).json({ success: false, message: 'Message is required.' });
      }

      // ── Save to MongoDB ───────────────────────────────────────────────────
      const newContact = await Contact.create({
        name:    name.trim(),
        email:   email.trim().toLowerCase(),
        phone:   phone.trim(),
        message: message.trim(),
      });

      return res.status(201).json({
        success: true,
        message: 'Thank you! Your message has been sent successfully. Our team will contact you shortly.',
        data: { id: newContact._id, createdAt: newContact.createdAt }
      });

    } catch (error) {
      console.error('[Contact POST Error]:', error);

      // Missing environment variable
      if (error.message && error.message.includes('MONGODB_URI')) {
        return res.status(500).json({
          success: false,
          message: 'Server configuration error. Please contact the site administrator.'
        });
      }

      // Mongoose validation error
      if (error.name === 'ValidationError') {
        const messages = Object.values(error.errors).map((v) => v.message);
        return res.status(400).json({ success: false, message: messages.join(', ') });
      }

      // MongoDB connection / timeout error
      if (error.name === 'MongoServerSelectionError' || error.name === 'MongoNetworkError') {
        return res.status(503).json({
          success: false,
          message: 'Unable to reach the database. Please try again in a moment.'
        });
      }

      return res.status(500).json({
        success: false,
        message: 'Server error. Please try again later.'
      });
    }
  }

  // ── GET: Fetch all contacts (admin use) ───────────────────────────────────
  if (req.method === 'GET') {
    try {
      await connectDB();
      const contacts = await Contact.find().sort({ createdAt: -1 });
      return res.status(200).json({ success: true, count: contacts.length, data: contacts });
    } catch (error) {
      console.error('[Contact GET Error]:', error);
      return res.status(500).json({ success: false, message: 'Error fetching contacts.' });
    }
  }

  // ── Method not allowed ────────────────────────────────────────────────────
  return res.status(405).json({ success: false, message: 'Method not allowed.' });
};
