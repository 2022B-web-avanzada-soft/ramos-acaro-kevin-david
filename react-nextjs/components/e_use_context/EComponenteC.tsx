import {useContext} from "react";
import {ContenedorContext} from "./ContenedorContext";
import EComponenteB from "./EComponenteB";

export default function (){
    const contenedorContexto = useContext(ContenedorContext);
    return(
        <>
            Componente C
            <p>{contenedorContexto.nombreUsuario}</p>
            <button onClick={ e => {
                e.preventDefault();
                contenedorContexto.setNombreUsuario('CompC')
            }}>
                Actualizar
            </button>

        </>
    )
}