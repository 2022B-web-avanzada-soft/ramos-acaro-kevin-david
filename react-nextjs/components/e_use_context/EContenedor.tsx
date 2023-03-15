import {ContenedorContext, ContenedorContextObject} from "./ContenedorContext";
import {createContext, useEffect, useState} from "react";
import EComponenteA from "./EComponenteA";

export const ContenedorContexts= createContext({} as any);
export default function (){
    const [nombreUsuario, setNombreUsuario] = useState("Marco")
    const objetoContenedorContext:ContenedorContextObject = {nombreUsuario, setNombreUsuario};
    useEffect(
        ()=>{
            console.log('Cambio en Contenedor', objetoContenedorContext.nombreUsuario);
        },
        [objetoContenedorContext.nombreUsuario]
    )
    return (
        <>
            <ContenedorContexts.Provider value={objetoContenedorContext}>
                <EComponenteA></EComponenteA>
            </ContenedorContexts.Provider>
        </>
    )
}