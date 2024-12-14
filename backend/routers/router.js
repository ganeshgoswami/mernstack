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
// router.post("/setCategory/:id",api.setCategory)



// views Update 
router.post("/viewsUpdate/:videoId",api.viewsUpdate)
module.exports = router;