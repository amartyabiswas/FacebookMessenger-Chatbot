let mongoose=require('mongoose');

let UserSchema=new mongoose.Schema({
    fb_id: String,
	first_name: String,
	last_name: String,
	profile_pic: String,
	locale: String,
	gender: String,
	timezone: String,
	//newsletter: Number
});

module.exports=mongoose.model("User", UserSchema);