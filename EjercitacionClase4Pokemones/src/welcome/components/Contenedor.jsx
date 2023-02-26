import React from "react";
import { useState } from "react";
import { List } from "./List";
import "../components/contenedor.css";

const Contenedor = ({ type }) => {
  const [visible, setVisible] = useState(false);

  const changeDisplay = (type) => {    
      setVisible(!visible);
   
  }
  return (
    <div className="contenedorDiv" id={type}>
      <div className="buttonsContainer">
      <button onClick={changeDisplay}>{type}</button>
      </div>
      <div className="listContainer">
        {visible && <List type={type} />}</div>
    </div>
  );
};
export default Contenedor;
