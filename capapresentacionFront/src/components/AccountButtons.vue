<template>
  <div>
      <v-menu
        left
        bottom
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            icon
            v-bind="attrs"
            v-on="on"
          >
            <v-icon>mdi-account</v-icon>
          </v-btn>
                  <!--v-btn icon v-bind="attrs"
            v-on="on">
              <v-icon>mdi-account-circle</v-icon>
            </v-btn>
          <v-btn icon   v-bind="attrs"
            v-on="on">
              <v-icon>mdi-magnify</v-icon>
            </v-btn>
           
            <v-btn icon   v-bind="attrs"
            v-on="on">
              <v-icon>mdi-exit-to-app</v-icon>
            </v-btn-->
        </template>

        <v-list>
          <v-list-item v-if="!isLoggedIn" link  @click="openLogin()">
            <v-list-item-title>Iniciar Sesión</v-list-item-title>
          </v-list-item>
          <v-list-item v-if="isLoggedIn" link>
            <v-list-item-title>Perfil</v-list-item-title>
          </v-list-item>
          <v-list-item v-if="isLoggedIn" link @click="logOut()">
            <v-list-item-title>Cerrar Sesión</v-list-item-title>
          </v-list-item>
        </v-list>

      </v-menu>
  </div>
</template>

<script>
export default {
    component:{
    
    },
    data(){
        return{
          
        };
    },
    methods:{
        openLogin(){
            this.$emit("open-login", null);//this.$emit emitir un evento
        },
        logOut(){
          this.$emit("close-login", null);
            sessionStorage.removeItem("usuario"); 
            sessionStorage.removeItem("rol");
            this.$router.push("/about");
   window.location.reload();
        }
    },
    computed:{
        isLoggedIn(){
            return sessionStorage.getItem("usuario") != undefined;
        }
   },
};
</script>

<style>

</style>