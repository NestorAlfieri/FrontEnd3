import React from "react";
import pokemonData from "../../assets/static/pokemons.json";
import "../components/hijo.css"

const Hijo = ({  type, id, nombre, avatar, powerLevel, agressive }) => {
  const data = pokemonData[type];
  const isAgressive= ()=> {
    if(agressive) {
      return "Is Agressive"}
      else { return "Not Agressive"
    }
  };

  return (
    <div className="hijo">
      <div className="cardDiv">
        <h4 className="nombre">{nombre}</h4>
        <img className="img" src={avatar}></img>
        <table className="powerChart">
          <thead>
          <tr>
            <th className="cardText">Power Level :{powerLevel}</th>
          </tr>
          <tr>
          <td className="cellChart">
            <div className="barChart" style={{backgroundColor: "lime",
            width:`${powerLevel}%`
          }}> ""             
            </div>
          </td>
          </tr>
          </thead>
        </table>        
        <p className="cardText">{isAgressive()}</p>
      </div>
    </div>
  );
};
export default Hijo;
