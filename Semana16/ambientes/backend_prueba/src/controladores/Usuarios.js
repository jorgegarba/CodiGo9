
const getUsuarios = (req, res) => {
  let usuarios = [
    { nombre: "Jorge", apellido: "Garnica" },
    { nombre: "Patty", apellido: "Rodriguez" }
  ];
  res.json({
    usuarios: usuarios
  })
}

const getUsuarioPorNombre = (req, res) => {

  let usuario = {
    nombre: 'Pedro',
    apellido: 'Caballero'
  };
  res.json({
    usuario: usuario
  })
}

const postUsuarioCrear = (req, res) => {
  let usuario = req.body.usuario;
  res.json({
    recibido: usuario
  });
}

const deleteUsuarioBorrar = (req, res) => {
  let id_usuario = req.params.id_usuario;
  res.json({
    recibido: id_usuario
  })
}

// export default getUsuarios
module.exports = {
  getUsuarios: getUsuarios,
  getUsuarioPorNombre: getUsuarioPorNombre,
  postUsuarioCrear: postUsuarioCrear,
  deleteUsuarioBorrar: deleteUsuarioBorrar
}