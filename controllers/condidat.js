const condidat=require("../models/condidat")

exports.addcondidat=async(req,res)=>{
try {
    let condidatexiste= await condidat.findOne({Email:req.body.Email})
    if(condidatexiste){
        res.status(401).json("condidat existe")
    }else{
        const newcondidat=new condidat({
            full_name:req.body.full_name,
    Email:req.body.Email,
    offre:req.body.offre
        })
        if (req.files.length > 0) {
            req.files.map((file) => {
                newcondidat.cv = "http://127.0.0.1:3000/uploadcv/" + file.originalname;
            });
          } 

        let result =await newcondidat.save()
        res.status(200).json({response:result,msg:"condidat saved "})
    }
} catch (error) {
    console.log(error);
    res.status(400).json("error")
}
}

exports.getallcondidat=async(req,res)=>{
    try {
        let  allcondidat=await condidat.find({archive:false})
        res.status(200).json({result:allcondidat,msg:"all project "})
    } catch (error) {
        res.status(400).json("error")
        console.log(error);
    }
}
exports.getonecondidat=async(req,res)=>{
    try {
        let Condidat =await condidat.findById(req.params.id)
        res.status(200).json({result:Condidat,msg:"projet"})
    } catch (error) {
        res.status(400).json("error")
        console.log(error);

    }
}
exports.archivecondidat=async(req,res)=>{
    try {
        let updatecondidat=await condidat.findByIdAndUpdate({
            _id:req.params.id
        },{
            archive:true
        })
        res.status(200).json({result:updatecondidat,msg:"update avec succes"})
    } catch (error) {
        
    }
}
exports.getallcondidatarchive=async(req,res)=>{
    try {
        let  allcondidat=await condidat.find({archive:true})
        res.status(200).json({result:allcondidat,msg:"all project "})
    } catch (error) {
        res.status(400).json("error")
        console.log(error);
    }
}