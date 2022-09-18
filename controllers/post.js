const projet = require("../models/projet");
const post = require("../models/post");
const ObjectID = require("mongoose").Types.ObjectId;




/*
if (!ObjectID.isValid(req.params.id))
    return res.status(400).send("ID unknown : " + req.params.id);

  await projet
    .findByIdAndUpdate(
      { _id: req.params.id },
      {
        $addToSet: { post: req.body.id },
      },
      { new: true }
    )

*/




exports.addpost = async(req, res) => {
    try{
    let id = req.params.id
 
 let Post=   await post.findOne({id:id})
 let Titre= await post.findOne({titre:req.body.titre})
 if(Post){
    res.status(401).json("post déhja existe")
    console.log("post déja existe");
 }else if(Titre){
    res.status(401).json("post déja existe")
    console.log("post déja existe");
 }else{
    let newpost= new post({
        id:req.params.id,
        titre:req.body.titre,
        descripion :req.body.descripion,
        
        date:req.body.date,
        
        
    }) 
    if (req.files.length > 0) {
      req.files.map((file) => {
          newpost.image = "http://127.0.0.1:3000/upload/" + file.originalname;
      });
    } 
   
    let result=await newpost.save()
    if (!ObjectID.isValid(req.params.id))
    return res.status(400).send("ID unknown : " + req.params.id);

  await projet
    .findByIdAndUpdate(
      { _id: req.params.id },
      {
        $addToSet: { post: result._id },
      },
      { new: true }
    )
    res.status(200).json({response:result,msg:"ajouter avec succes "})

 }
}catch(erorr){
    console.log(erorr);
    res.status(400).json("error")
}
};
exports.getallpost=async(req,res)=>{
    try {
        let  allpost=await post.find({archive:false})
        res.status(200).json({result:allpost,msg:"all post "})
    } catch (error) {
        res.status(400).json("error")
        console.log(error);
    }
}
exports.getonepost=async(req,res)=>{
    try {
        let Post =await post.findById(req.params.id)
        
        res.status(200).json({result:Post,msg:"post"})
    } catch (error) {
        res.status(400).json("error")
        console.log(error);

    }
}
exports.archivepost=async(req,res)=>{
    try {
        let updatepost=await post.findByIdAndUpdate({
            _id:req.params.id
        },{
            archive:true
        })
        res.status(200).json({result:updatepost,msg:"update avec succes"})
    } catch (error) {
        
    }
}