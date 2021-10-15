<template>
  <div>

          <v-list-item-title class="text-h6">
            {{ title }}
          </v-list-item-title>
                <v-divider></v-divider>
                <v-list-item-subtitle>
            {{subtitle }}
          </v-list-item-subtitle>




      <!--v-list
        dense
        nav v-if="isAdmin"
      >
        <v-list-item
          v-for="item in adminItems"
          :key="item.title"
          link :to="item.path" 
        >
     
             <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
   
        </v-list-item>
      </v-list>
 <v-list
        dense
        nav 
      >
        <v-list-item
          v-for="item in items"
          :key="item.title"
          link :to="item.path"
        >
             <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
   
        </v-list-item>
      </v-list-->
      <v-list dense nav>
         <div v-for="item in items"  :key="item.title" link :to="item.url">
        <v-list-item link :to="item.url" v-if="item.show">
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
         </div>
      </v-list>

  </div>
</template>

<script>
export default {
    name: "Menubarraizquierda",
    props:["title", "item"],
data () {
      return {
          subtitle: "Le damos la bienvenida a su institución educativa",
        items: [ 
          { title:'Administrador', icon: "mdi-archive-settings", url: "/Administrador", show: this.hasRole("admin"), }, 
          { title: 'Inicio', icon: 'mdi-home', url: "/"},
          { title: 'Estudiantes', icon: 'mdi-book-open-page-variant', url: "/Estudiantes", show: this.hasRole("estudiante"), },
          { title: 'Acudientes', icon: 'mdi-book-open-page-variant-outline', url:"/acudiente", show: this.hasRole("acudiente"), },
          { title: 'Maestros', icon: 'mdi-book-open-page-variant-outline', url:"/Maestroslist", show: this.hasRole("maestro"), },
        ],
      }
},
  
    methods:{
      hasRole(role){
        return sessionStorage.getItem("rol") == role;
      }
    }
};

</script>

<style scope>

</style>