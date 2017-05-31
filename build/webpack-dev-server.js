/**
 * @fileoverview
 * @author Gyandeep Singh
 */

"use strict";

const WebpackDevServer = require("webpack-dev-server");
const webpack = require("webpack");
const config = require("./webpack.dev.config.js");

const compiler = webpack(config);
const port = Number(process.env.PORT || 3000);

const server = new WebpackDevServer(compiler, {
    publicPath: config.output.publicPath,
    historyApiFallback: true,
    noInfo: true,
    disableHostCheck: true,
    overlay: true,
    contentBase: "./public",
    proxy: {
        "/news": {
            target: "http://localhost:5000",
            secure: false
        }
    }
});
server.listen(port, () => console.log(`Server started. Please go to http://localhost:${port}`));
