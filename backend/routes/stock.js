const express = require("express");

const router = express.Router();

const StockController = require("../controllers/stock");

router.post('/registerstock',StockController.registerStock);

router.get('/liststock',StockController.listStock);

module.exports = router;