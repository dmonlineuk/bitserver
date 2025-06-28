const express = require("express");
const server = express();
const path = require("path");


server.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, './index.html'));
});

server.listen(3000);
