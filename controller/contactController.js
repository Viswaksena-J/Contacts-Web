const asyncHandler = require('express-async-handler');
const Contact = require('../models/contactModel');

//@desc Get all contacts
//@route GET /api/contacts
//@ access public

const getContacts = asyncHandler(async (req,res) => {
    const contacts = await Contact.find()
    res.status(200).json(contacts); // use backticks for string interpolation
})

//@desc Create New contacts
//@route POST /api/contacts
//@ access public

const createContact = asyncHandler(async (req,res) => {
    console.log("The request body is:" ,req.body); // use backticks for string interpolation
    const {name,email,phone} = req.body;
    if(!name || !email || !phone){
        res.status(400);
        throw new Error("Please fill all the fields");
    }
    const contact = await Contact.create({
        name,
        email,
        phone
    
    })
    res.status(201).json(contact);
})

//@desc getContact by id 
//@route GET /api/contacts/:id
//@ access public

const getContact = asyncHandler(async (req,res) => {
    const contact = await Contact.findById(req.params.id)
    if(!contact){
        res.status(404);
        throw new Error("Contact not found")
    }
    res.status(200).json(contact);  // use backticks for string interpolation
})

//@desc updateContact 
//@route PUT /api/contacts/:id
//@ access public

const updateContact = asyncHandler(async (req, res) => {
    const contact = await Contact.findById(req.params.id)
    if(!contact){
        res.status(404);
        throw new Error("Contact not found")
    }
    const updatedContact = await Contact.findByIdAndUpdate(
        req.params.id,
        req.body,{
            new:true,
        }
    )
    res.status(200).json(updatedContact); // use backticks for string interpolation
})

//@desc deleteContact 
//@route DELETE /api/contacts/:id
//@ access public

const deleteContact = asyncHandler(async (req, res) => {
    const contact = await Contact.findById(req.params.id);
    if (!contact) {
      res.status(404);
      throw new Error("Contact not found");
    }
    if (contact.user_id.toString() !== req.user.id) {
      res.status(403);
      throw new Error("User don't have permission to update other user contacts");
    }
    await Contact.deleteOne({ _id: req.params.id });
    res.status(200).json(contact);
});

module.exports = {getContacts,getContact,createContact,updateContact,deleteContact};