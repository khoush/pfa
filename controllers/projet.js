
const projet = require('../models/projet');


exports.addproject = async(req, res) => {
    try{
    let id = req.params.id
 
 let project=   await projet.findOne({id:id})
 let nomorganization= await projet.findOne({organisation:req.body.organisation})
 if(project){
    res.status(401).json("projett déhja existe")
    console.log("projet déja existe");
 }else if(nomorganization){
    res.status(401).json("projett déhja existe")
    console.log("projet déja existe");
 }else{
    let newprojet= new projet({
        id:req.params.id,
        organisation:req.body.organisation,
        Email :req.body.Email,
        descripion :req.body.descripion,
        budget : req.body.descripion,
        date_deb :req.body.date_deb,
        date_fin :req.body.date_fin,
        
    }) 
    if (req.files.length > 0) {
        req.files.map((file) => {
            newprojet.image = "http://127.0.0.1:3000/upload/" + file.originalname;
        });
      } 
    let result=await newprojet.save()
    res.status(200).json({response:result,msg:"ajouter avec succes "})

 }
}catch(erorr){
    console.log(erorr);
    res.status(400).json("error")
}
};
exports.getallprojet=async(req,res)=>{
    try {
        let  allproject=await projet.find({archive:"false"}).populate("post")
        res.status(200).json({result:allproject,msg:"all project "})
    } catch (error) {
        res.status(400).json("error")
        console.log(error);
    }
}
exports.getoneproject=async(req,res)=>{
    try {
        let Project =await projet.findById(req.params.id).populate("post")
        
        res.status(200).json({result:Project,msg:"projet"})
    } catch (error) {
        res.status(400).json("error")
        console.log(error);

    }
}
exports.archiveprojet=async(req,res)=>{
    try {
        let updateprojet=await projet.findByIdAndUpdate({
            _id:req.params.id
        },{
            archive:true
        })
        res.status(200).json({result:updateprojet,msg:"update avec succes"})
    } catch (error) {
        
    }
}