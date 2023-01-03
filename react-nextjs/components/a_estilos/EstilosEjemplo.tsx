//components/a_estilos/EstilosEjemplos.tsx
import styles from './estilos.module.css'
export default function (){
    const misEstilos ={
        color: "white",
        backgroundColor: "black",
        borderBottom: "5px solid yellow"
    }
    return (
        <>
            <div style={misEstilos}> Otros Estilos </div>
            <div className={styles.rojo}> Hola </div>
        </>
    )
}