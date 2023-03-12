import React from "react";
import pokemonData from "../../assets/static/pokemons.json";
import "../components/hijo.css";

const Hijo = ({ type,  nombre, avatar, powerLevel, agressive }) => {
  const data = pokemonData[type];
  const isAgressive = () => {
    if (agressive) {
      return "Is Agressive";
    } else {
      return "Not Agressive";
    }
  };

  return (
    <div className="hijo">
      <div className="cardDiv">
        <h4 className="nombre">{nombre}</h4>
        <img className="img" src={avatar}></img>

        <p className="cardText">Power Level :{powerLevel}</p>

        <div className="barContainer">
          <p className="barChart" style={{ width: `${powerLevel}%` }}>
             .
          </p>
        </div>

        <p className="cardText">{isAgressive()}</p>
      </div>
    </div>
  );
};
export default Hijo;
