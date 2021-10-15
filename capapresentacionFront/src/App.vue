<template>
<div>
<v-app id="inspire">
  <v-navigation-drawer v-model="drawer" app>
     <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6">
            {{title}}
           
          </v-list-item-title>
          <v-list-item-subtitle>
             {{username }}
             
          </v-list-item-subtitle>{{role}}
        </v-list-item-content>
      </v-list-item>
          <Menubarraizquierda />
    </v-navigation-drawer>
    <br><br><br>
<v-app-bar>
</v-app-bar>
      <v-divider></v-divider>
<!--template v-slot:img="{ props }">
      <v-img v-bind="props" gradient="to top right, rgba(100,115,201,.7), rgba(25,32,72,.7)"></v-img>
    </template>
  <Menu/>
   <template >
      <v-img v-bind="props" gradient="to top right, rgba(100,115,201,.7), rgba(25,32,72,.7)"></v-img>
    </template-->

  <v-app-bar
  
      color="white" app
>
      <v-app-bar-nav-icon @click="drawer= !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>{{title}}</v-toolbar-title><br>
           
      <v-spacer></v-spacer>
      <Account-buttons @open-login="showLogin =true"></Account-buttons>
     
    </v-app-bar>
<!--v-menu bottom left>
  <v-dialog v-model="showLogin" max-width="500px">
  </v-dialog>
  </v-menu>
  <Sizes your content based upon application components -->
  <v-main>
  <v-container fluid>
       <v-dialog v-model="showLogin" persistent max-width="500">
                <Login @login-success="paginaInicio =false"></Login>
        </v-dialog>
        </v-container>

      <router-view></router-view>
    <Footereducacion />
  </v-main>

</v-app>
<br><br><br>
  
  </div>
</template>

<script>
import AccountButtons from './components/AccountButtons.vue';
import Login from './components/Login.vue';
import Menubarraizquierda from './components/Menubarraizquierda.vue';
import Footereducacion from './components/Footer.vue';
/*import Menu from "./components/Menu.vue"*/
export default {
  name: "App",
  role:"",
 components:{
   /*Menu,Cabecera*/
 Footereducacion,
  AccountButtons,
  Login,
  Menubarraizquierda
  
 },
  data: () => ({ 
    title:"Aprendizaje Siglo XXI",
  showLogin:false,
  paginaInicio: false,
  drawer:true,
  }),
  computed:{
    username: () => sessionStorage.getItem("usuario"),
      role: ()=>sessionStorage.getItem("rol"),
    },
}
</script>
