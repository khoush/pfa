const User=require("../models/user")
let sekretkey="zlknrjthkerjtelrjtelrjtk51255"
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
exports.login=async(req,res)=>{
    try {
        const email=req.body.email
        const password= req.body.password


    } catch (error) {
        
    }
}

exports.login = async (req, res) => {
    const { Email, password } = req.body;
    try {
   
      const searchedUser = await User.findOne({ Email });
   
      if (!searchedUser) {
        return res.status(400).send({ msg: "mauvais identifiant" });
      }
   
      const match = await bcrypt.compare(password, searchedUser.password);
  
      if (!match) {
        return res.status(400).send({ msg: "mauvais identifiant" });
      }
    
      const payload = {
        _id: searchedUser._id,
        role: searchedUser.role,
      };
      const token = await jwt.sign(payload,sekretkey, {
        expiresIn: 3600,
      });
 
      res
        .status(200)
        .send({ user: searchedUser, msg: "success", token: `Bearer ${token}` });
    } catch (error) {
      res.status(400).send({ msg: "ne peut pas obtenir l'utilisateur" });
    }
  };