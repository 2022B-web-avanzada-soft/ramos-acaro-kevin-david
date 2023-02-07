<<<<<<< Updated upstream
=======
// /i_todos
//  index.ts
>>>>>>> Stashed changes
import Layout from "../../components/Layout";
import {useEffect, useState} from "react";
import {Todo, TodoHttp} from "../../servicios/http/todo.http";

<<<<<<< Updated upstream
export default function (){
    const [arregloTodos, setArregloTodos] = useState(
        [] as Todo[]
    )
    useEffect(
        () => {
            consultarTodos();
        },
        []
    )
    const consultarTodos = async () => {
        const resultado = await TodoHttp();
        setArregloTodos([
            ...arregloTodos,
            ...resultado
        ])
    }
    return(
        <>
            <Layout title={"To do's"}>
                <h1>To do's</h1>
                {arregloTodos.map(
                    (todo) => {
                        return (
                            <li key={todo.id}>
                                {todo.id} - {todo.completed} -
=======
export default function () {
    const [arregloTodos, setArregloTodos] = useState([] as Todo[])
    useEffect(
        ()=>{
            //consulta API...
            consultarTodos();
        },[]
    )
    const consultarTodos = async ()=>{
        const resultado = await TodoHttp();
        setArregloTodos([
            ...arregloTodos,
            ...resultado])
    }
    return (
        <>
            <Layout title={"Todos"}>
                <h1>To do's</h1>
                {arregloTodos.map(
                    (todo)=>{
                        return (
                            <li key={todo.id}>
                                {todo.id} - {todo.completed? todo.completed : "No VALE"} -
>>>>>>> Stashed changes
                                <a href={"/i_todos/" + todo.id}>
                                    {todo.title}
                                </a>
                            </li>
                        )
                    }
                )}
            </Layout>
        </>
    )
}