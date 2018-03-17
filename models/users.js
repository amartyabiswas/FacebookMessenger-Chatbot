let mongoose=require('mongoose');

let userSchema=new mongoose.Schema({
    fb_id: String,
    first_name:String,
    last_name: String,
    profile_pic: String,
    locate: String,
    gender: String,
    timezone: String
});

module.exports=mongoose.model("users", userSchema);