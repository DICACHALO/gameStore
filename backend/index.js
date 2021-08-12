const express = require("express");
const cors = require("cors");
const { dbConnection} = require("./db/db");
require("dotenv").config();

//Routes
const User = require("./routes/user");
const Store = require("./routes/store");
const Product = require("./routes/product");
const Stock = require("./routes/stock");

const app = express();
app.use(express.json());
app.use(cors());

//api
app.use("/api/user", User);
app.use("/api/store", Store);
app.use("/api/product", Product);
app.use("/api/stock", Stock);

app.listen(process.env.PORT, () =>
console.log("Backend server running on port: ", process.env.PORT)
);

dbConnection();