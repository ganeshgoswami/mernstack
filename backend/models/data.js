const mongoose = require("mongoose");

const mongoschema = mongoose.Schema({
  ImgUrl: String,
  Titel: String,
  Category: String,
  Videourl: String,
  Description: String,
  Duration: String,
  Models:String,
  Alt:String,
  Views: {
    type: Number,
    default: 0,
  }
});


const StoreData = mongoose.model("storeData", mongoschema);

module.exports = { StoreData };
