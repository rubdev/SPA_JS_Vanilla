import getData from '../utils/getData';

const Home = async () => {
    const characters = await getData();
    const view = `
        <div class="row characters">
            ${characters.results.map(character => `
                <article class="col character-item">
                    <a href="#/${character.id}/">
                        <img src="${character.image}" alt="${character.name}">
                        <h2>${character.name}</h2>
                    </a>
                </article>
            `).join('')}
            
        </div>
    `;
    return view;
};

export default Home;

