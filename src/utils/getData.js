
const URL_API = 'https://rickandmortyapi.com/api/character/';

/**
 * Hace la llamada a la API de Rick y Morty
 * para traer los datos del personaje indicado 
 * por el id o todos
 * @param {id del personaje} id 
 */
const getData = async (id) => {
    const apiURL = id ? `${URL_API}${id}` : URL_API;
    try {
        const response = await fetch(apiURL);
        const data = await response.json();
        return data;
    } catch (err) {
        console.error(`Fetch ERROR: ${err}`);
    }
}

export default getData;