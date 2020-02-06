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

const Login = (req,res)=>{
    let {objUsuario} = req.body;
    Usuario.findOne({
        where:{
            usu_email: objUsuario.correo
        }
    }).then(usuarioEncontrado=>{
        if(usuarioEncontrado){
            let resultado = usuarioEncontrado.validarPassword(objUsuario.password);
            if (resultado){
                let token = usuarioEncontrado.generarJWT();
                res.status(200).json({
                    ok:true,
                    contenido: usuarioEncontrado.usu_nom +' ' +usuarioEncontrado.usu_ape,
                    mensaje: 'usuario correctamente logeado',
                    token: token
                })
            }else{
                res.status(404).json({
                    ok:false,
                    mensaje: 'usuario o contraseña incorrectos'
                })
            }
        }else{
            res.status(404).json({
                ok:false,
                mensaje: 'usuario o contraseña incorrectos'
            })
        }
    })
}


module.exports = {
    RegistrarUsuario,
    Login
}
