const express=require("express");
const dbConnect=require("./config/dbConnect");
const app=express();
const user=require("./routes/user")
const cors = require("cors");

require("dotenv").config();

const Port=process.env.PORT || 3000;


app.use(express.json());
app.use(
	cors({
		origin: "*",
		credentials: true,
	})
);
app.use("/api/v1",user);

app.listen(Port,()=>{
    console.log("app.is listen to port num " ,Port);
})

dbConnect();