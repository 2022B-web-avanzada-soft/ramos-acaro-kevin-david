export interface Computadora {
     id: number
     nombre : string;
     marca : string;
     serial : string;
     precio : number;
     fecha_venta: Date;
}



const url = "http://127.0.0.1:8000/"

export class ComputerService {
    async getComputadoras(): Promise<Computadora[]> {
        const response = await fetch(url+"computadores/")
        const computadoras = await response.json() as Computadora[]
        return computadoras;
    }
    async getComputador(): Promise<Computadora> {
        const response = await fetch(url)
        const computadoras =  await  response.json()
        const computadorasTipadas: Computadora[] = computadoras
        return computadoras;
    }
    static async   deleteComputador(id: number){
        const options = {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        };

        await fetch(url + "computadores/" + id.toString()+"/", options)
            .then(response => {
                // Manejar la respuesta
            })
            .catch(error => {
                console.log(error);
            });
    }

    static async   updateComputador(id: number, computadora:Computadora){
        const options = {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body : JSON.stringify(computadora),
        };
        await fetch(url + "computadores/" + id.toString()+"/", options)
            .then(response => {
                // Manejar la respuesta
            })
            .catch(error => {
                console.log(error);
            });
    }
    static async   createComputer(computadora:Computadora){
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body : JSON.stringify(computadora),
        };
        await fetch(url + "computadores/create", options)
            .then(response => {
                // Manejar la respuesta
            })
            .catch(error => {
                console.log(error);
            });
    }

}