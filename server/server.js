/**
 * @fileoverview Main server file
 * @author Gyandeep Singh
 */

"use strict";

const express = require("express");
const compression = require("compression");
const path = require("path");
const { fetchItem, fetchNews } = require("./fetch-data");

const app = express();
const indexHtmlFile = path.join(process.cwd(), "./dist/index.html");

app.set("port", process.env.PORT || 5000);
app.use(compression());
app.use(express.static(path.resolve(process.cwd(), "./dist")), { maxAge: 172800000 }); // 2 days

const allPaths = [
    "/",
    "/new",
    "/new/:id",
    "/show",
    "/show/:id",
    "/ask",
    "/ask/:id",
    "/jobs",
    "/jobs/:id"
];

// main/homepage
app.get(allPaths, (req, res) => {
    res.sendFile(indexHtmlFile);
});

// app.get("/api/new", (req, res) =>
//     fetchNews(req.query.page)
//         .then((data) => res.json(data))
//         .catch((err) => {
//             console.error(err);
//             res.status(500).send(err.message);
//         })
// );

app.listen(app.get("port"), (err) => {
    if (err) {
        return console.error(err);
    }

    console.log(`Running app on localhost: ${app.get("port")}`);
});
