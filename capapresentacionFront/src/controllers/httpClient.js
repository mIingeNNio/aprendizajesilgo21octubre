import axios from "axios";

const httpClient = axios.create({
    timeout:3000,
    headers:{
        "Content-Type": "application/json"
       /* createMaestrowhitimage: "application/json"*/
    }
});
export default httpClient;//forma de exportar en java nuevo, modelo viejo lo temodule.exports=router son equvalentes
//si va a exportar un objeto
