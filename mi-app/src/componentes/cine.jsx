import React from "react";
import '../estilo/estilo.css'

function Cine(props){
    return( 
        <div className="cont-cines">
            <h4 className="nombre-cine">{props.nombre}</h4>
            <div className="imagen-descrip">
                <img 
                    className="estilo-cine" 
                    src={props.imagen} 
                    alt="foto del cine"
                />
                <p className="descripcion-cine">{props.descripcion}</p>
            </div>
        </div>
    );
} 
export default Cine