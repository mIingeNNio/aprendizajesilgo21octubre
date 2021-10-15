const mongoose = require("mongoose");
const estudianteSchema = mongoose.Schema({
    imageUrl: String,
    codigoestud: Number,
    apellidosestud: String,
    nombrestud: String,
    fechanacimiento: String,
    edad: Number,
    estatura: Number,
    grado: Number,
    masa: Number,
    diagnosticado: String,
    diagnostico: String,
    descripcion: String,
   /* materias: Array,
    planillanotas:
    {
        100: Array,
        101: Array,
        102: Array,
        103: Array,
        104: Array,
        105: Array,
        106: Array,
        107: Array,
        108: Array,
        109: Array,
        110: Array,
        111: Array,
        112: Array,
        113: Array,
        114: Array,
    }*/
});

module.exports = mongoose.model("Estudiante", estudianteSchema);