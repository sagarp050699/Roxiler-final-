// dotenv
require("dotenv").config();
const express = require("express");
const app = express();

const cors = require("cors");

// database
const configDB = require("./config/db");

app.use(cors());
app.use(express.json());

// routes
const seedRoute = require("./routes/seedRoute");
const transactionRoute = require("./routes/transactionRoute");
const statisticsRoute = require("./routes/statisticsRoute");

app.use("/api", seedRoute);
app.use("/api", transactionRoute);
app.use("/api", statisticsRoute);

app.get("/", (req, res) => {
  res.send("Hello Roxiler");
});

// production
const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, "/frontend/dist")));
app.get("*", (req, res) =>
  res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"))
);

app.listen(process.env.PORT, () => {
  configDB();
  console.log("server up");
});
