const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin= require('copy-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    mode: "development",

    entry: {
        index: ['./src/js/index.js'],
        dashboard: ['./src/js/dashboardindex.js'],
        classes: ['./src/js/classes.js'],
        clientpage: ['./src/js/clientpage.js'],
        client: ['./src/js/clients.js'],
        request: ['./src/js/requests.js']

    },

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: './js/[name].js' //change to mycrm.bundle.js
    },
    devtool: "source-map",
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                include: path.resolve(__dirname, 'src'),
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env',
                                        '@babel/preset-react']
                        }
                    }
                ]
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            hmr: process.env.NODE_ENV === 'development',
                            reloadAll: true,
                        },
                    },
                    {
                        loader: 'css-loader',
                        options: {
                           // minimize: true,
                            url: false
                        }
                    }
                    ]
            },
            {
                test: /\.html$/,
                include: path.resolve(__dirname, 'src/includes'),
                use: {
                    loader: 'html-loader',
                    options: {
                        attrs: false
                    }
                }
            }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            inject: true,
            template: path.join(__dirname, 'src/index.html'),
            chunks: ["index","dashboard"],
            filename: 'index.html'
        }),
        new HtmlWebpackPlugin({
            inject: true,
            template: path.join(__dirname, 'src/requests.html'),
            chunks: ["index", "request"],
            filename: 'requests.html'
        }),
        new HtmlWebpackPlugin({
            inject: true,
            template: path.join(__dirname, 'src/clients.html'),
            chunks: ["index", "client"],
            filename: 'clients.html'
        }),
        new HtmlWebpackPlugin({
            inject: true,
            template: path.join(__dirname, 'src/clientpage.html'),
            chunks: ["index", "clientpage"],
            filename: 'clientpage.html'
        }),
        new CopyWebpackPlugin([
            {
                from: './src/webfonts',
                to: './webfonts'
            },
            {
                from: './src/img',
                to: './img'
            },
        ]),
        new MiniCssExtractPlugin({
            filename: "./css/[name].css",
            chunkFilename: "[id].css"
        })
    ],
    // resolve:{
    //     alias:{
    //         src: path.resolve(__dirname, "src"),
    //         components: path.resolve(__dirname, "src", "components")
    //     }
    // },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 9999
    }
};