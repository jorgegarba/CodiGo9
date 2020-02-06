const sequelize = require('sequelize');
const crypto = require('crypto');
const usuario_model = (conexion) => {
    let usuario = conexion.define("usuario",
        {
            usu_id: {
                primaryKey: true,
                autoIncrement: true,
                type: sequelize.INTEGER,
                allowNull: false
            },
            usu_nom: {
                type: sequelize.STRING(25),
                allowNull: false
            },
            usu_ape: {
                type: sequelize.STRING(25),
                allowNull: false
            },
            usu_email: {
                type: sequelize.STRING(40),
                allowNull: false,
                unique: true
            },
            usu_hash: {
                type: sequelize.TEXT,
                allowNull: false
            },
            usu_salt: {
                type: sequelize.TEXT,
                allowNull: false
            },
            usu_tipo: {
                type: sequelize.TINYINT,
                allowNull: false
            },
            usu_fono: {
                type: sequelize.STRING(20),
                allowNull: false
            }
        }, {
        tableName: "t_usuario",
        timestamps: true
    }
    );
    usuario.prototype.setSaltAndHash = function (password) {
        this.usu_salt = crypto.randomBytes(16).toString('hex');
        this.usu_hash = crypto.pbkdf2Sync(password,this.usu_salt,1000,64,'sha512').toString('hex');
    };
    usuario.prototype.validarPassword = function (password) {
        let hash_temporal = crypto.pbkdf2Sync(password,this.usu_salt,1000,64,'sha512').toString('hex');
        if(hash_temporal===this.usu_hash){
            return true;
        }else{
            return false;
        }
    }






    return usuario
}

module.exports = usuario_model;