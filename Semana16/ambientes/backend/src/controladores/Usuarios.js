
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


// export default getUsuarios
module.exports = {
  getUsuarios: getUsuarios,
  getUsuarioPorNombre: getUsuarioPorNombre
}