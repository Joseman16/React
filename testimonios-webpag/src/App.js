import logo from './logo.svg';
import './App.css';
/*Lo de abajo es una importación por defecto
import {Testimonio} from './componentes/Testimonios'
*/

import Testimonio from './componentes/Testimonios'

function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
        <h1>Esto es lo que dicen nuestros Alumnos</h1>
        <Testimonio 
          nombre = 'Jose León Carrera'
          pais = 'Ecuador'
          imagen = 'image'
          cargo = 'Ingeniero de Software'
          empresa = 'Los 3 pollitos'
          testimonio ={`Joven de 22 años, Ingeniero en Software con mas de 4 años de experiencia desarrollando
          aplicaciones de react para el Colegio Olmedo y desarrollando software de escritorio para 
          la empresa Risoflin usando tecnologias como: Java, spring-boot, python, C++, C#, PowerBuilder, 
          PosgreSQL, SQLServer, Power Bi, entre otros objetivo aprender contabilidad, hablar ingles y 
          poder trabajar en un pais del primer mundo como Canada.`}
        />
      </div>
    </div>
  );
}

export default App;
