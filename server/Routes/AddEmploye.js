const express=require('express');
const router=express.Router();

const AddEmployeeController=require('../Controller/AddEmployeeController')

//Friends
router.route('/')
    .post(AddEmployeeController.AddEmployee)
    
module.exports=router;