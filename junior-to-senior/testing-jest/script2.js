// asynchronous tests

// fetch() in node won't work as it is something implemented by the browser and is on the window object; 
// in node, there's no window object, and thus there's no window.fetch
// therefore we need to install node-fetch

const fetch = require('node-fetch');

const getPokemonPromise = (fetch) => {
  return fetch('https://pokeapi.co/api/v2/pokemon?limit=60&offset=60')
    .then(resp => resp.json())
    .then(res => res.results)
}

const getPokemon = async (fetch) => {
  const getRequest = await fetch('https://pokeapi.co/api/v2/pokemon?limit=60&offset=60');
  const data = await getRequest.json();
  // console.log(data.results);
  return data.results;
}

console.log(getPokemon(fetch));

module.exports = {
  getPokemonPromise,
  getPokemon
}