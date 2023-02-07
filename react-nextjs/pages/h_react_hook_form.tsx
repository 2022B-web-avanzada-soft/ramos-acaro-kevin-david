import {useState} from "react";
import {useForm, Controller} from "react-hook-form";
import Layout from "../components/Layout";
import {Button, FormControl, InputLabel, MenuItem, Select} from "@mui/material";
<<<<<<< Updated upstream

=======
import {Contrast} from "@mui/icons-material";
>>>>>>> Stashed changes
type FormularioEjemplo = {
    nombre: string;
    estadoCivil: string;
}
export default function () {
    const [nombre, setNombre] = useState('Marco');

<<<<<<< Updated upstream
    const {handleSubmit, register, formState: {errors, isValid}, control} =
        useForm<FormularioEjemplo>(
        {
            defaultValues: {
                nombre: 'Andres',
                estadoCivil: ''
=======
    const {handleSubmit, register, formState: {errors, isValid}, control} = useForm<FormularioEjemplo>(
        {
            defaultValues: {
                nombre: "David",
                estadoCivil: ""
>>>>>>> Stashed changes
            },
            mode: 'all'
        }
    )
    const controladorSubmit = (data: FormularioEjemplo) => {
        console.log(data)
    }
    return (<>
        <Layout title={'Formulario'}>
            <h1>Formulario con react Hook Form</h1>
            <form onSubmit={handleSubmit(controladorSubmit)}>
                <div className="mb-3">
                    <label htmlFor="nombre" className="form-label">Nombre</label>
                    <input type="text"
                           className="form-control"
                           placeholder="EJ: Marco"
                           id="nombre"
                           {...register('nombre', {
                               required: {
                                   value: true,
<<<<<<< Updated upstream
                                   message: 'nombre requerido'
                               },
                               maxLength:{value:20, message: 'Longitud maxima 20'},
                               minLength:{value: 5, message: 'Longitud minima 5'},
                               validate:{
                                   soloNumeros:(valorActual)=>{
                                       // Transformar a numero un string
                                       // Number("1")
                                       // +"1"
                                       if (Number.isNaN(+valorActual)){
                                           // Se puede devolver un false o mensaje de error
                                           // return false; // Error
                                           return 'Ingrese solo numeros';
                                       } else {
                                           // Se devuelve un true
                                           return true; // Esta correcto
=======
                                   message: "nombre requerido"
                               },
                               minLength: {value: 10, message: "Longitud min 10"},
                               maxLength: {value: 20, message: "Longitud max 20"},
                               validate:{
                                   soloNumeros:(valorActual)=>{
                                       //Transformar a numero un string:
                                       //Number("1")
                                       // +"1"
                                       if (Number.isNaN(+valorActual)){
                                           //Se puede devolver un false o un mensaje de error
                                           //return false; //Error
                                           return "Ingrese solo números";
                                       }else {
                                           // se devuelve un true
                                           return  true; // correcto
>>>>>>> Stashed changes
                                       }
                                   }
                               }
                           })}
                           aria-describedby="nombreHelp"/>
                    <div id="nombreHelp" className="form-text">
                        Ingresa tu nombre.
                    </div>
<<<<<<< Updated upstream

                    {errors.nombre &&
                        <div className="alert alert-warning"
                             role="alert">
                            Tiene errores {errors.nombre.message}
                        </div>
                    }
                </div>
                <div className="mb-3">
                    <FormControl fullWidth>
                        <InputLabel id="estadoCivilLabelId">Estado Civil</InputLabel>
                        <Controller
                            control = {control}
                            rules={{required:{value:true, message:'Estado C. requerido'}}}
                            name="estadoCivil"
                            render={
                            ({field:{onChange, value, onBlur,}}) => {
                                return <Select
                                    labelId="estadoCivilLabelId"
                                    id="estadoCivil"
                                    label="Estado Civil"
                                    onBlur={onBlur}
                                    value={value}
                                    onChange={onChange}
                                >
                                    <MenuItem value={'casado'}>Casado</MenuItem>
                                    <MenuItem value={'soltero'}>Soltero</MenuItem>
                                </Select>
                            }
                        }
                        />
                        {/*Termina controller*/}
                        {errors.estadoCivil &&
                            <div className="alert alert-warning" role="alert">
                                Tiene errores {errors.estadoCivil.message}
                            </div>
                        }
                    </FormControl>
                </div>
                <Button type="submit" disabled={!isValid} variant='outlined'>Submit</Button>
=======
                    {
                        errors.nombre &&
                        <div className={"alert alert-warning"}
                            role={"alert"}>
                            Tiene errores: {errors.nombre.message}
                        </div>
                    }
                </div>
                <div className={"mb-3"}>
                    <FormControl fullWidth>
                        <InputLabel id={"estadoCivilLabelId"}>Estado civil</InputLabel>
                        <Controller
                            control={control}
                            rules={{required: {value:true,message:"Estado civil requerido"}}}
                            name={"estadoCivil"}
                            render={
                                ({field:{onChange,value,onBlur,}})=>{
                                    return <Select
                                    labelId="estadoCivilLabelId"
                                    id="estadoCivilId"
                                    label="Estado Civil"
                                    onBlur={onBlur}
                                    value={value}
                                    onChange={onChange}
                                    >
                                        <MenuItem value={"casado"}>Casado</MenuItem>
                                        <MenuItem value={"soltero"}>Soltero</MenuItem>

                                    </Select>
                                }
                            }
                        />
                        {/*Termina controller*/}
                        {errors.estadoCivil &&
                            <div className={"alert alert-warning "} role="alert">
                                Tiene errores: {errors.estadoCivil.message}
                            </div>

                        }
                    </FormControl>
                </div>
                <Button type="submit"
                        disabled={!isValid}
                        variant='outlined'
                        >Submit</Button>
>>>>>>> Stashed changes
            </form>
        </Layout>

    </>)
}