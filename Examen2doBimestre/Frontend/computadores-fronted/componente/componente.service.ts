export interface Componente {
     id: number
     nombre : string;
     marca : string;
     serial : string;
     precio : number;
     disponibilidad : boolean;
     computadora: number;
}



const url = "http://127.0.0.1:8000/"

export class ComponenteService {
    async getComponentes(id: number): Promise<Componente[]> {
        const response = await fetch(url+"computadores/"+id.toString()+"/componentes");
        const componentes = await response.json() as Componente[];
        return  componentes

    }
    async getComponentesTodos(): Promise<Componente[]> {
        const response = await fetch(url+"computadores/componentes");
        const componentes = await response.json() as Componente[];
        return  componentes

    }

    static async   deleteComponente(idComputador: number, idComponente: number){
        const options = {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        };

        await fetch(url + "computadores/" + idComputador.toString()+"/componentes/"+idComponente, options)
            .then(response => {
                // Manejar la respuesta
            })
            .catch(error => {
                console.log(error);
            });
    }

    static async   updateComponente(idComputador: number, idComponente: number, componente:Componente){
        const options = {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body : JSON.stringify(componente),
        };
        await fetch(url + "computadores/" + idComputador.toString()+"/componentes/"+idComponente, options)
            .then(response => {
                // Manejar la respuesta
            })
            .catch(error => {
                console.log(error);
            });
    }
    static async   createComponente(idComputador: number,componente:Componente){
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body : JSON.stringify(componente),
        };
        await fetch(url + "computadores/" + idComputador.toString()+"/componentes/create", options)
            .then(response => {
                // Manejar la respuesta
            })
            .catch(error => {
                console.log(error);
            });
    }

}