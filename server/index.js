const express=require('express');
const app=express();

//Db connection
const connectDb=require('./config/db')
connectDb();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/branchForm',require('./Routes/BranchForm'));

//Admin Login
app.use('/adminLogin',require('./Routes/AdminLogin'));

app.listen(5000,()=>{
    console.log('Server is running on PORT 5000');
})