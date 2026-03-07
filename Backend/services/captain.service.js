const captainModel=require("../models/captain.model");

module.exports.createCaptain= async ({
    firstname, lastname, email, password,
    color, plate, capacity, vehicleType
})=>{

    if(!firstname || !email || !password || !color || !plate || !capacity || !vehicleType){
        throw new Error("Fill all credentials");
    }
    const Captain=await captainModel.create({
            fullname:{
                firstname,
                lastname
            },
            email,
            password,
            vehicle:{
                color,
                plate,
                capacity,
                vehicleType
            }
    })
    return Captain;
}