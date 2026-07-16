import React from "react";
import '../hojas-de-estilos/Botones.css'

function Boton ({texto, esBotonDeClic, manejarClic}) {
    return(
        <button
        //a "esBotonDeclic" se  le esta aplicando un operador ternario
            className={esBotonDeClic ? 'boton-clic': 'boton-reiniciar'}    
            onClick={manejarClic}
        > 
            {texto}
        </button>
    );
}

export default Boton;

/* 
    EventListener = Oyente de eventos
*/