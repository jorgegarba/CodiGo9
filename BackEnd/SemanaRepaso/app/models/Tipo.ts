import { Sequelize, DataTypes } from 'sequelize';

export const tipo_model = (conexion: Sequelize) => {
    const modelo = conexion.define("tipo", {
        tipo_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
            unique: true
        },
        tipo_desc: {
            type: DataTypes.STRING(30),
            allowNull: false
        },
        tipo_est: {
            type: DataTypes.BOOLEAN,
            defaultValue: true,
            allowNull: false
        }
    }, {
        tableName: "t_tipo",
        timestamps: true
    });
    return modelo;
}