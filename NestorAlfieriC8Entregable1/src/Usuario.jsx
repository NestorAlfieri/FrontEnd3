import React from "react";
import "./Usuario.css";

export const Usuario = ({ nombre, apellido, edad, dias, returnHandler }) => {
  return (
    <div className="usuarioDiv">
      <h3>
        Hola {nombre} {apellido} !!
      </h3>
      <br/>
      <div className="cardText">Hoy tenés {edad} años:  <br />
       has vivido {dias} días.</div>
      <br/>
      
      <button id="returnButton" type="button" onClick={returnHandler}>
        volver
      </button>
    </div>
  );
};
