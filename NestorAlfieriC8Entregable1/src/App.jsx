import { SignupForm } from "./SignupForm";
import { Usuario } from "./Usuario";
import { useState } from "react";
import "./App.css";

function App() {
  const [view, setView] = useState("register");
  const [values, setValues] = useState(null);

  const handleFetchValues = (userInfomation) => {
    setValues(userInfomation);
    setView("user");
  };
  //returnhandler para boton "volver"
  const returnHandler = () => {
    setView("register");
  };
  return (
    <div className="App">
      {view === "register" && (
        <SignupForm handleFetchValues={handleFetchValues} />
      )}

      {view === "user" && <Usuario {...values} returnHandler={returnHandler} />}
    </div>
  );
}
export default App;

//{view === "user" && ()}
