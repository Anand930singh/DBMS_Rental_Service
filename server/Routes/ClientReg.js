const express=require('express');
const router=express.Router();

const Client_registration_controller=require('../Controller/Client_registration_controller')

//Friends
router.route('/')
    .post(Client_registration_controller.ClientReg)
    
module.exports=router;