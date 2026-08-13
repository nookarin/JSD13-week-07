const progressX = document.getElementById('progressX');
const btnPokemon = document.getElementById('btn-pokemon');
const poke_url = 'https://pokeapi.co/api/v2/pokemon/';

btnPokemon.addEventListener('click', async()=>
{   
    const randomId = Math.floor(Math.random() * 1025) + 1;
    console.log(poke_url + randomId);
    const findPokemon = await fetch (`${poke_url}${randomId}`);
    const data = await findPokemon.json();
    console.log(data);

    progressX.innerHTML = `
    <div class="pokemon">
        <img src="${data.sprites.front_default}">
            <p>${data.name.charAt(0).toUpperCase() + data.name.slice(1)}</p>
            <div class="stats">

                <div class="stat">
                    <span>HP</span>
                    <div class="bar">
                        <div class="bar-fill" style="width: ${data.stats[0].base_stat / 2}%"></div>
                    </div>
                    <span>${data.stats[0].base_stat}</span>
                </div>

                <div class="stat">
                    <span>Attack</span>
                    <div class="bar">
                        <div class="bar-fill" style="width: ${data.stats[1].base_stat / 2}%"></div>
                    </div>
                    <span>${data.stats[1].base_stat}</span>
                </div>

                <div class="stat">
                    <span>Defense</span>
                    <div class="bar">
                        <div class="bar-fill" style="width: ${data.stats[2].base_stat / 2}%"></div>
                    </div>
                    <span>${data.stats[2].base_stat}</span>
                </div>

                <div class="stat">
                    <span>Sp. Attack</span>
                    <div class="bar">
                        <div class="bar-fill" style="width: ${data.stats[3].base_stat / 2}%"></div>
                    </div>
                    <span>${data.stats[3].base_stat}</span>
                </div>

                <div class="stat">
                    <span>Sp. Defense</span>
                    <div class="bar">
                        <div class="bar-fill" style="width: ${data.stats[4].base_stat / 2}%"></div>
                    </div>
                    <span>${data.stats[4].base_stat}</span>
                </div>

                <div class="stat">
                    <span>Speed</span>
                    <div class="bar">
                        <div class="bar-fill" style="width: ${data.stats[5].base_stat / 2}%"></div>
                    </div>
                    <span>${data.stats[5].base_stat}</span>
                </div>

            </div>
    </div>`;

    div.append(img);
});

progressX.addEventListener('click', () => {
    progressX.innerHTML = '';
});

