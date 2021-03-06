const HtmlWebPackPlugin =       require("html-webpack-plugin");
const MiniCssExtractPlugin =    require("mini-css-extract-plugin");

module.exports = {
    module: {
        rules: [{
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            }, {
                test: /\.less$/,
                use: [
                    {
                        loader: "style-loader"
                    },{
                        loader: "css-loader"
                    },{
                        loader: "less-loader"
                    }
                ]
            }, {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader",
                        options: { minimize: true }
                    }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/index.html",
            filename: "./index.html"
        }),
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css"
        })
    ]
};