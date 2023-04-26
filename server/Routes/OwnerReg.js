const express=require('express');
const router=express.Router();

const Owner_registration_controller=require('../Controller/Owner_registration_controller')

//Friends
router.route('/')
    .post(Owner_registration_controller.Ownerreg)
    
module.exports=router;