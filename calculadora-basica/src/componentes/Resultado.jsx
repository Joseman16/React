import React from "react";
import '../estilos/estiloResultado.cs'

function Resultado({valorTotal}){
    return(
        <div className="valorR">
            {valorTotal}
        </div>
    )
}

export default Resultado;