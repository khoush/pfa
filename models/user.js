const mongoose = require('mongoose');
const user = new mongoose.Schema({
    firstname: 
    {type : String
    
    },
    lastname: 
    {type : String
    
    },
    email:
    {type: String},
    password: 
    {type : String
    
    },
    role:
    {type: String, enum:['admin']
     },
   

    

});
module.exports=mongoose.model(
    "User", user

)

