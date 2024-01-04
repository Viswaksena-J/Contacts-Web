const mongoose  = require('mongoose');

const userSchema = mongoose.Schema({
   username:{
    type:String,
    required:[true,"Please add the username"],
   },
   email:{
    type:String,
    required:[true,"Please add the contact email address"],
    unique:[true,"Email already exists"],
   },
   phone:{
    type:String,
    required:[true,"Please add the contact phone number"],
   }
},{
    timestamps:true
})

module.exports = mongoose.model("User",userSchema)