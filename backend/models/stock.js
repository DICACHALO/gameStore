const mongoose = require("mongoose");

const stockSchema = new mongoose.Schema({
  productId: { type: mongoose.Schema.ObjectId, ref: "product" },
  storeId: { type: mongoose.Schema.ObjectId, ref: "store" },
  cantidad: Number,
  date: { type: Date, default: Date.now },
});

const stock = mongoose.model("stock", stockSchema);
module.exports = stock;