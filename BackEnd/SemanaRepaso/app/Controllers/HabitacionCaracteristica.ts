import { Request, Response } from 'express';
import { Model } from 'sequelize/types'
import { Habitacion_Caracteristica, Habitacion, Caracteristica } from '../config/sequelize';

export const createHabCaract = (req: Request, res: Response) => {
    // let objHabCaract = Habitacion_Caracteristica.build(req.body);
    Habitacion.findByPk(req.body.hab_id).then( (objHabitacion: Model) => {
        if (objHabitacion) {
             req.body.caract_id.forEach( (id: any) => {
                 Caracteristica.findByPk(id).then( (objCaracteristica: Model) => {
                    if (objCaracteristica) {
                        Habitacion_Caracteristica.build({
                            hab_id:req.body.hab_id,
                            caract_id: id
                        }).save();
                    }
                })
            });
            res.status(201).json({
                ok: true,
                message: 'Se creo la(s) relacion(es) entre la habitacion y la caracteristica'
            })
        } else {
            res.status(404).json({
                ok: false,
                message: `La habitacion o la caracteristica no existe en la bd`
            })
        }
    }).catch((error: any) => { res.status(500).json({ error }) })
}