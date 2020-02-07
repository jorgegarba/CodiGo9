const {Reserva, Ambiente, Pabellon, Usuario} = require('../config/Sequelize');
const {Op} = require('sequelize');

const postReserva = (req,res)=>{
    let objReserva = req.body;
    // antes de crear la reserva ver si esta disponible ese ambiente y ver si el tipo de usuario que autoriza es de tipo 3 sino no me deja wardar
    Usuario.findOne({
        where:{
            usu_id: objReserva.usu_autoriza
        }
    }).then(usuario_autoriza=>{
        if(usuario_autoriza.usu_tipo===3){
            Reserva.findAll({
                where:{
                    amb_id:objReserva.amb_id,
                    [Op.or]:[{
                        res_fechin : {[Op.between]: [objReserva.res_fechin, objReserva.res_fechfin]}
                    },{
                        res_fechfin: {[Op.between]: [objReserva.res_fechin, objReserva.res_fechfin]}
                    }]}
            }).then(reservas => {
                if (reservas.length === 0){
                    Reserva.build(objReserva).save().then(reservaCreada=>{
                        res.status(201).json({
                            ok:true,
                            contenido:reservaCreada,
                            mensaje:'Reserva creada exitosamente'
                        })
                    })
                }else{
                    res.status(400).json({
                        ok:false,
                        mensaje: 'Ese ambiente ya se encuentra reservado en esas fechas'
                    })
                }
            })
        }else{
            res.status(401).json({
                ok:false,
                mensaje: 'El usuario no disponible de privilegios suficientes para reservar el aula'
            })
        }
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