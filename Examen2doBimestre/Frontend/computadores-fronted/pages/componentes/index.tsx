
import Link from 'next/link'
import Layout from '../../components/Layout'
import List from '../../components/List'
import {Computadora, ComputerService} from "../../computadora/computadora.service";
import {useEffect, useState} from "react";
import {Componente, ComponenteService} from "../../componente/componente.service";

export default  function () {
    const [componentes, setComponentes] = useState<Componente[]>([]);

    const obtenerComputadores = async () => {
        // Initialize state with fetched data
        const componentes = new ComponenteService();
        const items: Componente[] = await componentes.getComponentesTodos();
        setComponentes(items);
    };
    useEffect(() => {
        obtenerComputadores();
    },[]);

    return (
        <Layout title="Componentes">
            <h1>Componentes 🎮 </h1>
            <List items={componentes} setComponentes={setComponentes} />
        </Layout>
    );
};


