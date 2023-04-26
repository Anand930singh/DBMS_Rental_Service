const express=require('express');
const router=express.Router();

const AddProperty_controller=require('../Controller/AddPropertyController')

//Friends
router.route('/')
    .post(AddProperty_controller.AddProperty)
    
module.exports=router;