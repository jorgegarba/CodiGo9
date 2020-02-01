const {Ambiente, Pabellon} = require('../config/Sequelize');
const {Op} = require('sequelize');
// req => Request, res => Response, next => Next Function
// express types
const getAmbientesWithPabellon = (req,res)=>{
    Ambiente.findAll({
        include: [{
            model: Pabellon,
            // attributes: ['pab_nom']
        }]
    }).then(ambientes=>{
        res.status(200).json({
            ok:true,
            contenido:ambientes
        })
    })
}
const postAmbientes = (req,res)=>{
    let {objAmbiente} = req.body;
    Ambiente.build(objAmbiente).save().then(ambienteCreado=>{
        res.status(201).json({
            ok:true,
            contenido: ambienteCreado,
            mensaje: 'El ambiente fue creado exitosamente'
        })
    }).catch(error=>{
        res.status(500).json({
            ok:false,
            contenido: error,
            mensaje: 'Hubo un error al guardar el ambiente'
        })
    })

}
const putAmbientes = (req,res)=>{
    let {id_ambiente} =req.params;
    let {objAmbiente} = req.body;
    Ambiente.findByPk(id_ambiente).then(ambiente=>{
        if(ambiente){
            return Ambiente.update(objAmbiente, {
                where: {amb_id: id_ambiente}
            })
        }else{
            res.status(404).json({
                ok:false,
                contenido: null,
                mensaje: 'No se encontro el ambiente a actualizar'
            })
        }
    }).then(ambienteActualizado => {
        if (ambienteActualizado[0]===1){
            res.status(200).json({
                ok:true,
                mensaje: 'Ambiente actualizado',
                contenido: ambienteActualizado
            })
        }else{
            res.status(200).json({
                ok:true,
                mensaje: 'Hubo un error al actualizar el ambiente'
            })
        }
    })
}


module.exports = {
    getAmbientesWithPabellon,
    postAmbientes,
    putAmbientes,
}