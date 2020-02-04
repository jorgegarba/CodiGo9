const { Pabellon, Ambiente, Reserva } = require('./../config/Sequelize');
// Con el objeto Pabellon, se accederá a la base de datos
// en la tabla t_pabellon
const {Op} = require('sequelize');

const getPabellones = (req, res) => {
  // Select * FROM t_pabellon
  Pabellon.findAll({
    include: [{
      model:Ambiente
    }]
  }).then((pabellones) => {
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
    res.status(201).json({
      ok: true,
      contenido: pabellonCreado,
      mensaje: 'El pabellon ha sido creado con exito'
    })
    // Si no le pones stado a tu respuesta automaticamente es el numero 200
    // el send se usa para enviar una cadena de texto
    // res.status(200).send('Ok');
  })

}
const postPabellonConCreate = (req, res) => {
  // Forma 2, Crear y guardar una instancia de un Pabellon en un 
  // solo paso
  // pero hay que tener cuidado porque si hay un error en la creacion de ese 
  // objeto a la siguiente vez, saltara su correlativo de la primary key

  // Gracias a destructuracion de EMC6
  let { objPabellon } = req.body;
  Pabellon.create(objPabellon).then((pabellonCreado) => {
    res.status(201).json({
      ok: true,
      contenido: pabellonCreado,
      mensaje: 'El pabellon ha sido creado con exito'
    })
  })

}
const putPabellon = (req, res) => {
  let { id_pabellon } = req.params;
  let { objPabellon } = req.body;
  // findAll, findOne, findByPk
  Pabellon.findByPk(id_pabellon).then((pabellon) => {
    if (pabellon) {
      // anidamiento de promesas
      return Pabellon.update(objPabellon, {
        where: { pab_id: id_pabellon }
      })
    } else {
      res.status(404).json({
        ok: false,
        contenido: null,
        mensaje: 'No se encontro ese pabellon'
      })
    }
  }).then(pabellonActualizado => {
    res.status(200).json({
      ok: true,
      contenido: pabellonActualizado,
      mensaje: 'El pabellon se actualizo correctamente'
    })
  })
}
const getPabellonLike = (req,res)=>{
  let {palabra}=req.params;
  // SELECT * FROM PABELLON WHERE pab_nom LIKE '%'+palabra+'%'
  Pabellon.findAll({
    where: {
      pab_nom:{
      [Op.like]:'%'+palabra+'%'
      }
    }
  }).then(pabellones=>{
    res.status(200).json({
      ok:true,
      contenido:pabellones
    })
  })
}

const getAmbientesByPabellon =(req,res)=>{
  let {id_pabellon}= req.params;
  Pabellon.findByPk(id_pabellon,{
      attributes:[],
      include:[{
          model:Ambiente,
          attributes:['amb_id','amb_nro','amb_afo','amb_tipo']
      }]
  }).then(pabellon=>{
      res.status(200).json({
          ok:true,
          contenido:pabellon
      })
  })
}

const getReservaByPabellon = (req,res)=>{
    let {id_pabellon} = req.params;
    Pabellon.findByPk(id_pabellon,{
      include:[{
        model:Ambiente,
        include:[{
          model:Reserva
        }]
      }]
    }).then(reservas=>{
      res.status(200).json({
        ok:true,
        contenido:reservas
      })
    })
}


module.exports = {
  getPabellones: getPabellones,
  postPabellon: postPabellon,
  postPabellonConCreate,
  putPabellon,
  getPabellonLike,
  getAmbientesByPabellon,
  getReservaByPabellon
}