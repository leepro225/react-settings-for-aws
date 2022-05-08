const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const path = require("path");

module.exports = {
    entry: {
        main: "./src/index.js"
    },
    output: {
        path: path.resolve("./dist"),
        filename: "[name].js",
        publicPath: "/"
    },
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src/components")
        }
    },
    module: {
        rules: [
            {
                 test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env", "@babel/preset-react"]
                    }
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./public/index.html",
            templateParameters: {
                env: process.env.NODE_ENV === "development" ? "(개발용) " : "" 
            }
        }),
        new webpack.BannerPlugin({
            banner: `Build Time: ${new Date().toLocaleString()}`
        }),
        new CleanWebpackPlugin()
    ],
    devServer: {
        port: 5500,
        historyApiFallback: true
    }
}