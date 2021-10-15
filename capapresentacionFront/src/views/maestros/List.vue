<template>
  <div class="maestros">
    <h1><center>SALA DE PROFESORES</center></h1>
    <v-btn color="primary" to="maestros/new" v-if="!nuevoadmin">NUEVO MAESTRO</v-btn>
    <v-container>
      <v-row>
        <v-col
          v-for="maestro in maestros"
          :key="maestro.identificacion"
          md="12"
          sm="8"
          cols="12"
        >
          <MaestrosLIsta :maestrocomponent="maestro"></MaestrosLIsta>
        </v-col>
      </v-row>
    </v-container>

    <br /><br /><br />
    <v-card id="misbotones" height="120">
      <v-bottom-navigation  class="botonesnavegacion" height="100">
        <v-btn class="bmath" value="math" elevation="13" height="60" width= "150" fixed fab to="/MathsLogic">
          <span> MATEOLOGÍA </span>

          <v-icon>mdi-sigma</v-icon>
        </v-btn>

        <v-btn value="tech" elevation="9" height="60" width= "150">
          <span>TECNOLOGÍA</span>

          <v-icon>mdi-tape-drive</v-icon>
        </v-btn>

        <v-btn value="cn" elevation="6" height="60" width= "150">
          <span>CIENCIAS NATURALES</span>

          <v-icon>mdi-telescope</v-icon>
        </v-btn>
        <v-btn value="cs" elevation="6" height="60" width= "150">
          <span>CIENCIAS SOCIALES</span>

          <v-icon>mdi-telescope</v-icon>
        </v-btn>
      </v-bottom-navigation>
    </v-card>
    <br /><br /><br />
  </div>
</template>

<script>
import { getAllMaestros } from "../../controllers/Maestro.controller";
import MaestrosLIsta from "../../components/MaestrosLIsta.vue";

export default {
  props:["nuevo"],
  components: {
    MaestrosLIsta,
  },

  //CREAR UNA LISTA CON OBJETOS Y LOS OBJETOS TIENEN ELEMENTOS COMO: IDENTIDIFACION, NOMBRE
  data() {
    return {
      maestros: [],
      
    };
  },
  mounted() {
    getAllMaestros()
      .then((response) => {
        this.maestros = response.data;
      })
      .catch((err) => console.error(err));
  },
created(){

}
};

</script>

<style>
.tarjetas {
  height: 160px;
}

</style>