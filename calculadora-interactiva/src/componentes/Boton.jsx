import React from "react";
import '../estilos/Boton.css'


function Boton(props){

    const esOperador = valor =>{
        //Si Cualquier de esos criterios es falso, entonces se retorna valor "FALSO"
        //entonces no es un operador
        return isNaN(valor) && (valor != '.') && (valor != '=');
    };


    return (
        
        // ()=> (Esto es una función anonima, que también es una función flecha )
        <div
            className={`boton-contenedor ${esOperador(props.children) ? 'operador' : ''}`.trimEnd()}
            onClick={() => props.manejarCLic(props.children)}
        >
            {props.children}
        </div> 
    );
}

export default Boton;

/* 
    props.children (Hereda o es desecendiente)
    osea que si en el compontente Boton:
    <Boton> suma </Boton>
    automaticamente es: props.childre = suma
*/