const express = require("express");

const app = express();

const port = 3000;

app.get("/", (req, res) => {
    res.send("Welcome to the Node js Initial")
});

app.listen(port, () => {
  console.log(`Example app Running on the port ${port}`);
});
