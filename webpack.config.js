// No permite indicar donde nos estamos moviendo
const path = require('path');
// Añadir el archivo necesario para trabajar con html
const htmlWebPackPlugin = require('html-webpack-plugin');
// Añadir el archivo necesario para trabajar con css
const CopyWebpackPlugin = require('copy-webpack-plugin');
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
                exclude: /node_modules/, // Excluimos la carpeta de node modules
                use: {
                    loader: 'babel-loader' // usamo el loader de babel
                }
            },
            {
                test: /\.(css)$/,
                use: [
                  {
                    // Adds CSS to the DOM by injecting a `<style>` tag
                    loader: 'style-loader'
                  },
                  {
                    // Interprets `@import` and `url()` like `import/require()` and will resolve them
                    loader: 'css-loader'
                  }
                ]
              }
        ]
    },
    plugins: [ 
        // establecer plugins que vamos a usar
        new htmlWebPackPlugin( //Permite trabajar con los archivos HTML
            {
                inject: true, // Cómo vamos a inyectar un valor a un archivo HTML.
                template: './public/index.html',  // Dirección donde se encuentra 
                filename: './index.html' //El nombre que tendrá el archivo
            }
        ),
        new CopyWebpackPlugin(
            {
                patterns: [{ 
                    from: './src/styles/style.css',
                    to: '' 
                }],
            }
          )
    ]
     
}