const { StoreData } = require("../models/data");

exports.addCollection = async (req, res) => {
  try {
    const { imgUrl, titel, category, videourl } = req.body;
    const userCheck = await StoreData.findOne({ Videourl: videourl });
 console.log(req.body)
    if (userCheck == null) {
      const record = new StoreData({
        ImgUrl: imgUrl,
        Titel: titel,
        Category: category,
        Videourl: videourl,
      });

      record.save();

      res.json({
        statusCode: 202,
        message: "Successfully Insert Video Data",
        data: record,
      });
    } else {
      res.json({
        statusCode: 404,
        message: "Video Data is Allready Added",
        data: null,
      });
    }
  } catch (err) {
    res.json({
      statusCode: 404,
      message: `page not Found ---- Err in Data Api ${err}`,
      data: null,
    });
  }
};

exports.allData = async (req, res) => {
    try {
      const record = await StoreData.find();
      const totalCount = await StoreData.countDocuments();
      res.json({
        TotalCount: totalCount,
        statusCode: 202,
        message: "Data Finded Successfully",
        data: record,
      });
    } catch (err) {
      res.json({
        statusCode: 404,
        message: `Error in Find Api ${err}`,
        data: record,
      });
    }
  };

  exports.setCategory = async (req, res) => {
    try {
      const id = req.params.id;
   
      const record = await StoreData.findById(id);
      res.json({
        statusCode: 202,
        message: "Update Value",
        data: record,
      });
    } catch (err) {
      res.json({
        statusCode: 500,
        message: `Update API is not working: ${err.message}`,
      });
    }
  };

  exports.deleteVideo = async (req, res) => {
    try {
      const id = req.params.id;
      const record = await StoreData.findByIdAndDelete(id);
      console.log(record);
      res.json({
        statusCode: 202,
        message: "data Deleted ",
        data: record,
      });
    } catch (err) {
      res.json({
        statusCode: 404,
        message: `Error in Api ${err}`,
        data: null,
      });
    }
  };

  exports.editData = async (req, res) => {
    try {
      const id = req.params.id; 
       const { imgUrl, titel, category, videourl } = req.body; // Assuming the updated data is coming from req.body
    
      const record = await StoreData.findByIdAndUpdate(id, {
        ImgUrl: imgUrl,
        Titel: titel,
        Category: category,
        Videourl: videourl,
      });
  
     
      res.json({
        statusCode: 202,
        message:"Data Updated",
        record
      });
  
    } catch (err) {
      res.json({
        statusCode: 500,
        message: `Update API is not working: ${err.message}`,
      });
    }
  };