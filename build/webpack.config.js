/**
 * @fileoverview
 * @author Gyandeep Singh
 */

"use strict";

const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const webpack = require("webpack");

const extractCSS = new ExtractTextPlugin("./app.css");

module.exports = () => {
    return {
        entry: {
            "app": "./src/js/app.js"
        },
        output: {
            path: path.resolve(__dirname, "../public"),
            filename: `./[name].js`
        },
        resolve: {
            modules: [
                process.cwd(),
                "node_modules"
            ]
        },
        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    include: [
                        path.join(__dirname, "../src")
                    ],
                    use: [
                        {
                            loader: "babel-loader",
                            options: {
                                presets: [
                                    ["env", {
                                        "targets": {
                                            "browsers": ["last 2 versions", "safari >= 7"]
                                        },
                                        "modules": false
                                    }],
                                    ["babili"]
                                ],
                                plugins: [
                                    //"mopt"
                                ]
                            }
                        }
                    ]
                },
                {
                    test: /\.(less|css)$/,
                    loader: extractCSS.extract([ "css-loader?minimize", "less-loader" ])
                }
            ]
        },
        plugins: [
            extractCSS,
            new webpack.optimize.UglifyJsPlugin({
                compress: {
                    warnings: false
                },
                mangle: true,
                minimize: true
            })
        ],
        stats: {
            // Nice colored output
            colors: true
        }
    };
};
