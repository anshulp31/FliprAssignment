const bcrypt=require("bcryptjs");
const jwt=require("jsonwebtoken");
const User=require("../../models/user");




exports.signup=async(req,res)=>{
    try {
        const {username,email,password}=req.body;
        if(!username || !email || !password){
            return res.status(500).json({
                success:false,
                message:"Please fill all the details"
            });
        }

        const isExistingUser=await User.findOne({email});
        if(isExistingUser){
            return res.status(500).json({
                success:false,
                message:"User is already registered"
            });
        }
        let hashedPassword=await bcrypt.hash(password,10);
        const user=await User.create({
            username,email,password:hashedPassword
        })
        return res.status(200).json({
            success:true,
            message:"User Created Succefully"
        });
    } catch (error) {
        console.log("signup error",error)
        return res.status(500).json({
            success:false,
            message:"Error while creating User"
        });
    }
}   