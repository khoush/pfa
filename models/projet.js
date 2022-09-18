const mongoose = require('mongoose');
const project = new mongoose.Schema({
    id : Number,
    organisation : String,
    Email :String,
    descripion :String,
    budget : Number,
    date_deb :Date,
    date_fin :Date,
    image : String,
     archive:{
        type:Boolean,
        default:false
     },
     post: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Post",
        }],






})
module.exports=mongoose.model(
    "Project", project

)