const mongoose = require("mongoose");
const express = require("express");
const app = express();
const cors = require("cors");
const PORT = process.env.PORT || 8000
const dotenv = require('dotenv').config();
const paypal = require('paypal-rest-sdk')


app.use(cors())
app.use(express.json(), express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.json("hi")
})


require("./config/mongoose.config");
const AllMyProductRoutes = require("./routes/product.route");

AllMyProductRoutes(app);
// AllMyUserRoutes(app);
// AllMyOrderRoutes(app);

app.listen(PORT, () => console.log("---THE SERVER IS ALL FIRED UP ON---" + PORT))