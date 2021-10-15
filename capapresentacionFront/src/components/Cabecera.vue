<template>
<div>
  <br><br><br><br><br>
    <v-toolbar-title>{{title}}</v-toolbar-title>
    <!--v-app-bar-title>Title</v-app-bar-title-->
    <v-spacer></v-spacer>
    <v-btn icon>
      <v-icon>mdi-magnify</v-icon>
    </v-btn>
    
    <v-btn icon>
      <v-icon>mdi-account-circle</v-icon>
    </v-btn>
    <v-btn icon>
      <v-icon>mdi-account</v-icon>
    </v-btn>
    <v-btn icon>
      <v-icon>mdi-exit-to-app</v-icon>
    </v-btn>
    
    <v-menu bottom left>
      <template v-slot:activator="{ on, attrs }">
        <v-btn icon  color="yellow" v-bind="attrs"  v-on="on">
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </template>
      <v-list>
        <v-list-item v-for="(item, i) in items" :key="i">
          <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
       
  </v-menu>

 
  </div>    
</template>

<script>
export default {
    props:["tile", "drawer"],
    data(){
      return {
        title: "¿Qué titulo debe aparecer aquí'",
        items:[
          {title:"Marcela"},
          {title:"Mauricio"}
        ]
      }
    },
    methods: {
      changeDrawer(){
        this.drawer = !this.drawer;
      },
    },
};
</script>

<style>

</style>