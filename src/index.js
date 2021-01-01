import css from "./css/style.css";
import pokemonCardTpl from "./templates/pokemon-card.hbs";
import API from './js/api-service.js'
import getRefs from './js/getRefs.js'

const refs = getRefs();

refs.searchForm.addEventListener('submit', onSearch)


function onSearch(e) {
    e.preventDefault();

    const form = e.currentTarget;
    
    const searchQuery = form.elements.query.value;

    API.fetchPokemon(searchQuery)
        .then(renderPokemonCard)
        .catch(onFetchError)
        .finally(() => form.reset());
    }
    
    
    function renderPokemonCard(pokemon) {
        const markup = pokemonCardTpl(pokemon);
        refs.cardContainer.innerHTML = markup;
    };
    
    function onFetchError(error) {
    alert('Упс, что-то пошло не так, и мы не нашли вашего покемона!')
    
}

// =================================================

// fetch(' https://pokeapi.co/api/v2/pokemon?limit=5')

// fetch('https://pixabay.com/api/?key=')

    // .then(r => r.json())
    // .then(console.log)