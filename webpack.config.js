/*
    To start initalize the folder with...npm init -y
    create a src/index.js and index.html file with html boilerplate
    install webpack... npm webpack webpack-cli --save-dev
    
    Add to package.json in the scripts section....
    "dev": "webpack --mode development",
    "build": "webpack --mode production",
*/

const HtmlWebpackPlugin = require("html-webpack-plugin"); //npm install html-webpack-plugin html-loader --save-dev
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');//Auto cleans webpack ./dist folder

module.exports = {
    entry: './src/index.js',
    output:{
        path: path.resolve(__dirname, 'dist'),//Creates this path for static production build
        filename: 'bundle.js'//Script tag in index.html body auto generated and appended to bdody
    },
    module:{
        rules: [
            {test: /\.txt/, use: 'raw-loader'},//rules for files that will be loaded and bundled
            {test: /\.css/, use: [{loader: 'style-loader'}, {loader: 'css-loader'}]},//allows for import of css files to be bundled...npm install css-loader style-loader --save-dev
            {test: /\.html$/, use: [ {loader: 'html-loader', options: {minimize: true}}]},
            {test: /\.js$/, exclude: /node_modules/, use:{loader: 'babel-loader', options: {presets:['@babel/preset-env']}}}, // add Babel and its preset npm command ...npm install babel-loader @babel/core @babel/preset-env --save-dev
            {test: /\.(png|jpg|gif)$/, use: {loader: 'file-loader'}} //add for loading assets and run command.... npm install file-loader --save-dev
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({template: './src/index.html', title: "Webpack Setup"}),//points to manually created index.html in ./src
        new CleanWebpackPlugin()//cleans webpack to remove unused files from the build folder
    ],
    devServer: {
        contentBase: './dist',//not really needed, but auto open is a nice to have
        open: true
    },
    mode: 'production'// development or none
}


/* install webpack dev-server...npm install webpack-dev-server --save-devadd to webpack package.json
"scripts": {
    "start": "webpack-dev-server"
},


converts test into older broswer code...npm run dev -- --devtools false


*/