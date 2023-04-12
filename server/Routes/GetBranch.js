const express=require('express');
const router=express.Router();

const GetBranchController=require('../Controller/GetBranchController')

//Friends
router.route('/')
    .post(GetBranchController.GetBranch)
    
module.exports=router;