# SPA_JS_Vanilla
Ejemplo de construcción de una Single Page Application con Javascript vanilla.

### Qué es una SPA
Es un tipo de aplicación desarrollada con JavaScript que nos permite cargar nuestro contenido una sola vez, es decir, se envían los archivos HTML, CSS y JS una sola vez al navegador y ahí es donde va a estar nuestra aplicación en todo momento, de tal forma que no necesita ser recargada. Si se necesita navegar en la aplicación, se navega entre secciones y no páginas.

***Ventajas:***
- Facilidad de construcción
- Facilidad de mantenimiento.

***Desventajas:***
- No es buena para el SEO ya que nuestra aplicación solo va a tener 1 cabecera a indexar.
- No es recomendable para grandes aplicaciones.

### Instrucciones a seguir
- Inicializar nuestro proyecto con `npm init`
- Construir la siguiente estructura de proyecto
  ![estructura del proyecto](https://link)

- Configurar WebPack con Babel `npm install @babel/core babel-loader html-webpack-plugin webpack webpack-cli webpack-dev-server`
  - **utilizar estas versiones de webpack `npm i webpack@4 webpack-cli@3`**

- Crear archivo webpack.config.js con la configuración del proyecto
- Crear scripts para servidor de desarrollo y producción en package.json 
  - `"build": "webpack --mode production",
    "start": "webpack-dev-server --open --mode development"`
- Crear base HTML (index.html)
- Crear la pagina Home, 404, Character
- Crear template que son partes de una página (Header)
- Crear el Router para las rutas de la aplicación
- Crear Util getHash para obtener el hash de la url y pasarle valores como el id
- Crear Util resolverRoutes
- Crear Util getData para obtener datos de la API
- Modificar home y character para que utilice los datos de la API