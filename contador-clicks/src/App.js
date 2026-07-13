
import './App.css';
/*Importamos nuestra imagen que esta en la carpeta imagenes*/
import logo from './imagenes/logo.jpg';

function App() {
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
        
      </div>
    </div>
  );
}

export default App;
