import './App.css';
import logoJMLC from './imagenes/JMLC-logop.png';
import Boton from './componentes/Boton.jsx';
import Pantalla from './componentes/Pantalla.jsx';
import BotonClear from './componentes/BotonClear.jsx';

import { useState } from 'react';


function App() {
  
  const[input, setInput] = useState('Hola');
  
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
          <Boton>1</Boton>
          <Boton>2</Boton>
          <Boton>3</Boton>
          <Boton>+</Boton>
        </div>
        <div className='fila'>
          <Boton>4</Boton> 
          <Boton>5</Boton> 
          <Boton>6</Boton> 
          <Boton>-</Boton>
        </div>     
        <div className='fila'>
          <Boton>7</Boton> 
          <Boton>8</Boton> 
          <Boton>9</Boton> 
          <Boton>*</Boton>
        </div>
        <div className='fila'>
          <Boton>=</Boton> 
          <Boton>0</Boton> 
          <Boton>.</Boton> 
          <Boton>/</Boton>
        </div>
        <div className='fila'>
          <BotonClear>Clear</BotonClear>
        </div>
      </div>
    </div>
  );
}

export default App;
