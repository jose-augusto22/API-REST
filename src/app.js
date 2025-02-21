const express = require("express");
const app = express();
app.use(express.json());

app.get("/", function (req, res) {
  res.send("Olá Mundo");
});

app.post("/tasks", function (req, res) {
  console.log(req.body);
  res.json({
    statusCode: 200,
  });
});

app.listen(3000, () => console.log("api rodando."));
