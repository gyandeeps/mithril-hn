/**
 * @fileoverview
 * @author Gyandeep Singh
 */

"use strict";

const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

const extractCSS = new ExtractTextPlugin("./[name]-[chunkhash].css");

module.exports = () => {
    return {
        entry: {
            "app": "./src/js/app.js"
        },
        output: {
            path: path.resolve(__dirname, "../dist"),
            filename: `./[name]-[chunkhash].js`
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
                                    "mopt"
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
            new HtmlWebpackPlugin({
                filename: "index.html",
                template: "public/index.ejs"
            }),
            new webpack.optimize.UglifyJsPlugin({
                compress: {
                    warnings: false
                },
                mangle: true,
                minimize: true
            }),
            new CopyWebpackPlugin(
                [
                    {
                        from: "./public/manifest.json"
                    },
                    {
                        from: "./public/img",
                        to: "img"
                    }
                ],
                {
                    copyUnmodified: true
                }
            )
        ],
        stats: {
            // Nice colored output
            colors: true
        }
    };
};
