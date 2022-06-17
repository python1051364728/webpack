
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { join } = require('path')
module.exports = {
    entry: './src/main.js',
    output: {
        path: join(__dirname, 'lib'),
        filename: 'index.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: join(__dirname, 'publick/index.html')
        })
    ],
    devServer: {
        port: 30000,
        open: true
    },
    module: {
        rules: [{
            test: /\.css$/i,
            use: ['style-loader', 'css-loader']
        },
        {
            test: /\.less$/i,
            use: ['style-loader', 'css-loader', 'less-loader']
        },
        {
            test: /\.(png|jpg|gif|jpeg)$/i,
            type: "asset",
            parser: {
                dataUrlCondition: {
                    maxSize: 2 * 1024
                }
            },
            generator: {
                filename: 'images/[hash:6][ext]'
            }
        },
        {
            test: /\.(woff|woff2|ttf|eot|svg)$/i,
            type: "asset/resource",
            generator: {
                filename: 'fonts/[hash:6][ext]'
            }
        },
        {
            test: /\.js$/i,
            use: ["babel-loader"]
        }

        ]
    }
}