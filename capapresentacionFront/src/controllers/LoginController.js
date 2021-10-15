//crear las funciones que se necesitan para conectarse al servidor del puerto 5000
import httpClient from "./httpClient";

const END_POINT = "api/autenticar";
const autenticarUsuario = (usuario, clave) => {
    const user = {
        "usuario": usuario,
        "clave": clave

    };
    return httpClient.post(END_POINT, user);

};
export {
    autenticarUsuario
}