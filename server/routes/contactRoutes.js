import express from 'express';
import { submitContact, getContacts } from '../controllers/contactController.js';

const router = express.Router();

// @route   POST /api/contact -> Submit new message
// @route   GET  /api/contact -> View all submitted messages
router.route('/contact')
  .post(submitContact)
  .get(getContacts);

export default router;
