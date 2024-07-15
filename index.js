require("dotenv").config();
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.get("/prabhakar", (req, res) => {
  res.send("Hello prabhakar!");
});

app.get("/login", (req, res) => {
  res.send("<h1>log in at chai aur code</h1?");
});
app.get("/youtube", (req, res) => {
  res.send("<h2> chai aur code</h2>");
});
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`);
});
