<template>
  <div>
     <br><br>
    <h1>FASE DESDE COMPONENTE:</h1>
    <faseA />
  </div>
</template>

<script>
import faseA from '../views/Faseaplicacion.vue';
export default {
  name: 'fases',
  components: {
        faseA
    },  
    
}
</script>

<style>

</style>