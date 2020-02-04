const {Usuario} = require('../config/Sequelize');

const RegistrarUsuario = (req,res)=>{
    let {objUsuario} = req.body;
    Usuario.findOne({
        where: {usu_email: objUsuario.usu_email}
    }).then(usuarioEncontrado=>{
        if(usuarioEncontrado){
            res.status(200).json({
                ok: false,
                mensaje: 'Ese correo ya se encuentra registrado'
            })
        }else{
            let usuarioCreado = Usuario.build(objUsuario);
            usuarioCreado.setSaltAndHash(objUsuario.password);
            usuarioCreado.save().then(nuevoUsuario=>{
                res.status(201).json({
                    ok:true,
                    contenido: nuevoUsuario,
                    mensaje:'Usuario creado exitosamente'
                })
            });
        }
    })
}

const Login = (req,res)=>{}


module.exports = {
    RegistrarUsuario,
    Login
}
