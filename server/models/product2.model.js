const mongoose = require("mongoose");


// const reviewSchema= new mongoose.Schema({
//     name:{type:String, required:[true, "please enter a nickname"]},
//     rating:{type: Number, required: [true, "please enter a rating"]},
//     comment:{type: String, required:[true, "please enter a comment more than 5 characters"]}
// }, {timestamps:true})

//create an instance of mongoose.schema, fill in EXACTLY how you want it stored in database!!!! 
const ProductSchema2 = new mongoose.Schema({
    //adds relationship between product and user! 
            user:{
                type: mongoose.Types.ObjectId, 
                required: true, 
                ref: 'User'
            },
            name:{
                type: String, 
                required: [true, "You must enter a first name!"],
                minlength: [3, "your first name must be 3 characters"]
            }, 
            image:{
                type: String, 
                required: [true, "You must enter an image"],
                minlength: [3, " must be >3 characters"]
            },
            description:{
                type: String, 
                required: [true, "You must enter a description"],
                minlength: [3, " must be > 3 characters"]
            },
            category:{
                type: String, 
                required: [true, "You must enter a description"],
                minlength: [3, " must be > 3 characters"]
            },
            price:{
                type: Number, 
                required: [true, "you must enter a price"],
                min: [1, "you must enter a price"]
            }, 
            rating:{
                type: Number, 
                required: [true, "you must enter a rating"],
                min: [1, "you must enter a rating"], 
                defult: 0
            }, 
            numReviews:{
                type: Number, 
                required: [true, "you must enter a review number"],
                min: [1, "you must enter a review number"],
                default: 0
            }
  //timestamp will create another key:value with time created at! 
}, {timestamps: true})

//export the model so your controller can use it to query! 
const Product2= mongoose.model('Product2', ProductSchema2);
module.exports = Product2;
