/**
 * @fileoverview Main server file
 * @author Gyandeep Singh
 */

"use strict";

const express = require("express");
const path = require("path");

const app = express();

app.set("port", process.env.PORT || 5000);
app.use(express.static(path.resolve(process.cwd(), "./public")));

// main/homepage
app.get("/", (req, res) => {
    res.sendFile("./public/index.html");
});

app.listen(app.get("port"), (err) => {
    if (err) {
        return console.error(err);
    }

    console.log(`Running app on localhost: ${app.get("port")}`);
});
