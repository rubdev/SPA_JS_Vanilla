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
}

export default router;