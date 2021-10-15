const express = require("express");
const MaestroControler = require("../controllers/Maestros.controller");
const EstudianteControler = require("../controllers/Estudiantes.controller");
const usuariosController = require("../controllers/Usuario.controller");

const router = express.Router();
//Multer configuration
const multer = require("multer");
const storage = multer.diskStorage({
    destination: (req, res, cb) => {
        cb(null, "./uploads");
    },
    filename:(req, file, cb)=>{
        cb(null, file.fieldname +"_"+ Date.now() + "_"+ file.originalname);
    }
});
const upload = multer({storage: storage});
//Ruta de Maestros, se publican los recursos que se nececitan
router.get("/maestros", MaestroControler.getAll);
router.get("/estudiantes", EstudianteControler.ObtenerEstudiantes);
router.get("/maestros/:identificacion", MaestroControler.getByidentificador);
router.get("/estudiantes/:codigoestud", EstudianteControler.obtenerporCodigo);
/*router.get("/maestros/:identificacion", (req, res)=>{
    //traer todos los datos de quien hizo la peticion
    const code= req.params.idenfiticacion;
    const mensaje={identificador:6789, nombre: "Marcela Patricia", apellidos:"Pareja Rendón",datos:["Tecnología e informática","undécimo"]};
    res.status(200).json(mensaje);
});*/
//grabar un nuevo producto POST
router.post("/estudiantes", EstudianteControler.crearEstudiante);
router.post("/maestros", upload.single("image"),MaestroControler.create);
router.put("/maestros/:identificacion", MaestroControler.update);
router.put("/estudiantes/:codigoestud", EstudianteControler.actualizarEstudiante);
router.delete("/maestros/:identificacion", MaestroControler.delete);
router.delete("/estudiantes/:codigoestud", EstudianteControler.eliminarEstudiante);
router.patch("/maestros/:identificacion/image", upload.single("image"), MaestroControler.changeMaestroImage);
//Rutas de usuario
router.post("/usuarios", usuariosController.insert);
router.post("/autenticar", usuariosController.validarUsuario);

module.exports = router;