const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');

module.exports = {
        entry: {
            app: './src/index.js',
            print: './src/print.js'
        },
        plugins: [
            new ManifestPlugin(),
            new CleanWebpackPlugin(['dist']),
            new HtmlWebpackPlugin({
              title: 'Output Management'
         })
        ],
        devServer: {
            contentBase: './dist'
        },
        devtool: 'inline-source-map',
        output: {
            filename: '[name].bundle.[hash].js',
            path: path.resolve(__dirname, 'dist'),
            publicPath: '/'
        }
};