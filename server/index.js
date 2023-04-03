const express= require('express');
const app=express();
PORT=5000

app.listen(PORT,()=>{
    console.log(`Server is running on PORT ${PORT}`);
})