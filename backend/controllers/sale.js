const Sale = require("../models/sale");
const Product = require("../models/product");
const User = require("../models/user");

const registerSale = async(req,res) =>{
    if(!req.body.amountSold || !req.body.code || !req.body.email) return res.status(400).send("Incomplete data");

    let product = await Product.findOne({code: req.body.code});
    if(!product) return res.status(400).send("Product wasn't assigned");

    let user = await User.findOne({email: req.body.email});
    if(!user) return res.status(400).send("User wasn't assigned");

    let sale = new Sale({
        productId: product._id,
        userId: user._id,
        price: product.price,
        amountSold: req.body.amountSold,
    });

    let result = await sale.save();
    if(!result) return res.status(400).send("Sale failed");
    return res.status(200).send({sale});
};

const listSale = async(req,res) =>{
    let sale = await Sale.find().populate("productId").populate("userId").exec();
    if(!sale || sale.length==="" ) return res.status(400).send("No sale");
    return res.status(200).send({sale});
};

module.exports = {registerSale, listSale};