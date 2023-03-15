//_app.js
import React from "react";
import '../styles/global.css'
import '../styles/custom.css'

function MyApp({Component, pageProps}){
    return (
        <>
            <Component {...pageProps}/>
        </>
    )
}
export default MyApp