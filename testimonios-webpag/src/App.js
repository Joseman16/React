import logo from './logo.svg';
import './App.css';
/*Lo de abajo es una importación por defecto
import {Testimonio} from './componentes/Testimonios'
*/

import Testimonio from './componentes/Testimonios'

const testimonio1 = (<>
    Joven de 22 años, <strong>Ingeniero en Software con mas de 4 años de experiencia desarrollando
        aplicaciones de react </strong> para el Colegio Olmedo y desarrollando software de escritorio para 
        la empresa Risoflin usando tecnologias como: Java, spring-boot, python, C++, C#, PowerBuilder, 
        PosgreSQL, SQLServer, Power Bi, entre otros objetivo aprender contabilidad, hablar ingles y 
        poder trabajar en un pais del primer mundo como Canada.
  </>)

const testimonio2 = (<>
  Mark Elliot Zuckerberg es un programador, empresario y magnate estadounidense. 
  Es uno de los <strong>fundadores de Facebook y la red social</strong> homónima, y su 
  actual presidente.
</>)

const testimonio3 = (<>
  Linus Benedict Torvalds es un ingeniero de software finlandés, ​ conocido por 
  <strong>iniciar y mantener el $desarrollo del kernel Linux </strong>, basándose en el sistema 
  operativo libre Minix creado por Andrew S. Tanenbaum y en algunas herramientas, 
  varias utilidades y los compiladores desarrollados por el proyecto GNU.
</>)


function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
        <h1>Esto es lo que dicen nuestros Alumnos</h1>
        <Testimonio 
          nombre = 'Jose León Carrera'
          pais = 'Ecuador'
          imagen = 'joselc'
          cargo = 'Ingeniero de Software'
          empresa = 'SAP'
          testimonio = {testimonio1} 
        />

        <Testimonio 
          nombre = 'Marcos Zurita Berck'
          pais = 'Argentina'
          imagen = 'Mark'
          cargo = 'Ingeniero de Software'
          empresa = 'Facebook'
          testimonio ={testimonio2}
        />

        <Testimonio 
          nombre = 'Jhony Linux Trovald'
          pais = 'Ecuador'
          imagen = 'image'
          cargo = 'Ingeniero de Software'
          empresa = 'Linux'
          testimonio ={testimonio3}
        />
      </div>
    </div>
  );
}

export default App;
