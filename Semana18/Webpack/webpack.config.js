const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports={
    entry:'./src/index.js',
    output: {
        path: __dirname+'/build',
        filename: 'bundle.js'
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new MiniCssExtractPlugin({
            filename: 'bundle.css'
        })
    ],
    module: {
        rules: [{
            // Para utilizar css de la siguiente manera
            // test: /\.css$/,
            // Para utilizar sass de la siguiente manera
            test: /\.scss$/,
            use: [
                // Este metodo se usa para importar el archivo de estilos desde el js
                // {loader: "style-loader"},
                // Este metodo se usa para que de como resultado un archivo css
                {loader: MiniCssExtractPlugin.loader},
                // Para utilizar css de la siguiente manera
                {loader: "css-loader"},
                // Para utilizar sass de la siguiente manera
                {loader: "sass-loader"},
            ]
        }]
    }
}