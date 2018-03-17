let mongoose=require('mongoose');

let userColorSchema=new mongoose.Schema({
	fb_id: String,
    color: String
});

module.exports=mongoose.model("usercolors", userColorSchema);