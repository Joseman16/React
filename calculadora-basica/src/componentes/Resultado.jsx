import React from "react";
import '../estilos/estiloResultado.css'

function Resultado({valorTotal}){
    return(
        <div className="valorR">
            {valorTotal}
        </div>
    )
}

export default Resultado;