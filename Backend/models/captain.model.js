const mongoose= require("mongoose");
const jwt=require("jsonwebtoken");
const bcrypt=require("bcrypt");

const captainSchema= new mongoose.Schema({
    fullname:{
        firstname:{
            type: String,
            require: true,
            minlength: [3, 'First name must be at least 3 characters']
        },
        lastname:{
            type: String,
            minlength: [3, 'Last name must be at least 3 characters']
        }
    },
    email:{
        type: String,
        require: true,
        unique: true,
        lowercase: true,
    },
    password:{
        type: String,
        require: true,
        select: false
    },
    socketId:{
        type: String
    },
    status:{
        type: String,
        enum: ['active','inactive'],
        default: 'inactive'
    },
    vehicle: {
        color:{
            type: String,
            required: true,
            minlength: [3, 'Color name must be at least 3 characters']
        },
        plate:{
            type: String,
            required: true,
            minlength: [3, 'plate number must be at least 3 characters']
        },
        capacity:{
            type: String,
            required: true,
            minlength: [1, 'capacity must be at least 1']
        },
        vehicleType:{
            type: String,
            required: true,
            enum: ['Car', 'motorcycle', 'Auto']
        }
    },

    location:{
        lat:{
            type: Number
        },
        lng:{
            type: Number
        }
    }
})

captainSchema.methods.generateAuthToken= function (){
    const token=jwt.sign({_id: this._id}, process.env.JWT_SECRET, {expiresIn: '24h'})
    return token;
}

captainSchema.methods.comparePassword= async function(password){
    return await bcrypt.compare(password, this.password);
} 

captainSchema.statics.hashPassword= async function (password){
    return await bcrypt.hash(password, 10);
}

const captainModel= mongoose.model('captain', captainSchema);

module.exports=captainModel;