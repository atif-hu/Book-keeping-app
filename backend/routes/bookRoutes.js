const express=require('express');
const expressAsyncHandler = require('express-async-handler');
const jwt = require('jsonwebtoken');
const authMiddleware = require('../middlewares/authMiddleware');
const Book = require('../models/Book');

const bookRouter=express.Router();

//creating a book   (Create)
bookRouter.post('/',expressAsyncHandler(async(req,res)=>{
    const book=await Book.create(req.body);
    if(book){
        res.status(200);
        res.json(book);
    }
    else{
        res.status(500);
        throw new Error('Book creation failed');
    }
}))

//Fetching all books (Read)
bookRouter.get('/',expressAsyncHandler(async(req,res)=>{
    const book=await Book.find({});
    if(book){
        res.status(200);
        res.json(book);
    }
    else{
        res.status(500);
        throw new Error('Book fetching failed');
    }
}))

bookRouter.put('/:id',
    authMiddleware,
    expressAsyncHandler(async (req,res)=>{
    const book=await Book.findById(req.params.id);
    
    if(book){
        const updatedBook=await Book.findByIdAndUpdate(req.params.id,req.body,{new:true,runValidators:true});
        res.status(200);
        res.json(updatedBook);
    }
    else{
        res.status(500);
        throw new Error('Book updation failed');    
    }
}))

module.exports=bookRouter;