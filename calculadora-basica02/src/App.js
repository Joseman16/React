
import './App.css';

import Encabezado from './componentes/Encabezado';
import Boton from './componentes/Boton';
import Resultado from './componentes/Resultados';

import { useState } from 'react';

function App() {
  
  //hooks
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [valor, setValor] = useState(0);

  //variables
  const n1 = Number(num1) || 0;
  const n2 = Number(num2) || 0;

  const suma = () => setValor(n1 + n2);
  const resta = () => setValor(n1 - n2);
  const multiplicacion = () => setValor(n1 * n2);
  const division = () =>{
    if(n2 === 0){
      alert('No se puede dividir entre cero');
    }
    setValor(n1/n2);
  }

  const raizCuadrada = () =>{
    if(n1 === 0){
      alert ('num1, es el unico que se puede hacer la operación, agregar Valo!');
    }
    setValor(Math.sqrt(n1));
  }

  const raizCubica = () =>{
    if(n1 === 0){
      alert('num1, es el unico que se puede hacer las operación, agregar valor!');
    }
    setValor(Math.cbrt(n1));
  }

  const potencia = () =>{
    if(n1 <= 0 && n2 <= 0){
      alert('n1 (base) y n2 (exponente) deben tener un valor')
    }
    setValor(Math.pow(n1,n2));
  }
  
  return (
    <div className='App'>
      <Encabezado titulo='CALCULADORA BASICA - 02'></Encabezado>
      <div className='contenedor-principal'>
        <div className='contenedor-btn'>
          <Boton
            texto = 'Suma'
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
          <Boton
            texto='Raiz Cuadrada'
            operacion={raizCuadrada}
          />
          <Boton
            texto='Raiz Cubica'
            operacion={raizCubica}
          />
          <Boton
            texto='Potencia'
            operacion={potencia}
          />
        </div>
        <div className='contenedor-FormularioR'>
          <input 
            placeholder='Digite num1' 
            value={num1} //Muestra lo que hay en el estado num1 (en el hook)
            onChange={(e) => setNum1(e.target.value)} //obviamente ese Actualiza el esstado num1
          />
          <input 
            placeholder='Digite num2' 
            value={num2} 
            onChange={(e) => setNum2(e.target.value)} 
          />
          <Resultado valorTotal={valor.toFixed(2)}/>
        </div>
      </div>
    </div>
  );
}

export default App;
