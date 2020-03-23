import {Sequelize, DataTypes} from 'sequelize';

export const usuario_model = (conexion: Sequelize)=>{
    const modelo = conexion.define("Usuario",{
        usu_id:{
            type:DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true,
            allowNull:false,
            unique:true
        },
        usu_email:{
            type:DataTypes.STRING(45),
            allowNull:false
        },
        usu_nom:{
            type:DataTypes.STRING(35),
            allowNull:false
        },
        usu_ape:{
            type:DataTypes.STRING(35),
            allowNull:false
        },
        usu_tipo:{
            type:DataTypes.INTEGER,
            allowNull:false
        },
        usu_hash:{
            type:DataTypes.TEXT,
            allowNull:false
        },
        usu_salt:{
            type:DataTypes.TEXT,
            allowNull:false
        },
        usu_doc:{
            type:DataTypes.STRING(20),
            allowNull:false
        }
    },{
        tableName:"t_usuario",
        timestamps:true
    });
    return modelo;
}