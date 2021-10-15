<template>
    <div> 
        
  <div>
    <v-row>
        <!--v-col
          v-for="estudiante in estudiantes"
          :key="estudiante.codigoestud"
          md="4"
          sm="6"
          cols="12"
       -->
          <Estudianteacudiente :estudianteacudientecomponent="estudiante"></Estudianteacudiente>
          
     
      </v-row>
  </div>
    
</div>
</template>

<script>
import Estudianteacudiente from "../components/EstudianteAcudiente.vue";
import { obtenerporCodigo } from "../controllers/Estudiante.controller";

export default {
  components: {
    Estudianteacudiente,
  },
  data(){
    return{
        image: null,
      iamageUrl: "",
      estudiante: [],
    }
  },
  /*  mounted() {
    ObtenerEstudiantes()
      .then((response) => {
        this.estudiantes = response.data;
      })
      .catch((err) => console.error(err));
  },*/


   created() {
     console.log("crear estudd en acudd")
    const codigoestudiante = this.$route.params.cod;
    if (codigoestudiante != undefined) {
      obtenerporCodigo(codigoestudiante)
        .then((response) => {
          const estud = response.data;
          this.imagen = estud.imagen;
          this.codestudiante = estud.codigoestud,
          this.apellidosestud = estud.apellidosestud,
          this.nombrestud  = estud.nombrestud,
          this.fechanacimiento = estud.fechanacimiento,
          this.edad = estud.edad,
          this.estatura =estud.estatura,
          this.grado = estud.grado,
          this.masa = estud.masa,
          this.diagnosticado = estud.diagnosticado,
          this.diagnostico = estud.diagnostico,
          this.descripcion = estud.descripcion
        })
        .catch((err) => console.error(err));
    }
  },
  };
</script>

<style>
</style>