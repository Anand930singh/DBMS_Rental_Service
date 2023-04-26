const express=require('express');
const app=express();
const cookieParser = require('cookie-parser');
app.use(cookieParser());

const bodyParser = require('body-parser');

//Db connection
const connectDb=require('./config/db')
connectDb();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/branchForm',require('./Routes/BranchForm'));

//Admin Login
app.use('/adminLogin',require('./Routes/AdminLogin'));

//Add Staff
app.use('/addStaff',require('./Routes/AddEmploye'));

//Add Branch
app.use('/addBranch',require('./Routes/AddBranch'));

//Get Branches
app.use('/getBranches',require('./Routes/GetBranch'));

//Owner Reg
app.use('/ownerReg',require('./Routes/OwnerReg'));

//Owner Reg
app.use('/clientReg',require('./Routes/ClientReg'));

//Add Property
app.use('/addProperty',require('./Routes/AddProperty'));



app.listen(5000,()=>{
    console.log('Server is running on PORT 5000');
})