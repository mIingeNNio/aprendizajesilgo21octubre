const maestrosmodel = require("../models/maestrosmodel");
const maestroModel = require("../models/maestrosmodel");

module.exports = class MaestroAPI {
    static async getAll(req, res) {
        try {
            const maestros = await maestroModel.find();
            res.status(200).json(maestros);
        } catch (error) {
            res.staus(404).json({ message: error.message });
        }
    }
    static async getByidentificador(req, res) {
        try {
            const identificacion = req.params.identificacion;
            const maestro = await maestroModel.findOne({ "identificacion": identificacion });
            if (maestro == null) {
                res.status(404).json({ message: "No encontrado en la base de datos" });
            } else {
                res.status(200).json(maestro);
            }
        } catch (error) {
            res.staus(404).json({ message: error.message });
        }
    }
    static async create(req, res) {
        try {
            // const imagename = req.file.filename;// TODO pendiente cambiar nombre imagen por URL donde encontrarla*/
            console.log("file", req.file);
            console.log("body", req.body);
            let maestro = req.body;
            if (req.file != undefined) {
                const imagename = req.file.filename;
                maestro.imageUrl = "/" + imagename;
            }
            if (maestro.identificacion == undefined) {
                res.status(400).json({ message: "El maestro no puede ser guardado sin identificación" })
            } else {
                if(typeof maestro.grados === 'string'){
                    maestro.grados = JSON.parse(maestro.grados);
                }
                if(typeof maestro.materias === 'string'){
                    maestro.materias = JSON.parse(maestro.materias);
                }
                maestro = await maestroModel.create(maestro);
                res.status(201).json(maestro);
            }
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }
    static async update(req, res) {
        try {
            const identificacion = req.params.identificacion;
            const maestro = req.body;
            await maestroModel.updateOne({ identificacion: identificacion }, maestro);
            res.status(200).json()
        } catch (error) {
            res.status(400).json({ message: error.message })
        }
    }
    static async delete(req, res) {
        try {
            const identificacion = req.params.identificacion;
            await maestroModel.deleteOne({ identificacion: identificacion });//deleteone para que borre el primero deleteMany para borralos todos

            res.status(200).json()
        } catch (error) {
            res.status(400).json({ message: error.message })
        }
    }
    static async changeMaestroImage(req, res) {
        try {
            const idenfiticar = req.params.idenfiticacion;
            const imagename = req.file.filename;
            await maestroModel.updateOne({ "identificacion": idenfiticar }, { "imageUrl": "/" + imagename });
        } catch (err) {
            res.status(400).json({ message:err.message });
        }
    }
}