const BASE_URL = 'https://pokeapi.co/api/v2';

function fetchPokemon(pokemConId) { 
    return fetch(`${BASE_URL}/pokemon/${pokemConId}`)
        .then(response => response.json(),);
};
    
export default { fetchPokemon }