const express = require("express");
const app = express();
const port = 3000;
app.use(express.static('public'));

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.get("/about", (req, res) => {
    res.send("Это простое приложение на Express.js");
  });

app.use((req, res) => {
    res.status(404).send("Страница не найдена");
  });

app.listen(port, () => {
  console.log("App listening at http://localhost:3000");
});

