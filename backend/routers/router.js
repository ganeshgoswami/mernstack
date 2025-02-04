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

router.get("/findOneCategory/:id",api.findOneCategory)
router.get("/seprateCate",api.seprateCate)
// views Update 
router.post("/viewsUpdate/:videoId",api.viewsUpdate)

// input search 
router.get("/searchData",api.searchData)

//models Search
router.get("/findOneModelStar",api.findOneModelStar)

module.exports = router;