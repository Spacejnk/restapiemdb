const express = require('express');
const router = express.Router();
const Post = require('../models/Post')

router.get('/', (req, res) => {
    res.send('Test the post');
});

router.post('/', (req, res) => {
    console.log(req.body);
    res.send('other post');
});

module.exports = router;
