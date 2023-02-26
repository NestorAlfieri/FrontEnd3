import React from "react";
import { useState } from "react";
import { List } from "./List";
import "../components/contenedor.css";

const Contenedor = ({ type }) => {
  const [visible, setVisible] = useState(false);

  const changeDisplay = (type) => {
    const div = document.getElementById("air");
    console.log(div);
    if (!div.classList.contains("onDisplay")) {
      div.classList.add("onDisplay");
      setVisible(true);
    } else {
      div.classList.remove("onDisplay");
      setVisible(false);
    }
  };

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
