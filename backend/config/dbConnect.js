const mongoose=require("mongoose");
require("dotenv").config();
const dbConnect=()=>{
    mongoose.connect(process.env.MONGO_URI).then(()=>{
        console.log("DB connected successfully")
    }).catch((err)=>{
        console.log("db connectin failed",err)
        process.exit(1);
    })
}

module.exports=dbConnect;