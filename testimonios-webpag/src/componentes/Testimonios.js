import React from 'react';
import '../hoja-de-estilos/Testimonio.css'

//Esto es una exportación por defecto: export function Testimonio(){
 
function Testimonio(props){


  return(  
    <div className='contenedor-testimonio'>
      <img className='imagen-testimonio' 
            src={require(`../img/${props.imagen}.png`)}
            alt='Foto de Emma'/>
      <div className='contenedor-texto-testimonio'>
        <p className='nombre-testimonio'>{props.nombre} en {props.pais}</p>
        <p className='cargo-testimonio'>{props.cargo} en {props.empresa}</p>
        <p className='texto-testimonio'>"{props.testimonio}"</p>
      </div>
    </div>
  );

}

/*
  Debes luego importarlo en el .js principal en este caso seria 
  el App.js (ahi se impportaria el el testimonio.js);
  habiendo importado testimonios.js podemos llamar a la funcion "Testimonio"
*/

//El proceso de abajo es una exportación nombrada
export default Testimonio