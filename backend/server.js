// dotenv
require("dotenv").config();
const express = require("express");
const app = express();

const cors = require("cors");

// database
const configDB = require("./config/db");

app.use(cors());
app.use(express.json());

const seedRoute = require("./routes/seedRoute");

app.use("/api", seedRoute);

app.get("/", (req, res) => {
  res.send("Hello Roxiler");
});

app.listen(process.env.PORT, () => {
  configDB();
  console.log("server up");
});
