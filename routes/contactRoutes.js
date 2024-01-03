const express = require('express');
const router = express.Router();

router.route('/').get((req,res) => {
    res.status(200).json({message:'Send all contacts'}) // send json
})

router.route('/').post((req,res) => {
    res.status(200).json({message:'Create Contact'}) // send json
})

router.route('/:id').get((req, res) => {
    res.status(200).json({ message: `Get contact for ${req.params.id}` }); // use backticks for string interpolation
});

router.route('/:id').put((req, res) => {
    res.status(200).json({ message: `Update contact for ${req.params.id}` }); // use backticks for string interpolation
});

router.route('/:id').delete((req, res) => {
    res.status(200).json({ message: `Delete contact for ${req.params.id}` }); // use backticks for string interpolation
});


module.exports = router;