const fetch = require('node-fetch');
const pokemon = require('./script2');

// with async, the test assume its done right after the fetch; 
// a way to get around is by passing in the done()
it('pokemon API to get pokemon (limit to 100)', (done) => {
  expect.assertions(1);
  pokemon.getPokemon(fetch).then(data => {
    expect(data[2].name).toEqual('abra')
    done();
  })
})

// or simply with return, returning the Promise
it('pokemon API to get pokemon (limit to 60)', () => {
  expect.assertions(1);
  return pokemon.getPokemon(fetch).then(data => {
    expect(data[2].name).toEqual('abra');
  })
})

it('pokemon API to get pokemon with Promise (limit to 60)', () => {
  expect.assertions(2);
  return pokemon.getPokemonPromise(fetch).then(data => {
    expect(data[2].name).toEqual('abra');
    expect(data.length).toBeLessThanOrEqual(60);
  })
})