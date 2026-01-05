const express = require("express");
const path = require("path");

const app = express();

app.use("/images", express.static(path.join(__dirname, "images")));

app.use("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
  console.log(`Request served by${process.env.APP_NAME}`);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, (req, res) => {
  console.log("Server is listening on " + PORT);
});
