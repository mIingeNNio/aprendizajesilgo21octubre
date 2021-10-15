module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  devServer:{
    proxy: "http://localhost:5000",//todas las peticiones que se hagan al servidor de dello las busca a qui todo lo que es /api
  }
}
