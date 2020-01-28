import React, {useState, useEffect} from 'react'
import axios from 'axios';

export default function App() {
  let [usuarios, actualizarUsuarios] = useState([]);
  let [url, setUrl] = useState('https://reqres.in/api');
  let endPoint = "https://reqres.in/api";
  useEffect(()=>{
    //1. llamar a la API
    //2. obtengos los datos
    //3. Actualizo los datos -> actualizarUsuarios
    let getUsuarios = async () => {
      axios.get(`${endPoint}/users?page=2`)
      .then(({data})=>{
        console.log(data);
        actualizarUsuarios(data.data);
        
      })
    }
    getUsuarios();
  },[endPoint]);
  
  return (
    
    <div className="container">
      {console.log(usuarios)}
      <table>
        <thead>
          <tr>
            <th>N°</th>
            <th>Id</th>
            <th>Nombres</th>
            <th>Apellidos</th>
            <th>Correo</th>
            <th>Avatar</th>
          </tr>
        </thead>
        <tbody>
          {usuarios.map((usuario, index)=> {
            return (
              <tr key={index}>
                <th>{index}</th>
                <th>{usuario.id}</th>
                <th>{usuario.first_name}</th>
                <th>{usuario.last_name}</th>
                <th>{usuario.email}</th>
                <th>
                  {usuario.avatar ? <img src={usuario.avatar} style={{width:'50px'}}/> : null}
                </th>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}
