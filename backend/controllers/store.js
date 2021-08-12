const Store = require("../models/store");

const registerStore = async (req, res) => {
  if (!req.body.name || !req.body.city || !req.body.location)
    return res
      .status(401)
      .send("Please helpe looking you have to fill all the camps noob");

  const existingStore = await Store.findOne({ location: req.body.location });

  if (existingStore)
    return res
      .status(401)
      .send("Sorry already have one store in that position");

  const store = new Store({
    name: req.body.name,
    city: req.body.city,
    location: req.body.location,
    dbStatus: true,
  });

  const result = store.save();

  if (!result) return res.status(401).send("Sorry please try again");

  return res.status(201).send({ store });
};

const listStore = async (req, res) => {
  const store = await Store.find();

  if (!store) return res.status(401).send("Sorry you dont have any products");

  return res.status(201).send({ store });
};

module.exports = { registerStore, listStore };