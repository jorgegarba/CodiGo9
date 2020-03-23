import { Sequelize, DataTypes } from 'sequelize';

export const habitacion_caracteristica_model = (conexion: Sequelize) => {
    const modelo = conexion.define("HabitacionCaracteristica", {
        hab_carac_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
            unique: true
        }
    }, {
        tableName: "t_hab_caract",
        timestamps: true
    });
    return modelo;
}