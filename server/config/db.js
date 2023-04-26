
const con =require('./Connect');


const connectDb=async()=>{
    try{
        await con.connect(function(err) {
            if (err) throw err;
            console.log("Connected!");
          });
    }catch(error){
        console.log(error);
    }
}
module.exports=connectDb

  