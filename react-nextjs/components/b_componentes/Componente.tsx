// b_componentes/Componente.tsx

// @ts-ignore
type PropiedadesComponente = {
    url: string;
    iteraciones: number;
    mostrar: boolean;
};

//interface PropiedadesComponentes{}

export default  function (props: PropiedadesComponente){
    const {url, iteraciones, mostrar} = props;
    // const url = prop.url;
    // const iteraciones = props.iteraciones;

    return (
        <></>
    )
}