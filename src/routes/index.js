import Header from '../templates/header';
import Home from '../pages/home';
import Character from '../pages/character';
import Error404 from '../pages/error404';
import getHash from '../utils/getHash';
import resolveRoutes from '../utils/resolveRoutes';

// Rutas a renderizar
const routes = {
    '/': Home,
    '/:id': Character,
    '/contact': 'Contact'
};

// Router
const router = async () => {
    // Establecemos elementos templates en el DOM
    const header = null || document.getElementById('header');
    const content = null || document.getElementById('content');

    header.innerHTML = await Header();
    // obtenemos el hash de la ruta
    let hash = getHash();
    // realizamos la petición de la ruta
    let route = await resolveRoutes(hash);
    // vemos la ruta a renderizar o mostramos error 404
    let render = routes[route] ? routes[route] : Error404;
    // le añadimos a content la pagina de la ruta
    content.innerHTML = await render();

}

export default router;