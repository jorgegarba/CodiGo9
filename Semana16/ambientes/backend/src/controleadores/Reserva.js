const {Reserva, Ambiente, Pabellon} = require('../config/Sequelize');
const {Op} = require('sequelize');

const postReserva = (req,res)=>{
    let objReserva = req.body;
    Reserva.build(objReserva).save().then(reservaCreada=>{
        res.status(201).json({
            ok:true,
            contenido:reservaCreada,
            mensaje:'Reserva creada exitosamente'
        })
    })
}
const validarReserva = (req,res)=>{
    // LE MANDAS LAS FECHAS DE RESERVA Y EL AMBIENTE Y VER SI ESTA DISPONIBLE O NO
    // findAll => arreglo de todas las coincidencias y el findOne te devuelve la primera coincidencia
    let {fecha_inicio, fecha_fin, ambiente} = req.params;
    Reserva.findAll({
        include:[{
            model:Ambiente,
            include:[{
                model:Pabellon
            }]
        }],
        where:{
            amb_id:ambiente,
            [Op.or]:[{
                res_fechin : {[Op.between]: [fecha_inicio,fecha_fin]}
            },{
                res_fechfin: {[Op.between]: [fecha_inicio,fecha_fin]}
            }]}
    }).then(reservas=>{
        if (reservas){
            res.status(200).json({
                ok:true,
                mensaje:'Ya hay una reserva en esa fecha',
                contenido: reservas
            })
        }else{
            res.status(200).json({
                ok:true,
                mensaje:'Ese ambiente se encuentra libre en esas horas'
            })
        }
    })

}
const getReservaByFechas = (req,res)=>{
    // BETWEEN AND DANDO UNA FECHA DE INICIO Y UNA FECHA DE FIN
    let {fecha_inicio, fecha_fin} = req.params;
    Reserva.findAll({
        include:[{
            model:Ambiente,
            include:[{
                model:Pabellon
            }]
        }],
        where:{
            [Op.or]:[{
                res_fechin : {[Op.between]: [fecha_inicio,fecha_fin]}
            },{
                res_fechfin: {[Op.between]: [fecha_inicio,fecha_fin]}
            }]}
    }).then(reservas=>{
        if (reservas){
            res.status(200).json({
                ok:true,
                mensaje:'Ya hay una reserva en esa fecha',
                contenido: reservas
            })
        }else{
            res.status(200).json({
                ok:true,
                mensaje:'Ese ambiente se encuentra libre en esas horas'
            })
        }
    })
}
module.exports ={
    postReserva,
    validarReserva,
    getReservaByFechas,
}