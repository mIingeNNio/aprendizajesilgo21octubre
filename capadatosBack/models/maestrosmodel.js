const mongoose = require("mongoose");
const productSchema = mongoose.Schema({
    identificacion: Number,
    nombre: String,
    apellidos: String,
    fechaIngreso: String,
    activo: String,
    grados : Array,
    materias: Array,
    imageUrl: String,
    descripcion: String,
});

module.exports = mongoose.model("Maestro", productSchema);