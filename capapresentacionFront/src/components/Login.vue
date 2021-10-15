<template>
  <div>
    <v-card width="500" class="mx-auto mt-7">
      <v-card-title>Iniciar sesión</v-card-title>
      <v-card-text>
        <v-form>
          <v-text-field
            label="Usuario"
            prepend-icon="mdi-account-circle"
            v-model="usuario"
            :rules="rules"
          ></v-text-field>
          <v-text-field
            v-model="clave"
            label="Contraseña"
            prepend-icon="mdi-lock"
            hide-details="auto"
            type="password"
          ></v-text-field>
        </v-form>
      </v-card-text>
      <v-divider></v-divider>

      <v-btn class="ingresar" color="secondary" v-on:click="login()"
        >Ingresar</v-btn
      >
      <v-alert border="left" color="red lighten-2" dark v-model="showError">
        {{ error }}
      </v-alert>
    </v-card>
  </div>
</template>

<script>
import { autenticarUsuario } from "../controllers/LoginController";
export default {
  data() {
    return {
      /*showPaswword: false,*/
      usuario: "",
      clave: "",
      showError: false,
      error: "",
   rules: [
        value => !!value || 'Required.',
        value => (value || '').length <= 50 || 'Max 50 characters',
        value => {
          const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          return pattern.test(value) || 'Invalid e-mail.'
        },
      ],
    };
  },
  methods: {
    login() {
      console.log("estoy en login");
      autenticarUsuario(this.usuario, this.clave)
        .then((response) => {
          console.log("estoy en respuesta");
          //Tomar e-mail y contraseña para verificar si es válido
          const user = response.data;
          sessionStorage.setItem("usuario", user.usuario);
          sessionStorage.setItem("rol", user.rol);
          this.$emit("login-success", undefined);
          console.log("login", this.usuario);
          this.$router.push("/");
          window.location.reload();
        })
        .catch((err) => {
          console.log("error:", err.response);
          this.showError = true;
          this.error = err.response.data.message;
        });
    },
  },
};
/*sessionStorage.setItem("username", this.username);
             console.log("login", this.username);
              if(this.username=="marcela@medellin.com"){
                  sessionStorage.setItem("role", "admin");
              }else{
                sessionStorage.setItem("role", "user");
              }
              this.$emit("login-success", this.username);
              window.location.reload();*/
</script>

<style>
.ingresar {
  margin: "15px";
}
</style>