import Link from 'next/link'
import Layout from '../components/Layout'
import {useState} from "react";
import {useRouter} from "next/router";

const IndexPage = () => {
    const [selectedIcon, setSelectedIcon] = useState("");
    const router = useRouter();
    const handleIconSelect = (icon: string) => {
        setSelectedIcon(icon);
        if(icon ==="true"){
            const currentRoute = router.asPath;

            // Agregar la ruta dinámica
            const newRoute = `${currentRoute}/computadoras`;

            // Redirigir a la nueva ruta
            router.push(newRoute);
        }
        if(icon === "false"){
            const currentRoute = router.asPath;
            const newRoute = `${currentRoute}/componentes`;
            router.push(newRoute);
        }
    };
    return(<>

        <Layout title="Home">
            <h1>Bienvenido 👋</h1>

            <div className="container">
                <div className="row">
                    <div className="col-md-6">
        <span
            onMouseOver={() => handleIconSelect("💻")}
            style={{
                fontSize: "20rem",
                cursor: "pointer",
                marginRight: "1rem",
                opacity: selectedIcon === "💻" ? 1 : 0.5,
            }}
            onClick={() => handleIconSelect("true")}
        >
          <h1 >Computadores</h1>
          💻
        </span>
                    </div>
                    <div className="col-md-6">
        <span
            onMouseOver={() => handleIconSelect("🖥️")}
            style={{
                fontSize: "20rem",
                cursor: "pointer",
                opacity: selectedIcon === "🖥️" ? 1 : 0.5,
            }}
            onClick={() => handleIconSelect("false")}
        >
          <h1>Componentes</h1>
          🖥️
        </span>
                    </div>
                </div>
            </div>
        </Layout>


    </>)

}

export default IndexPage
