const express = require('express');
const router = express.Router();

router.post("/register",(req,res) => {
    res.json({message:"Register User"})
})

router.post("/login",(req,res) => {
    res.json({message:"Login User"})
})

router.get("/current",(req,res) => {
    res.json({message:"Current user information"})
})

module.exports = router;