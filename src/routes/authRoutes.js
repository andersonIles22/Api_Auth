console.log('Si se usa este archivo authRoutes.js')
const express=require('express');
const authController=require('../controllers/authController');

const router= express.Router();

router.post('/register',authController.registerUser);

module.exports=router;