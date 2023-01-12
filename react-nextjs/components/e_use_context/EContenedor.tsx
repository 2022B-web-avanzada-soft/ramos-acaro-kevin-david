import {ContenedorContext,ContenedorContextObject} from "./EContenedorContext";
import {useEffect, useState} from "react";
import EComponenteA from "./EComponenteA";

export default function (){
    const [nombreUsuario,setNombreUsuario] = useState("Kevin");
    const objetoContenedorContext:ContenedorContextObject = {nombreUsuario,setNombreUsuario};

    useEffect(
        ()=>{
            console.log("Cambio en contenedor," +
                objetoContenedorContext.nombreUsuario);
        },
        [objetoContenedorContext.nombreUsuario]
    )
    return(
        <>
        <ContenedorContext.Provider value={objetoContenedorContext}>
        <EComponenteA></EComponenteA>
        </ContenedorContext.Provider>
        </>
    )

}