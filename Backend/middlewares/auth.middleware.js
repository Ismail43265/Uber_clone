const userModel= require("../models/user.model.js");
const bcrypt=require("bcrypt");
const jwt=require("jsonwebtoken");

module.exports.authUser= async (req,res,next)=>{

    const token= req.cookies?.token ||(req.headers.authorization && req.headers.authorization.split(" ")[1]);
    if(!token){
        return res.status(401).json({
            message: "Verification error"
        })
    }

    const isBlacklistToken= await userModel.findOne({token: token});

    if(isBlacklistToken){
        return res.status(401).json({message: "Unothorised"});
    }

    try{
        const decoded= jwt.verify(token, process.env.JWT_SECRET);
        const user=await userModel.findById(decoded._id);

        req.user=user;

        return next();
    }
    catch(error){
        return res.status(500).json({
            message: "Unothorised"
        });
    }
}