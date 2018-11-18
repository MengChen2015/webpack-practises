const path = require('path');
const webpack = require('webpack');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
        entry: './src/index.js',
        output: {
            filename: '[name].bundle.js',
            path: path.resolve(__dirname, 'dist')
        },
        optimization: {
            runtimeChunk: {
                name: "manifest"
            },
            splitChunks: {
                cacheGroups: {
                    commons: {
                        test: /[\\/]node_modules[\\/]/,
                        name: "vendor",
                        chunks: "all"
                    }
                }
            }
        },
        plugins: [
            new HTMLWebpackPlugin({
                title: 'Code Splitting'
            })
        ],
        module: {
        rules: [
                 {
                     test: /\.css$/,
                     use: [
                         'style-loader',
                         'css-loader'
                     ]
                 },
                {
                    test: /\.(png|svg|jpg|gif)$/,
                    use: [
                        'file-loader'
                    ]
                },
                {
                    test: /\.(woff|woff2|eot|ttf|otf)$/,
                    use: [
                        'file-loader'
                    ]
                },
                {
                    test: /\.(csv|tsv)$/,
                    use: [
                       'csv-loader'
                    ]
                },
                {
                    test: /\.xml$/,
                    use: [
                       'xml-loader'
                    ]
                }
               ]
        }
};