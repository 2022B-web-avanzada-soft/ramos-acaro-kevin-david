import Layout from "../../components/Layout";
import {GetStaticPaths, GetStaticProps} from "next";
<<<<<<< Updated upstream
import {Todo, TodoHttp} from "../../servicios/http/todo.http";
import {useRouter} from "next/router";

// /i_todos
// [idTodo].tsx

interface ParametrosTodo{

    errors?: string;
    todo?: Todo;

}

export default function (params:ParametrosTodo){
    console.log(params);
    const router = useRouter();
    const {idTodo, nombre} = router.query
    console.log(idTodo);
    return(
        <>
            <Layout title={"To do's hijo"}>
                <h1>To do's hijo {params?.todo.title}</h1>
            </Layout>
        </>
    )
}

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = [
        {
            params: {idTodo: '1'},
        },
        {
            params: {idTodo: '2'},
        },
        {
            params: {idTodo: '4'},
        }
    ];
    return {paths, fallback: false}
}

export const getStaticProps: GetStaticProps = async (
    {params}
) => {
    try {
        // fetch
        const id = params?.idTodo as string
        const resultado = await TodoHttp(id)
        return {props: {todo: resultado}}
=======
import {TodoHttp} from "../../servicios/http/todo.http";
// i_todos
// [idTodo].ts
export default function () {
    return (
        <>
        <Layout title={"To do's"}>
                <h1> To do's hijo</h1>
        </Layout>
        </>
    )
}
export const getStaticPaths: GetStaticPaths = async () =>{
    //consulta de los ids VALIDOS
    const paths = [
        {
            params: {idTodo: "1"},
        },
        {
            params: {idTodo: "2"},
        },
        {
            params: {idTodo: "4"},
        }
    ];
    return {paths,fallback: false}
}

//Codigo para cargar informacion EN EL SERVIDOR y enviar al CLIENTE

export const getStaticProps: GetStaticProps = async (
    {params}
) =>{
    try{
        // fetch
        const id = params?.idTodo as string;
        const resultado = await TodoHttp(id);
        return {props:{todo: resultado}}
>>>>>>> Stashed changes
    }catch (err: any){
        return {props: {errors: err.message}}
    }
}