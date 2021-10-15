<template>
  <div>
    
      <h1>ACTIVIDADES DE VALIDACIÓN:<br></h1>
        <br><h2>ACTIVIDAD #1</h2>
        <br><h2>ACTIVIDAD #2</h2>
        <br><h2>ACTIVIDAD #3</h2>
        <br><h2>ACTIVIDAD #4</h2>
        <br><h2>ACTIVIDAD #5</h2>
        <br>
        <br><br>
        <div class="botones" elevation="20">
                  <v-btn  to="/Evaluacion"
                  >
                    VALORACIÓN
                    <v-icon right dark> mdi-content-save </v-icon>
                  </v-btn>
                </div>
  </div>
                
</template>

<style>
 .botones{
        float: right;
    
    }
    .v-btn{
      margin: 2em;
      padding: 2em;
    }
</style>
<script>
export default {
  name: 'validar',
 methods:{

  }
}
</script>