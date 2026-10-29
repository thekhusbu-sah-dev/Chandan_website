import mongoose from 'mongoose';

// MongoDB Contact Schema
const contactSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
      match: [/^\S+@\S+\.\S+$/, 'Please provide a valid email address']
    },
    phone: { type: String, required: true, trim: true },
    message: { type: String, required: true, trim: true }
  },
  { timestamps: true }
);

// Avoid model recompilation in serverless environment
const Contact = mongoose.models.Contact || mongoose.model('Contact', contactSchema);

// MongoDB connection cache for serverless
let isConnected = false;

const connectDB = async () => {
  if (isConnected && mongoose.connection.readyState === 1) return;

  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      serverSelectionTimeoutMS: 5000,
    });
    isConnected = true;
    console.log('MongoDB Atlas connected');
  } catch (err) {
    console.error('MongoDB connection error:', err);
    throw err;
  }
};

// Main serverless handler
export default async function handler(req, res) {
  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // POST - Submit contact form
  if (req.method === 'POST') {
    try {
      await connectDB();

      const { name, email, phone, message } = req.body;

      // Validation
      if (!name?.trim()) return res.status(400).json({ success: false, message: 'Name is required' });
      if (!email?.trim()) return res.status(400).json({ success: false, message: 'Email is required' });
      if (!/^\S+@\S+\.\S+$/.test(email.trim())) return res.status(400).json({ success: false, message: 'Invalid email address' });
      if (!phone?.trim()) return res.status(400).json({ success: false, message: 'Phone number is required' });
      if (!message?.trim()) return res.status(400).json({ success: false, message: 'Message is required' });

      const newContact = await Contact.create({
        name: name.trim(),
        email: email.trim().toLowerCase(),
        phone: phone.trim(),
        message: message.trim()
      });

      return res.status(201).json({
        success: true,
        message: 'Thank you! Your message has been sent successfully. Our team will contact you shortly.',
        data: newContact
      });

    } catch (error) {
      console.error('Contact submission error:', error);

      if (error.name === 'ValidationError') {
        const messages = Object.values(error.errors).map(v => v.message);
        return res.status(400).json({ success: false, message: messages.join(', ') });
      }

      return res.status(500).json({ success: false, message: 'Server error. Please try again later.' });
    }
  }

  // GET - Fetch all contacts (admin)
  if (req.method === 'GET') {
    try {
      await connectDB();
      const contacts = await Contact.find().sort({ createdAt: -1 });
      return res.status(200).json({ success: true, count: contacts.length, data: contacts });
    } catch (error) {
      return res.status(500).json({ success: false, message: 'Error fetching contacts' });
    }
  }

  return res.status(405).json({ success: false, message: 'Method not allowed' });
}
