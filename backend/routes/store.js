const express = require("express");

const router = express.Router();

const StoreController = require("../controllers/store");

router.post('/registerstore',StoreController.registerStore);

router.get('/liststore',StoreController.listStore);

module.exports = router;