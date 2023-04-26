const express=require('express');
const router=express.Router();

const BranchFormController=require('../Controller/BranchFormController')

//Friends
router.route('/')
    .post(BranchFormController.BranchForm)
    
module.exports=router;