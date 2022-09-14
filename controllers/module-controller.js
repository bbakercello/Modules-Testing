const express = require('express');
const router = express.Router();
const { Module } = require('../models')

router.get('/', async (req,res) => {
   try{ res.status(200).json({message: 'module index route'})
}catch(err) {
    console.log(err);
    }
})


module.exports = router;