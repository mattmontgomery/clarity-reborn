const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');

module.exports = {
    context: `${__dirname}/lib`,
    entry: `./index.js`,
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: [
                /node_modules/
            ],
            loader: 'babel-loader',
            query: {
                presets: ['es2015', 'stage-0', 'react']
            },
        },{
			test: /\.s?css$/,
			loader: ExtractTextPlugin.extract("css-loader?sourceMap!sass-loader?sourceMap"),
		}],
    },
    node: {
        fs: "empty",
    },
    output: {
        path: `${__dirname}/dist`,
        filename: 'app.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'index.ejs'
        }),
        new ExtractTextPlugin('app.css'),
    ],
    resolve: {
        root: path.resolve('./lib'),
    },
};
