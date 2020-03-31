import { Request, Response } from 'express';
import { Model } from 'sequelize/types';
import { Caracteristica } from '../config/sequelize';

const { Op } = require('sequelize');
export const createCaracteristica = (req: Request, res: Response) => {
    // La diferencia entre el build y el create es que el build nos da una prevalidacion para ver si en caso estemos ingresando FK validemos si existen a comparacion del create, que lo hace todo en un mismo paso, el create es mas efectivo cuando vamos a crear una nueva row sin necesidad de FK (creacion en tablas maestras)
    Caracteristica.create(req.body).then((objCaracteristica: Model) => {
        res.status(201).json({
            ok: true,
            content: objCaracteristica,
            message: 'Caracteristica creada con exito'
        })
    }).catch((error: any) => {
        res.status(500).json({
            error
        })
    })
}

export const findByLikeCaracteristica = (req: Request, res: Response) => {
    // https://sequelize.org/master/manual/model-querying-basics.html#operators
    let { palabra } = req.params;
    Caracteristica.findAll({
        where: {
            caract_desc: {
                [Op.substring]: palabra
            }
        }
    }).then((caracteristicas: Model) => {
        res.json({
            ok: true,
            content: caracteristicas
        })
    })
}

export const getAllCaracteristica = (req: Request, res: Response) => {

}