<template>
  <div class="estudiantes">
    <h1><center>ESTUDIANTES DE LA INSTITUCIÓN EDUCATIVA</center></h1>
    <br /><br />
    <v-btn elevation="13"  fixed fab to="Estudiantes/new"><v-icon>mdi-plus</v-icon>
    </v-btn>
    <v-container>
      <v-row>
        <v-col
          v-for="estudiante in estudiantes"
          :key="estudiante.codigoestud"
          md="4"
          sm="6"
          cols="12"
        >
          <Estudiantelistado :estudiantecomponent="estudiante"></Estudiantelistado>
          
        </v-col>
      </v-row>
    </v-container><br /> <br /><br /> 
  </div>
</template>

<script>
import { ObtenerEstudiantes } from "../../controllers/Estudiante.controller";
import Estudiantelistado from "../../components/EstudiantesLista.vue"
export default {
  components: {
    Estudiantelistado
  },
  data() {
    return {
      estudiantes: [],
    };
  },
  mounted() {
    ObtenerEstudiantes()
      .then((response) => {
        this.estudiantes = response.data;
      })
      .catch((err) => console.error(err));
  },
  /*data() {
    return {
      dicentes: [],
    };
  },
  mounted() {
    /*let estudiantes = localStorage.dicentes;
    if (estudiantes !== undefined && estudiantes !== "") {
      this.dicentes = JSON.parse(estudiantes);
    }
    console.log("estudiantes:", this.dicentes);
  },*/
};
</script>

<style>
</style>