import {ConnectedSocket, MessageBody, SubscribeMessage, WebSocketGateway} from "@nestjs/websockets";
import {Server, Socket} from "socket.io";
@WebSocketGateway(
    8080, // Puerto donde esta escuchando el servidor de websockets
    {
        cors:{
            origin: "*", //habilitando la conexion desde cualquier IP
        }
    }
)


export class EventosGateway {
    @SubscribeMessage("hola") //Nombre del metodo para recibir eventos
    devolverHola(
        @MessageBody()
            message: {mensaje: string},
        @ConnectedSocket()
            socket: Socket //import {Server, Socket} from "socket.io";
    ){
        console.log("message", message);
        socket.broadcast // broadcast => TODOS LOS CLIENTES CONECTADOS Y que esten
                        // escuchando elevento "eschucharEventosHola" les llegue el mensaje
            .emit(
                "escucharEventoHola",
                {
                    mensaje: "Bienvenido " + message.mensaje
                });
        return {mensaje: "ok"}; //Callback del metodo "hola"
    }

    @SubscribeMessage("unirseSala") // Nombre metodo "unirseSala"
    unirseSala(
        @MessageBody()
            message: { salaId: string, nombre: string}, //parametros metodo
        @ConnectedSocket()
            socket: Socket
    ){
        socket.join(message.salaId); // socket.join agrupa a los clientes de websockets segun un identificador.
                                    // Al unirse a una sala podermos escuchar los mensajes de esa sala

        const mensajeBienvenidaSala= {
            mensaje: `Bienvenido ${message.nombre} a la sala ${message.salaId}`
        };
        socket.broadcast
            .to(message.salaId) // Manda el mensaje a aun grupo en especifico segun el identificador
            .emit("escucharEventoUnirseSala", mensajeBienvenidaSala);// Los q esuchan este evento reciben este mensaje
        return {mensaje: "ok"}; //callback del metodo "UniserSala"
    }

    @SubscribeMessage("enviarMensaje") // nombre del metodo "enviarMensaje"
    enviarMensaje(
        @MessageBody()
            message: {salaId: string, nombre: string, mensaje: string},
        @ConnectedSocket()
        socket: Socket
    ){
        //backend
        const mensajeSala ={
            nombre: message.nombre,
            mensaje: message.mensaje,
            salaId: message.salaId
        };
        socket.broadcast
            .to(message.salaId) // Sala a la que enviamos el mensaje
            .emit("escucahrEventoMensajeSala", mensajeSala); // nombre del evento y datos a enviar
        return {mensaje: "ok"}; //callback
    }
}