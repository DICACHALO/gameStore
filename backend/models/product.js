const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: String,
  code: String,
  price: Number,
  description: String,
  date: { type: Date, default: Date.now },
  dbStatus: Boolean,
});

const product = mongoose.model("product", productSchema);

module.exports = product;