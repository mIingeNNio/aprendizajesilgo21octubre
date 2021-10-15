<template>
  <div class="about">
  <center>  <h1>EN LA INSTITUCIÓN EDUCATIVA...</h1>
  <br><v-container>
      <v-row>
        <v-col
          v-for="estudiante in estudiantes"
          :key="estudiante.codigoestud"
          md="4"
          sm="6"
          cols="12"
        >
          <Estudiantelistado2 :estudianteacudientecomponent="estudiante"></Estudiantelistado2>
          
        </v-col>
      </v-row></v-container>
 
<h1>AGRADECEMOS SU VISITA<br>
ESPERAMOS CONTAR CON SU PRESENCIA MUY PRONTO<br>
DISFRUTE SU DÍA Y SUS LABORES<br>
</h1></center>
<br><br>
  </div>
</template>
<script>
import Estudiantelistado2 from "../components/EstudianteAcudiente.vue"
export default {
  components: {
    Estudiantelistado2
  },
data(){
  return {
      usuario:"",
      clave:"",
  }
},
methods:{
  
}
}
</script>

