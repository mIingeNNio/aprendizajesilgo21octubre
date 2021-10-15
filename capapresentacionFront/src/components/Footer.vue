<template>
  <div>
    <!--Informacion acerca de la institucion-->
    <v-footer padless>
      <v-col class="text-center" cols="12">
        {{ new Date().getFullYear() }} — <strong>Aprendizaje Siglo XXI</strong>
      </v-col>
    </v-footer>
    <div class="footer-copyright">
      <p>© 2021 MisiónTic UTP</p>
    </div>
  </div>
</template>
<script>
export default {
  name: "footereducacion",
  data: () => ({
    icons: ["mdi-facebook", "mdi-twitter", "mdi-linkedin", "mdi-instagram"],
  }),
};
</script>

<style>
</style>