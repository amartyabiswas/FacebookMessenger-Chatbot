let mongoose=require('mongoose');

let ColorSchema=new mongoose.Schema({
    color: String
});

module.exports=mongoose.model("colors", ColorSchema);