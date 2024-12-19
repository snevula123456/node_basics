const express = require('express');

const app = express();

const port = 3000;

app.get("/", (req,res)=> {
    console.log("Checking the git items")
    res.send("Hello World!")
})

app.listen(port, () => {
    console.log(`Example app Running on the port ${port}`)
})