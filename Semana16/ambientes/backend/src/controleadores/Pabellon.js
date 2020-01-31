const { Pabellon } = require('./../config/Sequelize');
// Con el objeto Pabellon, se accederá a la base de datos
// en la tabla t_pabellon

const getPabellones = (req, res) => {
  // Select * FROM t_pabellon
  Pabellon.findAll().then((pabellones) => {
    res.json({
      ok: true,
      contenido: pabellones
    })
  });
}

const postPabellon = (req, res) => {
  let objPabellon = req.body.objPabellon;
  // Forma 1, Creando primero la instancia de un Pabellon
  // Para guardarlo en la BD posteriormente
  let objPab = Pabellon.build(objPabellon);
  objPab.save().then((pabellonCreado) => {
    res.json({
      ok: true,
      contenido: pabellonCreado,
      mensaje: 'El pabellon ha sido creado con exito'
    })
  })


  // Forma 2, Crear y guardar una instancia de un Pabellon en un 
  // solo paso

}



module.exports = {
  getPabellones: getPabellones,
  postPabellon: postPabellon
}