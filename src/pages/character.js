import getData from '../utils/getData';
import getHash from '../utils/getHash';

const Character = async () => {
    // obtenemos el hash del personaje
    const id = getHash();
    // obtenemos los datos del personaje utilizando su id hasheado
    const character = await getData(id);
    console.log(character);
    const view = `
        <div class="characters-inner">
            <article class="character-card">     
                <img src="${character.image}" alt="${character.name}">
                <h2>${character.name}</h2>
            </article>
            <article class="character-card">
                <h3>Episodios: <span>${character.episode.length}</span></h3>
                <h3>Estado: <span>${character.status}</span></h3>
                <h3>Especie: <span>${character.species}</span></h3>
                <h3>Género: <span>${character.gender}</span></h3>
                <h3>Origen: <span>${character.origin.name}</span></h3>
                <h3>Última localización: <span>${character.location.name}</span></h3>
            </article>
        </div>
    `;
    return view;
}

export default Character;