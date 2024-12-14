const { StoreData } = require("../models/data");

exports.addCollection = async (req, res) => {
  try {
    const { imgUrl, titel, category, videourl,description, duration } = req.body;
    const userCheck = await StoreData.findOne({ Videourl: videourl });
    if (userCheck == null) {
      const record = new StoreData({
        ImgUrl: imgUrl,
        Titel: titel,
        Category: category,
        Videourl: videourl,
        Description: description,
       Duration: duration
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
      });
    }
  };

  // exports.setCategory = async (req, res) => {
  //   try {
  //     const id = req.params.id;
   
  //     const record = await StoreData.findById(id);
  //     res.json({
  //       statusCode: 202,
  //       message: "Update Value",
  //       data: record,
  //     });
  //   } catch (err) {
  //     res.json({
  //       statusCode: 500,
  //       message: `Update API is not working: ${err.message}`,
  //     });
  //   }
  // };


  exports.deleteVideo = async (req, res) => {
    try {
      const id = req.params.id;
      const record = await StoreData.findByIdAndDelete(id);
  
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

  exports.viewsUpdate = async (req, res) => {
    const { videoId } = req.body;
    try {
      const video = await StoreData.findById(videoId);
      // Find user
      if (!video) {
        return res.status(404).json({
          statusCode: 404,
          message: "Video not found",
        });
      }
      
      video.Views += 1; 

    await video.save();
  
      res.status(202).json({
        statusCode: 202,
        message: "Views updated",
        Views: video.Views,
      });
    } catch (err) {
      res.status(500).json({
        statusCode: 500,
        message: `Error updating views: ${err.message}`,
      });
    }
  };