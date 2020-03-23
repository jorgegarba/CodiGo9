import {Sequelize, DataTypes} from 'sequelize';

export const imagenes_model = (conexion:Sequelize)=>{
    const modelo = conexion.define("Imagenes",{
        img_id:{
            type:DataTypes.INTEGER,
            primaryKey:true,
            unique:true,
            allowNull:false,
            autoIncrement:true
        },
        img_url:{
            type:DataTypes.TEXT,
            allowNull:false
        }
    },{
        tableName:"t_imagen",
        timestamps:true
    });
    return modelo;
}