const asyncHandler = require('express-async-handler');

//@desc Get all contacts
//@route GET /api/contacts
//@ access public

const getContacts = asyncHandler(async (req,res) => {
    res.status(200).json({ message: `Get all contact` }); // use backticks for string interpolation
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
})

//@desc getContact by id 
//@route POST /api/contacts
//@ access public

const getContact = asyncHandler(async (req,res) => {
    res.status(201).json({ message: `Create new contact` }); // use backticks for string interpolation
})

//@desc updateContact 
//@route PUT /api/contacts/:id
//@ access public

const updateContact = asyncHandler(async (req, res) => {
    res.status(200).json({ message: `Update contact for ${req.params.id}` }); // use backticks for string interpolation
})

//@desc deleteContact 
//@route DELETE /api/contacts/:id
//@ access public

const deleteContact = asyncHandler(async  (req, res) => {
    res.status(200).json({ message: `Delete contact for ${req.params.id}` }); // use backticks for string interpolation
})

module.exports = {getContacts,getContact,createContact,updateContact,deleteContact};