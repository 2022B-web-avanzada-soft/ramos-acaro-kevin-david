// 04-clases.ts
class Persona{
    public nombre: string;
    public apellido: string;
    static nombreReferencial: string = 'Humano';
    protected  nombreYApellido = ''; // Duck Typing -> string
    constructor(
        nombreParametro: string,
        apellidoParametro: string,
    ) {
        this.nombre = nombreParametro;
        this.apellido = apellidoParametro;
        this.nombreYApellido = nombreParametro + ' ' + apellidoParametro;
    }
    private mostrarNombreApellido(): string{
        return this.nombreYApellido;
    }
}

class Usuario extends Persona{
    constructor(
        nombreParametro: string, // Parametros del constructor
        apellidoParametro: string, // Parametros del constructor
        public cedula: string, // Modificador acceso -> Propiedad de la clase
        public estadoCivil: string, // Modificador acceso -> Propiedad de la clase
    ) {
        super(nombreParametro, apellidoParametro);
        this.cedula;
        this.estadoCivil;

    }
}
const kevin = new Usuario(
    'Kevin',
    'Ramos',
    '1726651159',
    'soltero'
);
kevin.nombre;
kevin.apellido;
kevin.cedula; // '1004749873'
kevin.estadoCivil; //'soltero'
