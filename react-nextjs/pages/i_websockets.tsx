// i_websockets.tsx
import io from "socket.io-client"
import {useEffect, useState} from "react";
import MensajeChat, {MensajeChatProps} from "../components/i_websockets/MensajeChat";
import {useForm} from "react-hook-form";
import Layout from "../components/Layout";
const servidorWebsocket = 'http://localhost:11202';
const socket = io(servidorWebsocket);

export interface FormularioModelo{
    salaId: string;
    nombre: string;
    mensaje: string;
    error?: boolean;
}

export type MensajeSala = FormularioModelo;
export type MensajeSala2 = {
    salaId: string;
    nombre: string;
    mensaje: string;
}

export default function (){
    const [isConnected, setIsConnected] = useState(socket.connected)
    const [mensajes, setMensajes] = useState([] as MensajeChatProps[]);

    const {control, register, handleSubmit, formState: {errors, isValid}} = useForm({
        defaultValues: {
            salaId: '',
            nombre: '',
            mensaje: '',
        },
        mode: 'all'
    });

    useEffect(
        ()=>{

            socket.on('connect', () => {
                setIsConnected(true);
                console.log('Si esta conectado');
            });
            socket.on('disconnect', () => {
                setIsConnected(false);
                console.log('No esta conectado');
            });
            socket.on('escucharEventoUnirseSala', (data: { mensaje: string, error? : boolean }) => {
                const nuevoMensaje: MensajeChatProps = {
                    mensaje: data.mensaje,
                    nombre: 'Sistema',
                    posicion: 'I',
                    error: data.error
                };
                if(nuevoMensaje.error){

                }else{
                    setMensajes((mensajesAnteriores) => [...mensajesAnteriores, nuevoMensaje]);
                }

            });
            socket.on('escucharEventoMensajeSala', (data: MensajeSala) => {
                console.log('escucharEventoMensajeSala');
                const nuevoMensaje: MensajeChatProps = {
                    mensaje: data.salaId + " - " + data.mensaje,
                    nombre: data.nombre,
                    posicion: 'I',
                    error: data.error
                };

                setMensajes((mensajesAnteriores) => [...mensajesAnteriores, nuevoMensaje]);
            });

        },
        []
    )

    const enviarEventoHola = () => {
        const nuevoMensaje: MensajeChatProps = {
            mensaje: 'Adrian',
            nombre: 'Sistema',
            posicion: 'I'
        };
        socket.emit(
            'hola', // Nombre Evento
            nuevoMensaje, //  Datos evento
            (datosEventoHola) => { // Callback o respuesta del evefnto
                console.log(datosEventoHola) // {mensaje: 'ok'};
                setMensajes((mensajesAnteriores) => [...mensajesAnteriores, nuevoMensaje]);
            }
        )

    }

    const unirseSalaOEnviarMensajeASala = (data:FormularioModelo)=>{
        if(data.mensaje === ""){
            //unimos a la sala
            const dataEventoUnirseSala = {
                        salaId: data.salaId,
                        nombre: data.nombre,
                        error: data.error,
            };
            socket.emit(
                "unirseSala", //Nombre Evento
                dataEventoUnirseSala, // Datos evento
                (mensajeError)=>{
                    if(mensajeError.error){
                        const nuevoMensaje: MensajeChatProps = {
                            mensaje: "La sala " + dataEventoUnirseSala.salaId + " ya esta llena.",
                            nombre: "Sistema",
                            posicion: "I",
                            error: dataEventoUnirseSala.error
                        };
                        console.log(dataEventoUnirseSala.error);
                        setMensajes((mensajesAnteriores)=>[...mensajesAnteriores, nuevoMensaje]);
                    }else{
                        const nuevoMensaje: MensajeChatProps = {
                            mensaje: "Bienvenido a la sala " + dataEventoUnirseSala.salaId ,
                            nombre: "Sistema",
                            posicion: "I",
                            error: dataEventoUnirseSala.error
                        };
                        setMensajes((mensajesAnteriores)=>[...mensajesAnteriores, nuevoMensaje]);

                    }

                }
            )

        }else{
            //mandamos mensaje
            const dataEventoEnviarMensajeSala = {
                salaId: data.salaId,
                nombre: data.nombre,
                mensaje: data.mensaje
            };
            socket.emit(
                "enviarMensaje", //Nombre Evento
                dataEventoEnviarMensajeSala, // Datos evento
                ()=>{
                    const nuevoMensaje: MensajeChatProps = {
                        mensaje: data.nombre,
                        nombre: data.nombre,
                        posicion: "D"
                    };
                    setMensajes((mensajesAnteriores)=>[...mensajesAnteriores, nuevoMensaje]);
                }
            )
        }
    }
    return (
        <>
            <Layout title="Formulario">
                <h1>Websockets</h1>
                {isConnected ?  <p><strong>Conectado</strong></p> : "Desconectado"}
                <button className={'btn btn-success'} onClick={() => enviarEventoHola()}>Enviar evento hola</button>
                <div className="row">
                    <h1>FORMULARIO</h1>
                    <div className="col-sm-6">
                        <form onSubmit={handleSubmit(unirseSalaOEnviarMensajeASala)} >
                                <div className="mb-3">
                                <label htmlFor="salaId" className="form-label">Sala ID</label>
                                <input type="text"
                                       className="form-control"
                                       placeholder="Ej: 1234"
                                       id = "salaId"
                                       {...register("salaId",{required: "Ingresar salaID"})}
                                        aria-describedby="salaIdHelp"
                                />
                                <div id="salaIdHelp" className="form-text">
                                    Ingresa tu idSala
                                </div>
                                {errors.salaId &&
                                    <div className="alert alert-warning" role="alert">
                                        Tiene errores: {errors.salaId.message}
                                    </div>
                                }
                            </div>
                            <div className="mb-3">
                                <label htmlFor="nombre" className="form-label">Nombre</label>
                                <input type="text"
                                       className="form-control"
                                       placeholder="Ej: Kevin"
                                       id = "nombre"
                                       {...register("nombre",{required: "Nombre requerido"})}
                                       aria-describedby="nombreHelp"
                                />
                                <div id="nombreHelp" className="form-text">
                                    Ingresa tu nombre.
                                </div>
                                {errors.nombre &&
                                    <div className="alert alert-warning" role="alert">
                                        Tiene errores: {errors.nombre.message}
                                    </div>
                                }
                            </div>
                            <div className="mb-3">
                                <label htmlFor="mensaje" className="form-label">Mensaje</label>
                                <input type="text"
                                       className="form-control"
                                       placeholder="Ej: Mensaje"
                                       id = "mensaje"
                                       {...register("mensaje")}
                                       aria-describedby="mensajeHelp"
                                />
                                <div id="mensajeHelp" className="form-text">
                                    Ingresa tu mensaje
                                </div>
                                {errors.mensaje &&
                                    <div className="alert alert-warning" role="alert">
                                        Tiene errores: {errors.mensaje.message}
                                    </div>
                                }
                            </div>
                            <button type="submit"
                                    disabled={!isValid}
                                    className="btn btn-warning">
                                Unirse Sala
                            </button>
                            <button type="reset"
                                    className="btn btn-danger">
                                Reset
                            </button>
                        </form>
                    </div>
                    <div className="col-sm-6">
                        {mensajes.map((mensaje, indice) =>
                            <MensajeChat key={indice}
                                         mensaje={mensaje.mensaje}
                                         nombre={mensaje.nombre}
                                         posicion={mensaje.posicion}
                            />)
                        }
                    </div>
                </div>
            </Layout>
        </>
    )
}