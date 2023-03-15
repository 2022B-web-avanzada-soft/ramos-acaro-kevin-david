
import Link from 'next/link'
import Layout from '../../components/Layout'
import List from '../../components/List'
import {Computadora, ComputerService} from "../../computadora/computadora.service";
import {useEffect, useState} from "react";

export default  function () {
    const [computadores, setComputadores] = useState<Computadora[]>([]);

    const obtenerComputadores = async () => {
        // Initialize state with fetched data
        const computadoras = new ComputerService();
        const items: Computadora[] = await computadoras.getComputadoras();
        setComputadores(items);
    };
    useEffect(() => {
        obtenerComputadores();
    },[]);

    return (
        <Layout title="Computadoras">
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <h1 style={{ marginRight: '10px' }}>Computadoras 💻 </h1>
                <button className="btn btn-outline-warning" style={{padding:"10px 50px"}}>
                    <Link href="/computadoras/create" style={{textDecoration:"none", color:"black"}}> Agregar Computador</Link>
                </button>
            </div>

            <List items={computadores} setComputadores={setComputadores} />
        </Layout>
    );
};


