const Character = () => {
    const view = `
        <div class="characters-inner">
            <article class="character-card">     
                <img src="image" alt="name">
                <h2>Name</h2>
            </article>
            <article class="character-card">
                <h3>Episodios:</h3>
                <h3>Estado:</h3>
                <h3>Especie:</h3>
                <h3>Género:</h3>
                <h3>Origen:</h3>
                <h3>Última localización:</h3>
            </article>
        </div>
    `;
    return view;
}

export default Character;