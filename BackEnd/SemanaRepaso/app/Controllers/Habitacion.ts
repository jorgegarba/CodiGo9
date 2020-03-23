import { Habitacion } from '../config/sequelize';
import { Request, Response } from 'express';
import { Model } from 'sequelize/types';

export const getAllHabitacion = (req: Request, res: Response) => {
    Habitacion.findAll().then((habitaciones: Model) => {
        console.log(habitaciones);
        if (habitaciones.length === 0) {
            return res.status(200).json({
                ok: true,
                message: 'No hay ninguna habitacion registrada'
            })
        }
        else {
            return res.status(200).json({
                ok: true,
                content: habitaciones
            })
        }
    })
}
export const createHabitacion = (req: Request, res: Response) => {
    Habitacion.build(req.body).save().then((objHabitacion: Model) => {
        return res.status(201).json({
            ok: true,
            content: objHabitacion
        })
    }).catch((error: any) => {
        return res.status(500).json({
            ok: false,
            message: error
        })
    })
}