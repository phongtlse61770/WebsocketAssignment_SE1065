require('webpack');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'express/view');
var APP_DIR = path.resolve(__dirname, 'app');

var config = {
    entry: APP_DIR + '/index.jsx',
    output: {
        path: BUILD_DIR,
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?/,
                include: APP_DIR,
                loader: 'babel-loader'
            }
        ]
    },

    plugins: [
        new CopyWebpackPlugin([
            {
                from: path.join("node_modules", "react-md", "dist", "react-md.indigo-purple.min.css"),
                to: BUILD_DIR
            }
        ])
    ]
};

module.exports = config;