import logo from './logo.svg';
import './App.css';

import Anime  from './componentes/anime';
import Pelicula  from './componentes/peliculas';
import Cine from './componentes/cine';

function App() {
  return (
    <div className="App">
      <h1>Peliculas, animes y Series</h1>
      <Anime/>
      <Pelicula/>
      <div className='cines'>
        <Cine
          nombre ='Super Cine'
          imagen = {`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsMCirlOPlaF_uYh6TdknmIruP-dz9all6wdD4QnTl9g&s=10`}
          descripcion = {`Supercines es la cadena de cines más grande y moderna de Ecuador, 
            perteneciente al Grupo El Rosado. Fundada en 1999, cuenta con más de 110 salas 
            a nivel nacional. Ofrece servicios de alta tecnología (incluyendo salas IMAX, 
            3D y áreas VIP) y permite comprar boletos en línea`}
        />

        <Cine
          nombre ='Multicines'
          imagen = {`https://statics.forbes.com.ec/2023/11/654e7118afb93.jpeg`}
          descripcion = {`Un multicine es un complejo de entretenimiento que alberga 
            múltiples salas de proyección bajo un mismo techo. En Ecuador, Multicines 
            es también una de las cadenas de cines más grandes del país, ofreciendo 
            estrenos y experiencias inmersivas en formatos avanzados como 2D, 3D, 4D, 
            e instalaciones de tres pantallas panorámicas.`}
        />

      </div>
    </div>
  );
}

export default App;
