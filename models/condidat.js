const mongoose = require('mongoose');
const condidat = new mongoose.Schema({
 
    full_name : String,
    Email :String,
    offre :String,
   cv:String,
   archive:{
    type:Boolean,
    default:false
   }






})
module.exports=mongoose.model(
    "condidat", condidat

)