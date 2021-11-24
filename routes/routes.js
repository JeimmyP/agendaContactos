// import express
import express from "express";
  
// import function from controller
import { showContacts, showContactById, createContact, updateContact, deleteContact } from "../controllers/contact.js";
  
// init express router
const router = express.Router();
  
// Get All Contacts
router.get('/contacts', showContacts);
  
// Get Single Contact
router.get('/contacts/:id', showContactById);
  
// Create New Contact
router.post('/contacts', createContact);
  
// Update Contact
router.put('/contacts/:id', updateContact);
  
// Delete Contact
router.delete('/contacts/:id', deleteContact);
  
// export default router
export default router;