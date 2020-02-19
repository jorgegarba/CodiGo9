import React from 'react'
import { useForm } from 'react-hook-form';
//https://react-hook-form.com/  
export default function Formulario() {
  //register - para registrar mis input
  //handleSubmit - para ejecutar alguna función en el submit
  //errors - para manejar los errores de los input
    let { register, handleSubmit, errors } = useForm();
  //la funcion que ejecuta el submit, data son los datos del formulario
    let escucharSubmit = (data) => {
      console.log(data);
    }

    //value de forma automática recibirá el valor del input
    let revEstado = (value) => {
      if(value === "complicado"){
        return false;
      }else{
        return true;
      }
    }

    return (
        <div>
            <form onSubmit={handleSubmit(escucharSubmit)}>
                <label>Nombre:</label>
                <input 
                type="text"
                name="nombre"
                className="form-control"
                ref={register({ required:true })}
                />
                {errors.nombre && errors.nombre.type === "required" && (
                  <p>El nombre es obligatorio</p>
                )}
                <label>Apellido</label>
                <input 
                type="text"
                name="apellido"
                className="form-control"
                ref={register({ required: true})}
                />
                {errors.apellido && errors.apellido.type === "required" && (
                  <p>El apellido es obligatorio</p>
                )}
                <label>DNI</label>
                <input 
                type="number"
                name="dni"
                className="form-control"
                ref={register({required: true, minLength:8, maxLength:8})}
                />
                {errors.dni && errors.dni.type === "required" && (
                  <p>El DNI es obligatorio</p>
                )}
                {errors.dni && errors.dni.type === "minLength" && (
                  <p>El DNI tiene que tener min 8 dígitos</p>
                )}
                {errors.dni && errors.dni.type === "maxLength" && (
                  <p>El DNI tiene que tener max 8 dígitos</p>
                )}
                <label>Estado Civil: </label>
                <select 
                name="estadocivil" 
                className="form-control"
                ref={register({validate:revEstado})}
                >
                  <option value="">
                    Escoja una opcion
                  </option>
                  <option value="soltero">
                    Soltero
                  </option>
                  <option value="casado">
                    Casado
                  </option>
                  <option value="complicado">
                    Complicado
                  </option>
                </select>  
                {errors.estadocivil && errors.estadocivil.type === "validate" && (
                  <p>Date cuenta amig@</p>
                )}
                <button 
                type="submit" 
                className="btn btn-primary btn-block mt-1"
                >
                  Enviar Datos
                </button>
            </form>
        </div>
    )
}
