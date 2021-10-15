//crear las funciones que se necesitan para conectarse al servidor del puerto 5000
import httpClient from "./httpClient";

const END_POINT = "/api/estudiantes";
const ObtenerEstudiantes = () => httpClient.get(END_POINT);
const obtenerporCodigo = (codigoestud) => httpClient.get(END_POINT+"/"+codigoestud);
const crearEstudiante = (estudiante) => httpClient.post(END_POINT, estudiante);
const crearEstudianteConImagen = (estudiante) => httpClient.post(END_POINT, estudiante, {
    headers: {
        "Content-Type": "multipart/form-data"
    }
});
const actualizarEstudiante = (codigoestud, estudiante) => httpClient.put(END_POINT+"/"+codigoestud, estudiante);
const eliminarEstudiante = (codigoestud) =>  httpClient.delete(END_POINT+"/"+codigoestud);

export{
    ObtenerEstudiantes,
    obtenerporCodigo,
    crearEstudiante,
    crearEstudianteConImagen,
    actualizarEstudiante,
    eliminarEstudiante
}