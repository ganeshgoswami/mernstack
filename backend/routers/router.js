const router = require("express").Router();
const api = require("../controlers/controler")
const adminAPI = require("../controlers/adminLoginControler")

// admin Login 
router.post("/adminlogin",adminAPI.adminlogin)

// delete and edit by Admin 
router.delete("/deleteVideo/:id",api.deleteVideo)
router.put("/editData/:id",api.editData)

// User Data 
router.get("/allData",api.allData)
router.post("/addCollection",api.addCollection)

router.get("/allCategorys",api.allCategorys)

router.get("/seprateCate",api.seprateCate)
// views Update 
router.post("/viewsUpdate/:videoId",api.viewsUpdate)

// input search 
router.get("/searchData",api.searchData)

//models Search
router.get("/findOneModelStar",api.findOneModelStar)

// big Video
router.get("/bigvideofind/:videoId",api.bigvideofind)

// releted video with big video 
router.get("/findrelatedData/:reletedcategory",api.findrelatedData)

// all cAtegory Data 
router.get("/categorysection",api.categorySection)

module.exports = router;