const mongoose = require("mongoose");

//create an instance of mongoose.schema, fill in EXACTLY how you want it stored in database!!!! 
const UserSchema = new mongoose.Schema({
    name:{
        type:String, 
        required: [true, "a name is required"],
        minlength:[2, "please enter more than 2 characters"]
    },
    email:{
        type:String, 
        unique: true,
        required: [true, "an email is required"],
        minlength:[2, "please enter more than 2 characters"]
    },
    password:{
        type:String, 
        required: [true, "a password is required"],
        minlength:[8, "please enter more than 8 characters"]
    },
    isAdmin:{
        type: Boolean, 
        reuqired: true, 
        dault: false
    }
}, {timestamps: true})

const User= mongoose.model('User', UserSchema);

module.exports = User;