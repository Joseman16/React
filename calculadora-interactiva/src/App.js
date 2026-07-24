import './App.css';
import logoJMLC from './imagenes/JMLC-logop.png'


function App() {
  return (
    <div className='App'>
      <div className='jmlc-logo-contenedor'>
        <img
          src= {logoJMLC}
          className='logoJmlc'
          alt='logoJmlc' />
      </div>
      <div className='contenedor-calculadora'> 
        <div className='fila'></div>
        <div className='fila'></div>     
        <div className='fila'></div>
        <div className='fila'></div>
      </div>
    </div>
  );
}

export default App;
