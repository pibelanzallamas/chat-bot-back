require("dotenv").config();
const express = require("express");
const cors = require("cors");
const axios = require("axios");
const app = express();
const router = require("./routes/index.routes.js")

app.use(cors());
app.use(express.json());
app.use(router);

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
