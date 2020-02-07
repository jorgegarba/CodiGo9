const Sequelize = require('sequelize');
//recuerden que conexion es un objeto de Sequelize con todas sus cosas
const reserva_model = (conexion) => {
    let reserva = conexion.define('reserva',{
        res_id:{
            primaryKey:true,
            allowNull:false,
            type:Sequelize.INTEGER,
            autoIncrement:true
        },
        res_fechin:{
            allowNull:false,
            type:Sequelize.DATE
        },
        res_fechfin:{
            allowNull:false,
            type:Sequelize.DATE
        },
        res_obs: {
            type: Sequelize.TEXT
        }
        //Más tipos de datos en Sequelize -> Apartado DATATYPES
    },
    {
        tableName:'t_reserva',
        timestamps:false
    })
    return reserva;
}
module.exports = reserva_model;