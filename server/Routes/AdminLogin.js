const express=require('express');
const router=express.Router();

const AdminLoginController=require('../Controller/AdminLoginController')

//Friends
router.route('/')
    .post(AdminLoginController.AdminLogin)
    
module.exports=router;