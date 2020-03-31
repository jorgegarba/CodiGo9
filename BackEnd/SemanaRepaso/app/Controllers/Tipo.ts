import {Request, Response} from 'express';
import {Model} from 'sequelize/types';
import { Tipo } from '../config/sequelize';

export const createTipo = (req:Request, res: Response)=>{
    let objTipo = Tipo.build(req.body);
    objTipo.save().then((tipoCreado:Model)=>{
        res.status(201).json({
            ok: true,
            content: tipoCreado,
            message: 'Tipo creado exitosamente'
        })
    }).catch((error:any)=>{
        res.status(500).json({
            ok:false,
            content: error
        })
    })
}
export const getAllTipos = (req:Request, res:Response)=>{
    Tipo.findAll({
        where:{
            tipo_est: true
        }
    }).then((tipos:Model)=>{
        res.json({
            ok: true,
            content: tipos,
            message:'Se muestran solamente los tipos habilitados'
        })
    })
}
export const getByPkTipo = (req:Request, res:Response)=>{
    let {tipo_id} = req.params;
    // Tipo.findAll({
    //     where:{
    //         tipo_id:tipo_id
    //     }
    // })
    Tipo.findByPk(tipo_id).then((tipo:Model)=>{
        // el tipo va a ser nulo o no cuando solamente se retorne uno solo findOne findByPk
        // findAll => retorna un arreglo y tendria que validar su contenido puesto que puede ser sin contenido o no
        if (tipo) {
            res.json({
                ok:true,
                content:tipo
            })
        }else{
            res.status(404).json({
                ok: false,
                message: 'No existe el tipo con ese id'
            })
        }
    })
}
export const updateTipo = (req:Request, res:Response)=>{
    let {tipo_id} = req.params;
    Tipo.update(req.body,{
        where:{
            tipo_id // tipo_id : tipo_id
        }
    }).then((cantTipos:any)=>{
        if (cantTipos[0] === 1){
            res.status(200).json({
                ok : true,
                message: 'Tipo actualizado con exito'
            })
        }else{
            res.status(404).json({
                ok: false,
                message: 'No se encontro el tipo a actualizar'
            })
        }
    })
}
export const deleteTipo = (req:Request, res:Response)=>{
    let {tipo_id} = req.params;
    Tipo.update({tipo_est: false},{
        where: {
            tipo_id
        }
    }).then((cantTipos: any)=>{
        if (cantTipos[0]===1){
            res.json({
                ok: true,
                message: 'Tipo inhabilitado exitosamente'
            })
        }else{
            res.status(404).json({
                ok: false, 
                message: 'No se encontro el tipo a inhabilitar'
            })
        }
    })
}
export const activarTipo = (req:Request, res:Response)=>{
    let {tipo_id} = req.params;
    Tipo.update({tipo_est: true},{
        where: {
            tipo_id
        }
    }).then((cantTipos: any)=>{
        if (cantTipos[0]===1){
            res.json({
                ok: true,
                message: 'Tipo habilitado exitosamente'
            })
        }else{
            res.status(404).json({
                ok: false, 
                message: 'No se encontro el tipo a habilitar'
            })
        }
    })
}