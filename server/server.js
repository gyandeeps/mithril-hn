/**
 * @fileoverview Main server file
 * @author Gyandeep Singh
 */

"use strict";

const express = require("express");
const path = require("path");
const { fetchItem, fetchNews } = require("./fetch-data");

const app = express();

app.set("port", process.env.PORT || 5000);
app.use(express.static(path.resolve(process.cwd(), "./public")));

// main/homepage
app.get("/", (req, res) => {
    res.sendFile("./public/index.html");
});

app.get("/news", (req, res) =>
    fetchNews(req.query.page)
        .then((data) => res.json(data))
        .catch((err) => {
            console.error(err);
            res.status(500).send(err.message);
        })
);

app.listen(app.get("port"), (err) => {
    if (err) {
        return console.error(err);
    }

    console.log(`Running app on localhost: ${app.get("port")}`);
});
