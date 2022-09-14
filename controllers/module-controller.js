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


module.exports = router;