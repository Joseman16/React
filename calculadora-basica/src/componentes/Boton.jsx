import React from "react";
import '../estilos/estiloBoton.css'

function Boton ({texto, operacion}){
    return(
        <button
        className='botonEstilo'
            onClick={operacion}
        >
            {texto}
        </button>
    )
}

export default Boton;