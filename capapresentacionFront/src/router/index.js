import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/Maestroslist',
    name: 'listado maestros',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/maestros/List.vue')
  },
  {
    path: '/EstudiantesList',
    name: 'listado estudiantes',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/estudiantes/Estudiantes.vue')
  },
  {
    path: '/maestros/new',
    name: 'Nuevo maestro',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/maestros/Nuevo.vue')
  },
  {
    path: '/maestros/:identificacion',
    name: 'Editar maestro',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/maestros/Nuevo.vue')
  },
  {
    path: '/Administrador',
    name: 'Administrador',
    component: () => import(/* webpackChunkName: "about" */ '../views/Administrador.vue')
  },
  {
    path: '/Estudiantes',
    name: 'Estudiantes',
    component: () => import(/* webpackChunkName: "about" */ '../views/estudiantes/Estudiantes.vue')
  },
  {
    path: '/Estudiantes/new',
    name: 'Nuevo Estudiante',
    component: () => import(/* webpackChunkName: "about" */ '../views/estudiantes/NuevoEstudiante.vue')
  },
  {
    path: '/Estudiantes/:codigoestud',
    name: 'Editar estudiante',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/estudiantes/NuevoEstudiante.vue')
  },
  {
    path: '/acudiente',
    name: 'Acudientes',
    component: () => import(/* webpackChunkName: "about" */ '../views/Acudiente.vue')
  },
  {
    path: '/MathsLogic',
    name: 'Mateologia',
    component: () => import(/* webpackChunkName: "about" */ '../views/MathsLogic.vue')
  },
  {
    path: '/Maestros/new',
    name: 'mateologia',
    component: () => import(/* webpackChunkName: "about" */ '../views/MathsLogic.vue')
  },
  {
    path: '/estructuracion',
    name: 'Festructuracion',
    component: () => import(/* webpackChunkName: "about" */ '../views/Fasestructuracion.vue')
  },  
  {
    path: '/exploracion',
    name: 'Fexploracion',
    component: () => import(/* webpackChunkName: "about" */ '../views/Fexploracion.vue')
  }, 
  {
    path: '/aplicacion',
    name: 'Faseaplicacion',
    component: () => import(/* webpackChunkName: "about" */ '../views/Faseaplicacion.vue')
  }, 
  {
    path: '/transferencia',
    name: 'Fasetransferencia',
    component: () => import(/* webpackChunkName: "about" */ '../views/Fasetransferencia.vue')
  }, 
  {
    path: '/validacion',
    name: 'Fasevalidacion',
    component: () => import(/* webpackChunkName: "about" */ '../views/Fasevalidacion.vue')
  },{
    path: '/Evaluacion',
    name: 'Evaluar',
    component: () => import(/* webpackChunkName: "about" */ '../views/Evaluacion.vue')
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
