import {Sequelize, Model} from 'sequelize';
import {habitacion_model} from '../models/Habitacion';
export const conexion = new Sequelize(
    'hoteles','root','root',{
        host:'localhost',
        dialect:'mysql',
        // logging: console.log,
        logging:false,
        dialectOptions: {
            useUTC: false,
            dateString: true,
            typeCast: true
        },
        timezone:'-05:00'
    }
)

export const Habitacion:Model= habitacion_model(conexion);
