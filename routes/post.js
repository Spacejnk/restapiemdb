const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const Post = require('../models/Post')

// submit post
router.post('/', (req, res) => {
    //console.log(req.body)
    const post = new Post({
        title: req.body.title,
        description: req.body.description
    });

    post.save()
    .then(data => {
        res.json(data);
    })
    .catch(err => {
        res.json({ message: err });
    });
});

// get all post
router.get('/', async (req, res) => {
    try {
        const post = await Post.find();
        res.json(post);
        console.log(post)
    } catch (err) {
        res.json({ message: err });
    }
});

// specific post 
router.get('/:postId', async(req, res) => {
    try {
        const post = await Post.findById(req.params.postId);
         res.json(post);
    } catch (err) {
         res.json({ message: err });
    }
 });


// delete post
router.delete('/:postId', async (req, res) => {
    try {
    const removedPost = await Post.remove({ _id: req.params.postId })
        res.json(removedPost);
    } catch (err) {
        res.json({ message: err });
    }

});

// update a post
router.patch('/:postId', async (req, res) => {
    try {
    const updatedPost = await Post.updateOne({ _id: req.params.postId }, {$set: { title: req.body.title, description: req.body.description  }}
        );
        res.json(updatedPost);
    } catch (err) {
        res.json({ message: err });
    }

});

module.exports = router;
