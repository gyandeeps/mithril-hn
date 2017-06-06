/**
 * @fileoverview
 * @author Gyandeep Singh
 */

"use strict";

"use strict";

const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    devtool: "inline-source-map",
    entry: [
        "webpack-dev-server/client?http://localhost:3000/",
        "./src/js/app.js"
    ],
    output: {
        path: path.join(process.cwd(), "public"),
        filename: "app.js",
        publicPath: ""
    },
    resolve: {
        modules: [
            process.cwd(),
            "node_modules"
        ]
    },
    module: {
        rules: [
            // {
            //     test: /\.(js|jsx)$/,
            //     include: [
            //         path.join(__dirname, "../src")
            //     ],
            //     use: [
            //         {
            //             loader: "babel-loader",
            //             options: {
            //                 presets: [["es2015", {"modules": false}]],
            //                 plugins: []
            //             }
            //         }
            //     ],
            // },
            {
                test: /\.(css|less)$/,
                loader: "style-loader!css-loader!less-loader"
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: "public/index.html"
        })
    ]
};
