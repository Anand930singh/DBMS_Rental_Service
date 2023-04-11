const express=require('express');
const router=express.Router();

const AddBranchController=require('../Controller/AddBranchController')

//Friends
router.route('/')
    .post(AddBranchController.AddBranch)
    
module.exports=router;