import {Sequelize, DataTypes} from 'sequelize';
export const caracteristica_model=(conexion:Sequelize)=>{
    const modelo = conexion.define("Caracteristica",{
        caract_id:{
            type: DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true,
            unique:true
        },
        caract_desc:{
            type:DataTypes.STRING(45),
            allowNull:false,
        },
        caract_prec:{
            type: DataTypes.DECIMAL(5,2),
            allowNull:false
        }
    }, {
        tableName:'t_caracteristica',
        timestamps:true
    });
    return modelo;
}