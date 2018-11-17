const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
const webpack = require('webpack');

module.exports = {
        entry: {
            app: './src/index.js'
        },
        mode: 'production',
        plugins: [
            new ManifestPlugin(),
            new CleanWebpackPlugin(['dist']),
            new HtmlWebpackPlugin({
              title: 'Output Management'
         }),

            new webpack.NamedModulesPlugin(),
            new webpack.HotModuleReplacementPlugin()
        ],
       /* devServer: {
            contentBase: './dist'
        },*/
        devtool: 'inline-source-map',
        output: {
            filename: '[name].bundle.[hash].js',
            path: path.resolve(__dirname, 'dist'),
            publicPath: '/'
        }
};