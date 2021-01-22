import getData from '../utils/getData';
import getHash from '../utils/getHash';

const Character = async () => {
    // obtenemos el hash del personaje
    const id = getHash();
    // obtenemos los datos del personaje utilizando su id hasheado
    const character = await getData(id);
    console.log(character);
    const view = `
        <div class="card characters-inner" style="width: 20rem;">
            <article class="character-card">     
                <img class="card-img-top" src="${character.image}" alt="${character.name}"> 
            </article>
            <article class="card-body character-card">
                <h3>${character.name}</h3>
                <p class="card-text">Episodios: <span>${character.episode.length}</span></p>
                <p class="card-text">Estado: <span>${character.status}</span></p>
                <p class="card-text">Especie: <span>${character.species}</span></p>
                <p class="card-text">Género: <span>${character.gender}</span></p>
                <p class="card-text">Origen: <span>${character.origin.name}</span></p>
                <p class="card-text">Última localización: <span>${character.location.name}</span></p>
            </article>
        </div>
    `;
    return view;
}

export default Character;