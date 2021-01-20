// No permite indicar donde nos estamos moviendo
const path = require('path');
// Añadir el archivo necesario para trabajar con html
const htmlWebPackPlugin = require('html-webpack-plugin');
// Modulo exportable con la configuración
module.exports = {
    entry: './src/index.js', // punto de entrada
    output: {
        path: path.resolve(__dirname, 'dist'), // Indica donde se encuentra y donde poner el archivo generado para PRD
        filename: 'main.js' // El archivo compilado con todo el proyecto
    },
    resolve: {
        extensions: ['.js'] // extensiones del proyecto
    } ,
    module: {
        rules: [
            {
                test: /\.js?$/,
                exclude: /node_modules/, // exclusiones no necesarias
                use: {
                    loadedr: 'babel-loader' // usamo el loader de babel
                }
            }
        ]
    },
    plugin: [ 
        // establecer plugins que vamos a usar
        new htmlWebPackPlugin([
            {
                inject: true,
                template: './public/index.html',
                filename: './index.html'
            }
        ])
    ]
     
}