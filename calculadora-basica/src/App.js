import logo from './logo.svg';
import './App.css';
//Importo el hooks
import { useState } from 'react';

import Boton from './componentes/Boton'
import Resultado from './componentes/Resultado'
import Encabezado from './componentes/encabezado';

function App() {
  const [valor, setValor] = useState(0);

  const suma = () => {
    const num1 = Number(document.getElementById("num1").value);
    const num2 = Number(document.getElementById("num2").value);
    setValor(num1 + num2);
  }

  const resta = () => {
    const num1 = Number(document.getElementById("num1").value);
    const num2 = Number(document.getElementById("num2").value);
    setValor(num1 - num2);
  }

  const multiplicacion = () => {
    const num1 = Number(document.getElementById("num1").value);
    const num2 = Number(document.getElementById("num2").value);
    setValor(num1 * num2);
  }

  const division = () => {
    const num1 = Number(document.getElementById("num1").value);
    const num2 = Number(document.getElementById("num2").value);
    setValor(num1 / num2);
  }
  
  return (
    <div className="App">
      <Encabezado titulo='CALCULADOR BASICA'></Encabezado>
      <div className='contenedor-principal'>
        <div className='contenedor-btn'>
          <Boton 
            texto='Suma'
            operacion={suma} 
          />
          <Boton
              texto='Resta'
              operacion={resta}
          />
          <Boton
            texto='Multiplicación'
            operacion={multiplicacion}
          />
          <Boton
            texto='División'
            operacion={division}
          />
        </div>
        <div className='contenedor-FormularR'>
          <input placeholder='Digite num1' id='num1'/>
          <input placeholder='Digite num2' id='num2'/>
          <Resultado valorTotal={valor.toFixed(2)} />
        </div>
      </div>
    </div>
  );
}
/* 
El toFixed es para indicarle la cantidad de decimales
que puede tener uun numero, ejemplo:
total.toFixed(2) => 2.33
total.toFixed(3) => 2.123
total.toFixed(10) => 16.1099999992
*/

export default App;
