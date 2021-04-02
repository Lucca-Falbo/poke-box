import "./App.css";
import React, { useState, useEffect } from "react";

function GetPokemonList() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [pokemons, setPokemons] = useState([]);

  // Note: the empty deps array [] means
  // this useEffect will run once
  // similar to componentDidMount()
  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setPokemons(result.results);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);
  return pokemons;
}

function PokemonList() {
  let pokemons = GetPokemonList();
  let listOfPokemons = {};
  let counter = 1;
  pokemons.forEach((pokemon) => {
    listOfPokemons[pokemon.name] = {
      name: pokemon.name,
      id: counter,
      sprite: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${counter}.png`,
    };
    counter++;
  });
  return (
    <div className="container">
      {Object.values(listOfPokemons).map((pokemon) => (
        <div className="pokemonContainer" key={pokemon.id}>
          {pokemon.name}
          <img src={pokemon.sprite}></img>
        </div>
      ))}
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <h1>Temos que pegar</h1>
      <PokemonList />
    </div>
  );
}

export default App;
