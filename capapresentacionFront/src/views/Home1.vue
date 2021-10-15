<template>
  <div :style="fondoDiv">
    <br /> 
     <v-jumbotron
    :gradient="gradient"
    dark
   
  >
    <v-container fill-height>
      <v-layout align-center>
        <v-flex text-xs-center>
          <h3 class="display-3">Gradient over Image</h3>
        </v-flex>
      </v-layout>
    </v-container>
  </v-jumbotron>
    <div class="home">
      <h1>PÁGINA PRINCIPAL</h1>
      <v-list>
        <v-subheader>IMAGENES</v-subheader>
        <v-list-item-group v-model="selectedItem" color="primary">
          <v-list-item v-for="(item, i) in items2" :key="i">
            <v-list-item-icon>
              <v-img max-height="1000" max-width="1000" :src="item.image"></v-img>
            </v-list-item-icon>
            <v-list-item-content>
              
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </div>
    <br /><br />
    <div id="construccion">
    
    <v-card
    class="mx-auto"
    color="#26c6da"
    dark
    max-width="800"
    elevation = 30
  >
    <v-card-title>
      <v-icon
        large
        left
      >
        mdi-twitter
      </v-icon>
      <span class="text-h6 font-weight-light">Imaginación</span>
    </v-card-title>
{{item}}
    <v-card-text class="text-h5 font-weight-bold">
      La educación se ha transformado en ese espacio que utilizamos las personas para formar nuestra personalidad de tal manera que podamos vivir acorde a nuestros gustos y preferencias con la dignidad que poseemos.
    </v-card-text>

    <v-card-actions>
      <v-list-item class="grow">
        <v-list-item-avatar color="grey darken-3">
          <v-img
            class="elevation-6"
            alt=""
            src=""
          ></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title></v-list-item-title>
        </v-list-item-content>

        <v-row
          align="center"
          justify="end"
        >
          <v-icon class="mr-1">
            mdi-heart
          </v-icon>
          <span class="subheading mr-2">256</span>
          <span class="mr-1">·</span>
          <v-icon class="mr-1">
            mdi-share-variant
          </v-icon>
          <span class="subheading">45</span>
        </v-row>
      </v-list-item>
    </v-card-actions>
  </v-card>
    </div>
    <br />
  </div>
</template>

<script scope>
export default {
  /*name: 'Home',*/

  components: {},
  data: () => ({
      gradient: 'to top right, rgba(63,81,181, .7), rgba(25,32,72, .7)',
    fondoDiv:{
backgronundImage: 'url('+ require('../assets/deberes/deberes1.png') + ')',
backgronundRepeat: 'no-repeat',
backgronundSize: '100% 100%',
    },
    valid: true,
    name: "",
    nameRules: [
      (v) => !!v || "Debe digitar su usuario",
      (v) =>
        (v && v.length <= 10) || "El usuario debe tener más de 10 caracteres",
    ],
    clave: "",
    emailRules: [
      (v) => !!v || "Correo requerido",
      (v) => /.+@.+\..+/.test(v) || "Ingrese un correo válido",
    ],
    select: null,
    items: ["Número celular", "Número fijo", "Item 3", "Item 4"],
    checkbox: false,
    selectedItem: 1,
    items2: [
      { name: "Casa", image: "../" },
      { name: "Cama", image: require("../assets/deberes/homepage.png") },
      { name: "Comedor", image: "../assets/deberes/deberes2.jpg" },
      { name: "Dato 4", image: "../assets/deberes/deberes3.jpg" },
      { name: "Dato 5", image: "../assets/deberes/deberes4.jpg" },
      { name: "Dato 6", image: "../assets/deberes/deberes5.jpg" },
    ],
  }),

  methods: {
    validate() {
      this.$refs.form.validate();
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    },
  },
};
</script>
<style>
#construccion{
  background: urlrequire("../assets/deberes/homepage.png");
  width:100%;
  height:100%;
  position:fixed;
  background-size: 100% 100%;
}
.home{
  color: aqua;
  background-color:black;
}
</style>