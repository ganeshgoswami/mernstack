const { Admin } = require("../models/Admin");

exports.adminlogin = async (req, res) => {
    const { email, password } = req.body;
    try {
        // Check if there's a admin with the provided email
        const loginAdmin = await Admin.findOne({ Email: email });
        console.log(loginAdmin)
      if (loginAdmin !== null) {
        if (loginAdmin.password === password) {
          res.json({
            message: "Successfully login",
            status: 202,
            data: loginAdmin,
          });
        } else {
          res.json({
            message: "Password not matched",
            status: 404,
            data: loginAdmin,
          });
        }
      } else {
        res.json({
          message: "Email not correct",
          status: 404,
        });
      }
    } catch (err) {
      console.error("Error:", err);
      res.status(500).json({ message: "Internal Server Error" });
    }
  };