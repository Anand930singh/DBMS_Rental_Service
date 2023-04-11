const express=require('express');
const app=express();

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

app.listen(5000,()=>{
    console.log('Server is running on PORT 5000');
})