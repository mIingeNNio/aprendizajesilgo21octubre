const mongoose = require("mongoose");
const usuarioSchema = mongoose.Schema({
 
"usuario": String,
"nombre": String,
"clave":String,
"rol": String,
});

module.exports = mongoose.model("usuarios", usuarioSchema);