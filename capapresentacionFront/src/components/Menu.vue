<template>
  <div>
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
    data(){
        return {
        items: [
          { title: 'Inicio', icon: 'mdi-home', url: "/", show: true},
          { 
            title: 'Lista Maestros', 
            icon: 'mdi-image', 
            url:"/MaestrosList", 
            show: this.hasRole("admin"), 
            },
          { title: 'About', icon: 'mdi-help-box', url: "/about", show: true},
        ],
        };
    },
    methods:{
      hasRole(role){
        return sessionStorage.getItem("role") == role;
      }
    }
};
</script>

<style>

</style>