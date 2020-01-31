const { Pabellon } = require('./../config/Sequelize');
// Con el objeto Pabellon, se accederá a la base de datos
// en la tabla t_pabellon

const getPabellones = (req, res) => {
  // Select * FROM t_pabellon
  Pabellon.findAll().then((pabellones) => {
    res.json({
      pabellones: pabellones
    })
  });
}

module.exports = {
  getPabellones: getPabellones
}