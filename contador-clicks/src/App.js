
import './App.css';
/*Importamos nuestra imagen que esta en la carpeta imagenes*/
import logo from './imagenes/logo.jpg';
import Boton from './componentes/Boton.jsx'
import Contador from './componentes/Contador.jsx';
import { useState } from 'react';



function App() {
  //Esta constante sera un arreglo con 2 elementos importantes
  //1. El valor del estado "numClics"
  //2. la función que me va a permitir actualizarlo "setNumClics" (le asigne un nombre)
  const[numClics, setNumClics ] = useState(0);

  //Esto es uuna función flecha
  const manejarClic = () =>{
    setNumClics(numClics + 1); 
  }

  const reiniciarContador = () =>{
    setNumClics(0); 
  }
  
  return (
    <div className="App">
      <div className='logo-contenedor'>
        <img 
          className='logo-jmlc'
          src={logo}
          alt='Logo'
        />
      </div>
      <div className='contenedor-principal'>
        <Contador numClics={numClics} />
        <Boton 
          texto='Clic'
          esBotonDeClic={true} //Valor Booleano
          manejarClic={manejarClic}
        />
        <Boton 
          texto='Reiniciar'
          esBotonDeClic={false}
          manejarClic={reiniciarContador}
        />
      </div>
    </div>
  );
}

export default App;
