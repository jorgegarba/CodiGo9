import { Sequelize, DataTypes } from 'sequelize';

export const reserva_model = (conexion: Sequelize) => {
    const modelo = conexion.define("Reserva", {
        res_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
            unique: true
        },
        res_checkin: {
            type: DataTypes.DATE,
            allowNull: false
        },
        res_checkout: {
            type: DataTypes.DATE,
            allowNull: false
        },
        res_total: {
            type: DataTypes.DECIMAL(5,2),
            allowNull:false
        },
        res_est: {
            type: DataTypes.INTEGER,
            allowNull:false,
            defaultValue:1
        }
    },{
        tableName:"t_reserva",
        timestamps:true
    });
    return modelo;
}