const mongoose=require("mongoose");
const user = require("../models/user");
const bcrypt = require('bcryptjs');

let db = async ()=>{
    try {
       await mongoose.connect('mongodb://localhost:27017/monProjet',
        {
            useNewUrlParser : true , 
            useUnifiedTopology : true , 
              
         },
         async (error)=>{
            if (error){
                console.log("voilà un erreur")
            }
            else
            {
        let admin = await user.findOne({role : "admin"}) 
        if (admin)
          {
            console.log("admin existe")

          }
          else{
             const user1 = new user({
                firstname : 'Maher',
                lastname : '....',
                email : 'maher@gmail.com',
                role :'admin',
                
              })
            const pass = 'abcdefgh'
            const salt = await bcrypt.genSalt(10);
            user1.password= await bcrypt.hash(pass,salt)
           await user1.save( )
            console.log('user saved')
        
          }

            }



         }
        )
        console.log('database connected')
        
    } catch (error) {
        console.log(error);
        
    }
};
module.exports=db;