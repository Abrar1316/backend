const express = require('express');

const router = express.Router();

const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    title: String,
    imgUrl: String,
    description: String
})

const postModel = mongoose.model('post',postSchema);

router.post('/addpost',(req,res)=>{
    const newPost = new postModel({
        title:req.body.title,
        imgUrl:req.body.imageUrl,
        description:req.body.description
    })
    newPost.save(function(err){
        if(!err){
            res.send("post added!!!!")
        }else{
            res.send(err);
            addpost}
    })
    })
router.get('/getallpost',(req,res)=>{
    postModel.find({},function(docs,err){
        if(!err){
            res.send(docs)
        }else{
            res.send(err)
        }
    });
})



module.exports = router