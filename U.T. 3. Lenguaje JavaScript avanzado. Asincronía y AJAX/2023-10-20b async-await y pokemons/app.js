// fetch('https://pokeapi.co/api/v2/pokemon/')
//     .then(response => response.json())
//     .then(data => console.log(data.count))
//     .catch(console.error);

// const response = await fetch('https://pokeapi.co/api/v2/pokemon/');
// const data = await response.json();
// const quantity = data.count;
// console.log(quantity);

async function getPokemons() {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/');
    const data = await response.json();
    const pokemons = data.results;
    return pokemons;
}

async function getPokemonById(id) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`);
    const data = await response.json();
    return data;
}

// const pokemons = await getPokemons();
// console.log(pokemons);

// const pokemon = await getPokemonById(2);
// console.log(pokemon.name, pokemon.height, pokemon.weight);

const pokemons = await getPokemons();

for (const pokemon of pokemons) {
    const pokemonId = pokemon.url.split('/')[6];
    const pokemon2 = await getPokemonById(pokemonId);
    console.log(pokemon2.name, pokemon2.height, pokemon2.weight);
}