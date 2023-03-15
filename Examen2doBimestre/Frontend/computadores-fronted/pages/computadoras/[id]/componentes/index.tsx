
import Link from 'next/link'
import Layout from '../../../../components/Layout'
import List from '../../../../components/List'
import {useEffect, useState} from "react";
import {Componente, ComponenteService} from "../../../../componente/componente.service";
import {useRoutes} from "react-router";
import {useRouter} from "next/router";
import {GetStaticPaths, GetStaticProps} from "next";
import {ComputerService} from "../../../../computadora/computadora.service";
import idComponente from "./[idComponente]";
import id from "../../[id]";


export default  function () {
    const router = useRouter();
    const [componentes, setComponentes] = useState<Componente[]>([]);


    const obtenerComponentes = async () => {
        // Initialize state with fetched data
        const id =    router.query.id?.toString();
        if(id !==undefined) {
            const componentes = new ComponenteService();
            const items: Componente[] = await componentes.getComponentes(parseInt(id));
            setComponentes(items);
        }
    };
    useEffect(() => {
            obtenerComponentes();

    },[router.query]);

    return (
        <Layout title="Componentes del computador">
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <h1 >Componentes 🎮</h1>
                <button className="btn btn-outline-warning" style={{padding:"10px 50px"}}>
                    <Link href="/computadoras/[id]/componentes/create" as={`/computadoras/${router.query.id?.toString()}/componentes/create`} style={{textDecoration:"none", color:"black"}}> Agregar Componente</Link>
                </button>
            </div>

            <List items={componentes} setComponentes={setComponentes} />
        </Layout>
    );

};
export const getStaticPaths: GetStaticPaths = async () => {
    // Get the paths we want to pre-render based on computadoras
    const computadoras = new ComputerService();
    const listaComputadoras = await computadoras.getComputadoras();

    const paths = listaComputadoras.map((computadora) => ({
        params: { id: computadora.id.toString() },
    }))

    // We'll pre-render only these paths at build time.
    // { fallback: false } means other routes should 404.
    return { paths, fallback: false }
}
export const getStaticProps: GetStaticProps = async ({ params }) => {
    try {
        const id = params?.id
        const computadoras = new ComputerService();
        const listaComputadoras = await computadoras.getComputadoras();
        const item = listaComputadoras.find((computadora) => computadora.id === Number(id))
        // By returning { props: item }, the StaticPropsDetail component
        // will receive `item` as a prop at build time
        return { props: { item, id } }
    } catch (err: any) {
        return { props: { errors: err.message } }
    }
}

