const Stock = require("../models/stock");
const Product = require("../models/product");
const Store = require("../models/store");

const registerStock = async(req,res) =>{
    if(!req.body.amount ||!req.body.code ||!req.body.name) return res.status(400).send("Incomplete data");

    let product = await Product.findOne({code: req.body.code});
    if(!product) return res.status(400).send("Product wasn't assigned");

    let store = await Store.findOne({name: req.body.name});
    if(!store) return res.status(400).send("Store wasn't assigned");

    let stock = new Stock({
        productId: product._id,
        storeId: store._id,
        amount: req.body.amount,
    });

    let result = stock.save();
    if(!result) return res.status(400).send("Failed to register stock");
    return res.status(200).send({stock});
};

const listStock = async(req,res) =>{
    let stock = await Stock.find().populate("productId").exec();
    if(!stock || stock.length ==="") return res.status(400).send("No stock");
    return  res.status(200).send({stock});
};

module.exports = {registerStock, listStock};