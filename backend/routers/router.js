const router = require("express").Router();
const api = require("../controlers/controler")
const adminAPI = require("../controlers/adminLoginControler")


router.post("/adminlogin",adminAPI.adminlogin)

router.get("/allData",api.allData)
router.post("/addCollection",api.addCollection)
router.post("/setCategory/:id",api.setCategory)

router.delete("/deleteVideo/:id",api.deleteVideo)
router.put("/editData/:id",api.editData)
module.exports = router;