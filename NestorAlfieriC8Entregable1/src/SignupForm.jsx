import React from "react";

import "./SignupForm.css";
import { useFormik } from "formik";
import * as Yup from "yup";

export const SignupForm = ({ handleFetchValues }) => {
  const getInitialValues = () => ({
    nombre: "",
    apellido: "",
    edad: 0,
    dias:0
  });

  const getValidationSchema = () =>
    Yup.lazy(() =>
      Yup.object().shape({
        nombre: Yup.string()
          .required("Campo Obligatorio")
          .trim('The contact name cannot include leading and trailing spaces')
          .min(3, "Mínimo 3 caracteres")
          .max(20, "Máximo 20 caracteres"),
        apellido: Yup.string()          
          .required("Campo Obligatorio")
          .trim(" ",'The contact name cannot include leading and trailing spaces')
          .min(3, "Mínimo 3 caracteres")
          .max(20, "Máximo 20 caracteres"),
        edad: Yup.number()
        .required("Campo Obligatorio")
        .min(1, "Ingrese fecha"),

      })
    );
  //handler para el submit segun formik+yup
  const onSubmit = (values) => {
    console.log ("enviado: ");
    console.log (values);
    handleFetchValues(values);
  };
  const { values, setFieldValue, errors, handleSubmit } = useFormik({
    initialValues: getInitialValues(),
    validationSchema: getValidationSchema(),
    validateOnChange: false,
    validateOnBlur: false,
    onSubmit,
  });

  //handler para  actualizar el estado de todos los inputs, con el método trim()en el valor
  const inputHandler = (e) => {
    e.preventDefault();
    const campoName = e.target.name;
    setFieldValue(campoName, e.target.value.trim());
    // console.log(values);
  };

  //handler para el cancel
  const cancelHandler = (e) => {
    console.log("cancelado");
    
  };

  //handler para calcular edad a partir de fecha de nacimiento y asignarla al estado
  const edadHandler = (e) => {
    e.preventDefault();
    // tomo input date del form
    const input = e.target.value;
    //lo paso a new Date
    const inputADate = new Date(input);
   
   // capturo fecha actual
    const fechaActual = new Date();  
    //resto ambas fechas 
    const edadenSegs = fechaActual - inputADate;
    //transformo a años
    const edad= parseInt(((((edadenSegs/60)/60)/24)/365)/1000)
    // transformo a dias 
    const dias= parseInt(((((edadenSegs/60)/60)/24))/1000) 
    //lo ingreso al estado
    setFieldValue("edad", edad);
    setFieldValue("dias", dias);
  };

  return (
    <div className="formDiv">
      <h2>
        Por favor, <br />
        ingresá tus datos:{" "}
      </h2>
      <form id="registerForm" onSubmit={handleSubmit}>
        <div className="inputDiv">
          <label htmlFor="nombreInput">nombre: </label>
          <input
            name="nombre"
            type="text"
            id="nombreInput"
            onChange={inputHandler}
          />
        </div>
        <div className="errorDiv">
          {errors["nombre"] && <p id="errorP">{errors["nombre"]}</p>}
        </div>
        <div className="inputDiv">
          <label htmlFor="apellidoInput">apellido: </label>
          <input
            name="apellido"
            type="text"
            id="apellidoInput"
            onChange={inputHandler}
          />
        </div>
        <div className="errorDiv">
          {errors["apellido"] && <p id="errorP">{errors["apellido"]}</p>}
        </div>
        <div className="inputDiv">
          <label  htmlFor="dateInput">fecha de nacimiento:</label>
          <input
            type="date"
            name="date"
            id="dateInput"
            onChange={edadHandler}
          />
        </div>
        <div className="errorDiv">
          {errors["edad"] && <p id="errorP">{errors["edad"]}</p>}
        </div>
        <div className="buttonsDiv">
          <button id="resetButton" type="reset" onClick={cancelHandler}>
            cancelar
          </button>
          <button id="submitButton" type="submit">
            enviar
          </button>
        </div>
      </form>
    </div>
  );
};
