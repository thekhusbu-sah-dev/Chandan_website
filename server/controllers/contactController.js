import mongoose from 'mongoose';
import Contact from '../models/Contact.js';

/**
 * @desc    Submit new contact form message
 * @route   POST /api/contact
 * @access  Public
 */
export const submitContact = async (req, res) => {
  try {
    // Check if MongoDB connection is ready
    if (mongoose.connection.readyState !== 1) {
      return res.status(503).json({
        success: false,
        message: 'Database is not currently connected. Please start local MongoDB service or set a valid MONGODB_URI in server/.env'
      });
    }

    const { name, email, phone, message } = req.body;

    // Server-side field validation
    if (!name || !name.trim()) {
      return res.status(400).json({
        success: false,
        message: 'Name is required'
      });
    }

    if (!email || !email.trim()) {
      return res.status(400).json({
        success: false,
        message: 'Email address is required'
      });
    }

    const emailRegex = /^\S+@\S+\.\S+$/;
    if (!emailRegex.test(email.trim())) {
      return res.status(400).json({
        success: false,
        message: 'Please provide a valid email address'
      });
    }

    if (!phone || !phone.trim()) {
      return res.status(400).json({
        success: false,
        message: 'Phone number is required'
      });
    }

    if (!message || !message.trim()) {
      return res.status(400).json({
        success: false,
        message: 'Message text is required'
      });
    }

    // Save to MongoDB
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
    console.error('[Contact Submission Error]:', error);

    if (error.name === 'ValidationError') {
      const messages = Object.values(error.errors).map((val) => val.message);
      return res.status(400).json({
        success: false,
        message: messages.join(', ')
      });
    }

    return res.status(500).json({
      success: false,
      message: 'Internal server error while submitting message. Please try again later.'
    });
  }
};

/**
 * @desc    Get all submitted contact form messages
 * @route   GET /api/contact (or GET /api/contacts)
 * @access  Public / Admin
 */
export const getContacts = async (req, res) => {
  try {
    if (mongoose.connection.readyState !== 1) {
      return res.status(503).json({
        success: false,
        message: 'Database is not currently connected.'
      });
    }

    const contacts = await Contact.find().sort({ createdAt: -1 });

    return res.status(200).json({
      success: true,
      count: contacts.length,
      data: contacts
    });
  } catch (error) {
    console.error('[Get Contacts Error]:', error);
    return res.status(500).json({
      success: false,
      message: 'Server error while retrieving contact records'
    });
  }
};
