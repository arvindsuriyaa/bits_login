const express = require("express");

const app = express();

const PORT = process.env.PORT || 4000;

app.listen(PORT);

app.get("/", (req, res) => {
  res.send({ message: "App is up and running" });
});
