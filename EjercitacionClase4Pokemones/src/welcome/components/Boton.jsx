import React from "react";

export const Boton = ({ type, display }) => {
  const changeDisplay = () => {
    const div = document.getElementById("{type}");
    if (!div.classList.contains("onDisplay")) {
      div.classList.add("onDisplay");
      display = true;
    } else {
      div.classList.remove("onDisplay");
      display = false;
    }

    return (
      <div className="buttonsDiv">
        <button onClick={changeDisplay}>{type}</button>
      </div>
    );
  };
};
