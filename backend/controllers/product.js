const Product = require("../models/product");

const registerProduct = async (req, res) => {
  if (!req.body.name || !req.body.code || !req.body.price)
    return res.status(401).send("You must to register all required fields.");

  const existingProduct = await Product.findOne(
    { name: req.body.name } || { code: req.body.code }
  );

  if (existingProduct)
    return res.status(401).send("The product already exists.");

  const product = new Product({
    name: req.body.name,
    code: req.body.code,
    price: req.body.price,
    description: req.body.description,
    dbStatus: true,
  });

  const result = await product.save();

  if (!result)
    return res
      .status(401)
      .send("Sorry. The product could not be found, please try again.");

  return res.status(201).send({ product });
};

const listProduct = async (req, res) => {
  const product = await Product.find();
  if (!product) return res.status(401).send("The product doesn't exist.");
  return res.status(201).send({ product });
};

module.exports = { registerProduct, listProduct };