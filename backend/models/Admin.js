const mongoose = require("mongoose");

const adminSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: Number, required: true }
});

const Admin = mongoose.model('admin', adminSchema);

module.exports = { Admin };