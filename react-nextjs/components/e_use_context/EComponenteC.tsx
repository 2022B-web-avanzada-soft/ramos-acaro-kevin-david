import {useContext} from "react";
import {ContenedorContext} from "./EContenedorContext";

export default function (){
    const contenedorContexto = useContext(ContenedorContext)
    return(
        <>
            Componente C
            <p>{contenedorContexto.nombreUsuario}</p>
            <button onClick={event => {
                event.preventDefault();
                contenedorContexto.setNombreUsuario("CompC");

            }}>
                Actualizar
            </button>
        </>
    )
}