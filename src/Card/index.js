import "./index.css";
import React, { useState, useEffect } from "react";
import { Box, Button } from "@material-ui/core";



function PokemonCard() {
  return (
      {listOfPokemons.map((pokemon) => (
        <Box>
          <Button
          className=""
          key={pokemon.id}
          variant=""
          color=""
          onClick={() => {}}>
            {pokemon.number}
            {pokemon.name}
            {pokemon.sprite}
            {pokemon.type}
          </Button>
          <CardBar></CardBar>
       </Box>
      ))}
  );
}


export default Card;
