const express=require("express")
const router = express.Router()
const postcontroller=require("../controllers/post")
const multer = require('multer');
const storage =multer.diskStorage({
   
    destination:function(req,file,callback){
      callback(null,'./upload');
    },
    filename:function(req,file,callback){
        callback(null,file.originalname) ;
    }
  });
  
  const upload=multer({
    storage: storage,
   
  })
router.post("/addpost/:id", upload.any('image'),postcontroller.addpost)


module.exports=router