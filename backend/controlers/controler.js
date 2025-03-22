const { StoreData } = require("../models/data");
// add Video 
exports.addCollection = async (req, res) => {
  try {
    const { imgUrl, titel, category, videourl,description, duration, models, alt } = req.body;
    const userCheck = await StoreData.findOne({ Videourl: videourl });
    if (userCheck == null) {
      const record = new StoreData({
        ImgUrl: imgUrl,
        Titel: titel,
        Category: category,
        Videourl: videourl,
        Description: description,
        Duration: duration,
        Models: models,
        Alt: alt || titel,
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

// All data find
exports.allData = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 18;
    const startIndex = (page - 1) * limit;
    
    const record = await StoreData.find().skip(startIndex).limit(limit);
    
    const totalCount = await StoreData.countDocuments();

    res.json({
      TotalCount: totalCount,
      currentPage: page,
      totalPages: Math.ceil(totalCount / limit),
      statusCode: 202,
      message: "Data retrieved successfully",
      data: record,
    });
  } catch (err) {
    res.json({
      statusCode: 404,
      message: `Error in Find Api ${err}`,
    });
  }
};

// find all Categorys name
  exports.allCategorys =async (req,res) => {
    try {
      const categories = await StoreData.distinct("Category");
      res.json({
        statusCode: 202,
        message: "All Categories",
        data: categories,
      });
    } catch (err) {
      res.json({
        statusCode: 500,
        message: `Error fetching categories: ${err.message}`,
      });
    }
  
  }

  // delete Video 
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

  // edit Video 
  exports.editData = async (req, res) => {
    try {
      const id = req.params.id; 
       const { imgUrl, titel, category, videourl,duration,description,models, alt } = req.body;
      const record = await StoreData.findByIdAndUpdate(id, {
        ImgUrl: imgUrl,
        Titel: titel,
        Category: category,
        Videourl: videourl,
        Duration : duration,
        Description: description,
        Models : models,
        Alt : alt || titel
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

  // Show Views and Update
  exports.viewsUpdate = async (req, res) => {
    const { videoId } = req.body;
    
    try {
      const video = await StoreData.findById(videoId);
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


  
  exports.seprateCate = async (req, res) => {
    const limit = 18;

    try {
      let category = req.query.category;
      const page = parseInt(req.query.page) || 1;
      const skip = (page - 1) * limit;

      if (category) {
        category = category.replace(/-/g, " ");
      } else {
        return res.json({
          statusCode: 400,
          message: "Category name required.",
        });
      }
      
      const findVideos = await StoreData.find({ Category: category })
        .skip(skip)
        .limit(limit);

      const totalCount = await StoreData.countDocuments({ Category: category });

      if (findVideos.length === 0) {
        return res.json({
          statusCode: 404,
          message: `No data found in this category: ${category}`,
        });
      }

      res.json({
        statusCode: 202,
        message: `Videos in category: ${category}`,
        currentPage: page,
        totalPages: Math.ceil(totalCount / limit),
        data: findVideos,
      });
    } catch (err) {
      res.json({
        statusCode: 500,
        message: `Error in category: ${err.message}`,
      });
    }
  };
  
// input search 
  exports.searchData = async (req, res) => {
   const  limit = 18
    try {
      const { query, page } = req.query;
      const searchQuery = query ? query.trim() : ""; 
  
      const skip = (page - 1) * limit;
      
      
      const filter = searchQuery
      ? { Titel: { $regex: searchQuery, $options: "i" } }
      : {};
  
      const record = await StoreData.find(filter).skip(skip).limit(parseInt(limit));
      const totalCount = await StoreData.countDocuments(filter);
      res.json({
        TotalCount: totalCount,
        currentPage: parseInt(page),
        totalPages: Math.ceil(totalCount / limit),
        statusCode: 202,
        message: "Search results retrieved successfully",
        data: record,
      });
    } catch (err) {
      res.json({
        statusCode: 404,
        message: `Error in Search API: ${err.message}`,
      });
    }
  };
  
  // find model 
  exports.findOneModelStar = async (req, res) => {
    try {
      const { model } = req.query;
      const page = parseInt(req.query.page, 18) || 1;
      const limit = 18;
      const skip = (page - 1) * limit;
  
      if (!model) {
        return res.status(400).json({
          statusCode: 400,
          message: "Model name required.",
        });
      }
  
      let parsedModel = model;
      try {
        parsedModel = JSON.parse(model);
      } catch (error) {

      }
  

      let modelName = typeof parsedModel === "string" ? parsedModel : parsedModel.model;
  
      if (!modelName) {
        return res.status(400).json({
          statusCode: 400,
          message: "Model name required.",
        });
      }

      modelName = modelName.replace(/-/g, " ");

      const findVideos = await StoreData.find({ Models: modelName }).skip(skip).limit(limit);
      const totalCount = await StoreData.countDocuments({ Models: modelName });
  
      if (findVideos.length === 0) {
        return res.status(404).json({
          statusCode: 404,
          message: `No Models found in this Store Data: ${modelName}`,
        });
      }
  
      res.json({
        statusCode: 202,
        message: `Videos in Models: ${modelName}`,
        currentPage: page,
        totalPages: Math.ceil(totalCount / limit),
        data: findVideos,
      });
    } catch (err) {
      res.status(500).json({
        statusCode: 500,
        message: `Error in Models: ${err.message}`,
      });
    }
  };
  

//  view big Video 
exports.bigvideofind = async (req, res) => {
  try {
    const { videoId } = req.params;

  
    if (!videoId) {
      return res.status(400).json({
        statusCode: 400,
        message: "Video ID is required.",
      });
    }
  
    const idBaseVideo = await StoreData.findById(videoId);

 
    if (!idBaseVideo) {
      return res.status(404).json({
        statusCode: 404,
        message: `No video found with the given ID: ${videoId}`,
      });
    }

    res.status(200).json({
      statusCode: 200,
      message: `Video found for ID: ${videoId}`,
      data: idBaseVideo,
    });

  } catch (err) {
    console.error("Error fetching video:", err);
    res.status(500).json({
      statusCode: 500,
      message: `Server error: ${err.message}`,
    });
  }
};

  // search releted video with big video 
  exports.findrelatedData = async (req, res) => {
    try {
      const { reletedcategory } = req.params;
      const { page = 1 } = req.query; 
      const limit = 18;
      const skip = (page - 1) * limit;

      if (!reletedcategory) {
        return res.status(400).json({
          statusCode: 400,
          message: "Category is required.",
        });
      }

      const findVideos = await StoreData.find({ Category: reletedcategory })
        .skip(skip)
        .limit(limit);

        console.log(reletedcategory)

      const totalCount = await StoreData.countDocuments({
        Category: reletedcategory,
      });

      if (findVideos.length === 0) {
        return res.status(404).json({
          statusCode: 404,
          message: `No videos found in this category: ${reletedcategory}`,
        });
      }

      res.status(200).json({
        statusCode: 200,
        message: `Videos in category: ${reletedcategory}`,
        currentPage: page,
        totalPages: Math.ceil(totalCount / limit),
        data: findVideos,
      });
    } catch (err) {
      res.status(500).json({
        statusCode: 500,
        message: `Error in category: ${err.message}`,
      });
    }
  };


  exports.categorySection = async (req, res) => {
    try {
      const record = await StoreData.aggregate([
        { $sort: { createdAt: -1 } },
        {
          $group: {
            _id: "$Category",
            latestRecord: { $first: "$$ROOT" }, 
          },
        },
        { $replaceRoot: { newRoot: "$latestRecord" } },
      ]);

      res.json({
        statusCode: 202,
        message: "Data Category retrieved successfully",
        data: record,
      });
    } catch (err) {
      res.json({
        statusCode: 404,
        message: `Error in Find Api ${err}`,
      });
    }
  };