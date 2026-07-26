import './App.css';
import logoJMLC from './imagenes/JMLC-logop.png';
import Boton from './componentes/Boton.jsx';
import Pantalla from './componentes/Pantalla.jsx';
import BotonClear from './componentes/BotonClear.jsx';

import { useState } from 'react';
import { evaluate } from 'mathjs';

function App() {
  
  const[input, setInput] = useState('');
  //val = valor
  const agregarInput = val =>{
    setInput(input + val);
  };

  const calcularResultado = () =>{
    if(input){
      setInput(evaluate(input));
    }else{
      alert("Por favor ingresar valores validos!!")
    }

  };
  
  return (
    <div className='App'>
      <div className='jmlc-logo-contenedor'>
        <img
          src= {logoJMLC}
          className='logoJmlc'
          alt='logoJmlc' />
      </div>
      <div className='contenedor-calculadora'> 
        <Pantalla input={input}/>
        <div className='fila'>
          <Boton manejarCLic={agregarInput}>1</Boton>
          <Boton manejarCLic={agregarInput}>2</Boton>
          <Boton manejarCLic={agregarInput}>3</Boton>
          <Boton manejarCLic={agregarInput}>+</Boton>
        </div>
        <div className='fila'>
          <Boton manejarCLic={agregarInput}>4</Boton> 
          <Boton manejarCLic={agregarInput}>5</Boton> 
          <Boton manejarCLic={agregarInput}>6</Boton> 
          <Boton manejarCLic={agregarInput}>-</Boton>
        </div>     
        <div className='fila'>
          <Boton manejarCLic={agregarInput}>7</Boton> 
          <Boton manejarCLic={agregarInput}>8</Boton> 
          <Boton manejarCLic={agregarInput}>9</Boton> 
          <Boton manejarCLic={agregarInput}>*</Boton>
        </div>
        <div className='fila'>
          <Boton manejarCLic={calcularResultado}>=</Boton> 
          <Boton manejarCLic={agregarInput}>0</Boton> 
          <Boton manejarCLic={agregarInput}>.</Boton> 
          <Boton manejarCLic={agregarInput}>/</Boton>
        </div>
        <div className='fila'>
          <BotonClear manejarClear={() => setInput('')}>Clear</BotonClear>
        </div>
      </div>
    </div>
  );
}

/* BotonClear limpia el input*/

export default App;
