require('dotenv').config();

//import express from "express"; // cuando hago esto es porque en express hay una variatle express
//configuración del servidor web
//primero ua variable, requiere forma antigua de cargar variables

const express = require('express');// toda la biblioteca queda montada en la variable express
const cors = require('cors');//sirve para habilitar la conexion desde cualquier fuente. significa que en internet hay un error llamado Cross Site Origin, este error lo que hace es que yo solo publico mis servicios para que sean ejecutados dentro del mismo servidor. sit tengo una web en vue y ue esta corriendo por el pueroo 8080 pero el baken va a escuchar por un puerto diferente, habra un error porque otra aplicacion quiere acceder,  para poder ejecutar comandos con cors
const app = express();//

app.use(cors()); //configuraciones adicionales. deshabilita el error Cross Site Origin, habilidar que desde cualqier puerto puedan ingresar y usar mi aplicación
app.use(express.json());//quiero que toda comunicación a mi aplicación sea a travez de json, todos los datos los reciba como json
app.use(express.urlencoded({extended: true}))//permite modificar algunos elementos, o puede utilizar la linea de direcciones de url para enviar datos, direcciones 
//capeta de archivos
app.use(express.static("./uploads"));
//conexion a mogo DB
const mongoose = require("mongoose");
mongoose.connect(process.env.DB_URI)
.then(() => console.log("Conectado a la base de datos"))
.catch((err) => console.log(err))
//definir rutas
app.use("/api", require("./routes/routes"));

//Configuración en producción
if(process.env.NODE_ENV === "production"){
    app.use(express.static(__dirname+"/site"));
    app.use("*", (req, res)=>{
        res.sendFile(__dirname+"/site/index.html");
    })
}
//iniciar servidor 
const port = process.env.PORT;
app.listen(port, ()=> console.log(`Servidor corriendo en http://localhost:`+port))
//`` cadenas tipo plantilla. template literals, quiere decir que js coje tdo lo que este dentro de ellas y permite hacer el reemplazo de variables dentro de la cadena
