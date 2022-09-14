const express = require('express');
const router = express.Router();
const { Module } = require('../models')

router.get('/', async (req,res) => {
   try{ res.status(200).json(await Module.find({}));
}catch(err) {
    console.log(err);
    }
})

router.post('/', async (req,res) => {
    try {
        res.status(201).json(await Module.create(req.body));
    } catch(err){
        console.log(err)
    }
})

router.put('/:id', async (req,res) => {
    try {
        res.json(await Module.findByIdAndUpdate(req.params.id, req.body, {new:true}));
    }catch (error){
        res.status(400).json(error);
    }
})

router.delete('/:id', async (req,res) => {
    try {
        res.json(await Module.findByIdAndRemove(req.params.id));
    }catch(error){
        res.status(400).json(error);
    }
});

module.exports = router;