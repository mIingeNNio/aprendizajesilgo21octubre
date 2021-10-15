const estudianteModel = require("../models/estudiantesmodelo");

module.exports = class EstudianteAPI {
    static async ObtenerEstudiantes(req, res) {
        try {
            const estudiantes = await estudianteModel.find();
            res.status(200).json(estudiantes);
        } catch (error) {
            res.staus(404).json({ message: error.message });
        }
    }
    static async obtenerporCodigo(req, res) {
        try {
            const codigoestud = req.params.codigoestud;
            const estudiante = await estudianteModel.findOne({ "codigoestudiante": codigoestud });
            if (estudiante == null) {
                res.status(404).json({ message: "No encontrado" });
            } else {
                res.status(200).json(estudiante);
            }
        } catch (error) {
            res.staus(404).json({ message: error.message });
        }
    }
    static async crearEstudiante(req, res) {
        try {
          /*  const imagename = req.file.filename;// TODO pendiente cambiar nombre imagen por URL donde encontrarla*/

            let estudiante = req.body;
            /*maestro.image = imagename*/
            estudiante = await estudianteModel.create(estudiante);
            res.status(201).json(estudiante);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }
    static async actualizarEstudiante(req, res) {
        try {
            const codigoestud = req.params.codigoestud;
            const estudiante = req.body;
            await estudianteModel.updateOne({ codigoestud: codigoestud }, estudiante);
             res.status(200).json()
        } catch (error) {
            res.status(400).json({ message: error.message })
       }
    }
    static async eliminarEstudiante(req, res) {
        try {
            const codigoestud = req.params.codigoestud;
            await estudianteModel.deleteOne({ codigoestud: codigoestud });//deleteone para que borre el primero deleteMany para borralos todos

            res.status(200).json();
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }
    static async changeEstudinteImage(req, res) {
        try {
            const idenfiticar = req.params.codigoestud;
            const imagename = req.file.filename;
            await estudianteModel.updateOne({ "identificacion": codigoestud }, { "imageUrl": "/" + imagename });
        } catch (err) {
            res.status(400).json({ message:err.message });
        }
    }
}
