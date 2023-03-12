import React from "react";

import Hijo from "./Hijo";
import pokemonData from "../../assets/static/pokemons.json";
 import "../components/list.css"

 export const List=({type})=>{   
  const data = pokemonData[type]; 
  

  return(
<div className="listDiv" >

    <h3>{type.toUpperCase()} <br/>POKEMONS</h3>
    <div className="cardsDiv">
      {data.map((pokemon) => (
        <Hijo
          key={pokemon.id}
          id={pokemon.id}
          nombre={pokemon.name}
          avatar={pokemon.avatar}
          powerLevel={pokemon.powerLevel}
          agressive={pokemon.agressive}
        />
      ))}
    </div>
    </div>
  )
}