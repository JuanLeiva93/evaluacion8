const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.get("/about.html", (req, res) => {
  res.sendFile(__dirname + "/public/index2.html");
});

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});