const mongoose = require("mongoose");

const adminSchema = new mongoose.Schema({
  Email: { type: String, required: true },
  Password: { type: String, required: true }
});

const Admin = mongoose.model('admin', adminSchema);

module.exports = { Admin };