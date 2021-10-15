//crear las funciones que se necesitan para conectarse al servidor del puerto 5000
import httpClient from "./httpClient";

const END_POINT = "/api/maestros";
const getAllMaestros = () => httpClient.get(END_POINT);
const obtenerMaestro = (identificacion) => httpClient.get(END_POINT + "/" + identificacion);
const crearMaestro = (maestro) => httpClient.post(END_POINT, maestro);
const crearMaestroConImagen = (maestro) => httpClient.post(END_POINT, maestro, {
    headers: {
        "Content-Type": "multipart/form-data"
    }
});
const actualizarMaestro = (identificacion, maestro) => httpClient.put(END_POINT + "/" + identificacion, maestro);
const eliminarMaestro = (identificacion) => httpClient.delete(END_POINT + "/" + identificacion);

export {
    getAllMaestros,
    obtenerMaestro,
    crearMaestro,
    crearMaestroConImagen,
    actualizarMaestro,
    eliminarMaestro

}