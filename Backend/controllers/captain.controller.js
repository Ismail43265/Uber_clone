const captainModel= require("../models/captain.model.js");
const captainServices=require("../services/captain.service.js");
const {validationResult}=require("express-validator");
const blacklistTokenModel = require("../models/blacklistToken.model");

module.exports.captainRegister= async (req, res, next)=>{
    const error= validationResult(req);
        if(!error.isEmpty()){
            return res.status(400).json({
                errors: error.array()
            });
        }

    const {fullname, email, password, vehicle}=req.body;

    const isCaptain=await captainModel.findOne({ email });

    if(isCaptain){
        return res.status(400).json({message: "Email alredy registered"});
    }

    const hashPassword=await captainModel.hashPassword(password);

    const captain= await captainServices.createCaptain({
        firstname: fullname.firstname,
        lastname: fullname.lastname,
        email,
        password: hashPassword,
        color: vehicle.color,
        plate: vehicle.plate,
        capacity: vehicle.capacity,
        vehicleType: vehicle.vehicleType
    });

    const token= captain.generateAuthToken();

    res.status(201).json({token ,captain});
}

module.exports.captainlogin= async (req, res, next)=>{
    try{
        const error=validationResult(req);
        if(!error.isEmpty()){
            return res.status(400).json({
            errors: error.array()
            });
        }

        const {email, password}=req.body;

        const captain = await captainModel.findOne({ email }).select("+password");
        if(!captain){
            return res.status(400).json({
                message: "wrong email"
            })
        }

        const pass= await captain.comparePassword(password);
        if(!pass){
            return res.status(400).json({
                message: "wrong password"
            })
        }


        const token= await captain.generateAuthToken();

       res.cookie("token", token, {
            httpOnly: true
       });
        res.status(200).json({token, captain})
    }
    catch(error){
        return res.status(500).json(error);
    }
}

module.exports.captainProfile= async (req,res,next)=>{
    console.log("check it")
    return res.status(200).json({captain: req.captain});
}

module.exports.captainLogout= async (req,res,next)=>{
    res.clearCookie('token');
    const token= req.cookies?.token ||(req.headers.authorization && req.headers.authorization.split(" ")[1]);
    
    await blacklistTokenModel.create({token});
    res.status(200).json({message: "Log out"});
}