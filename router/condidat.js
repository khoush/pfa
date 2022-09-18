const express=require("express")
const router = express.Router()
const condidatcontroller=require("../controllers/condidat")

const multer = require("multer");


const storage = multer.diskStorage({
  
  destination: function (req, file, callback) {
    callback(null, "./uploadcv");
  },
  filename: function (req, file, callback) {
    callback(null, file.originalname);
  },
});

const uploads = multer({
  storage: storage,
});

router.post("/addcondidat",uploads.any("file"),condidatcontroller.addcondidat)
router.get("/getallcondidat",condidatcontroller.getallcondidat)
router.get("/getonecondidat/:id",condidatcontroller.getonecondidat)
router.get("/getallcodidatarchive",condidatcontroller.getallcondidatarchive)
router.put("/getallcodidatarchive/:id",condidatcontroller.archivecondidat)


module.exports=router