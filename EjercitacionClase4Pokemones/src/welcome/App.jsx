

import Contenedor from "./components/Contenedor";
import { Boton } from "./components/Boton";
function App() {
  

 
 
  return (
    <div className="appDiv">
   
       <Contenedor type="water" />
     
       <Contenedor type="fire" />
       <Contenedor type="air" />
       <Contenedor type="electric" />

    </div>
  );
}

export default App;
