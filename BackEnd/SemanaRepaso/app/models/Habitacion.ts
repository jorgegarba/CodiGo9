import {Sequelize, DataTypes} from 'sequelize';
export const habitacion_model = (conexion : Sequelize)=>{
    const modelo = conexion.define('Habitacion',{
        hab_id : {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
            unique: true
        },
        hab_nom: {
            type:DataTypes.STRING(20),
            allowNull: false
        },
        hab_disp: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: true
        }
    },{
        tableName:'t_habitacion',
        timestamps: true
    });
    return modelo;
}