console.log('Hola mundo');
import router from './routes'

// Escucha los archivos que se han cargado
window.addEventListener('load', router);
// Escucha las rutas del hash al que te mueves
window.addEventListener('hashchange', router);