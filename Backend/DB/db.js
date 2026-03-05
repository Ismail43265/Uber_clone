const mongoose=require("mongoose");

const connectToDb= async ()=>{
    try{
        await mongoose.connect(process.env.DB_CONNECT);
        console.log("DB connected");
    }
    catch(error){
        console.log("Database Connection error :", error);
        process.exit(1);
    }
}

module.exports=connectToDb;