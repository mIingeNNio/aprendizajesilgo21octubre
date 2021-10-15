const usuarioModel = require("../models/usariosmodel");

module.exports = class UsuariosController{
    static async insert(req, res){
        try{
            let usuario = req.body;
            usuario= await usuarioModel.create(usuario);
            usuario.clave = undefined;
            res.status(201).json(usuario);

        }catch (err){
            res.status(400).json({"message": err.message})
        }
    }
    static async validarUsuario(req, res){
        try{
            const credencial = req.body;
            const usuario= await usuarioModel.findOne({ "usuario": credencial.usuario });
            if(usuario == undefined || usuario == null){
                res.status(404).json({ "message": "El usuario no existe" });
            }else if(usuario.clave != credencial.clave){
                res.status(403).json({ "message": "El usuario / contraseña no son válidos" });
            }else{
                usuario.clave = undefined;
                res.status(200).json(usuario);
            }
        }catch (err){
            res.status(400).json({ "message": err.message })
        }
    }


}