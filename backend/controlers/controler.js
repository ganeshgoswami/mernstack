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

// find all Categorys in  arr
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


  exports.findOneCategory = async (req, res) => {
    try {
      let categoryName = req.query.category; // Use 'let' to allow reassignment
      const id = req.query.id;
      const page = parseInt(req.query.page) || 1;
      const limit = 10;
      const skip = (page - 1) * limit;
  
      if (categoryName) {
        categoryName = categoryName.replace(/-/g, " ");
      } else {
        return res.json({
          statusCode: 400,
          message: "Category name required.",
        });
      }
  
      const findVideos = await StoreData.find({ Category: categoryName })
        .skip(skip)
        .limit(limit);
  
      const idBaseVideo = id ? await StoreData.findById(id) : null;
  
      const totalCount = await StoreData.countDocuments({ Category: categoryName });
  
      if (findVideos.length === 0) {
        return res.json({
          statusCode: 404,
          message: `No products found in this category: ${categoryName}`,
        });
      }

      res.json({
        statusCode: 202,
        message: `Videos in category: ${categoryName}`,
        currentPage: page,
        totalPages: Math.ceil(totalCount / limit),
        idBaseData: idBaseVideo,
        data: findVideos,
      });
    } catch (err) {
      res.json({
        statusCode: 500,
        message: `Error in category: ${err.message}`,
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
  