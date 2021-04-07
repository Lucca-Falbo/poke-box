import "./index.css";
import React, { useState, useEffect } from "react";
import { Box, Button, Container, Grid } from "@material-ui/core";

let listOfPokemons = {
  Bulbasuar: {
    name: "bulbasuar",
    id: 1,
    pokedexNumber: 1,
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
    type1: "grass",
    type2: "poison",
  },
};

function PokemonCard() {
  return (
    <Grid item>
      <div key="1" className="container" variant="" color="" onClick={() => {}}>
        <div className="number">001</div>
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"></img>
        <div>Bulbasuar</div>
        <div>Grass/Poison</div>
      </div>
    </Grid>
  );
}

export default PokemonCard;
