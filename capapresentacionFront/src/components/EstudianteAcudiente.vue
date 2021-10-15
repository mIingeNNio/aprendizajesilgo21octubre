<template>
  <center><div class="estudiantes" >
            
    <h1><center>PADRES DE FAMILIA Y ESTUDIANTES</center></h1>
    <br />
    <center>
      <v-card width="300px" height="150px">
        <v-text-field
          text:num
          label="Ingrese el número de identificación de su hijo:"
          prepend-icon="mdi-smart-card"
          v-model="idestudiante"
        /> 
        <v-snackbar v-model="snackbar">
          {{ snackbarText }}

          <template v-slot:action="{ attrs }">
            <v-btn color="pink" text v-bind="attrs" @click="volverMaestro()">
              Close
            </v-btn>
          </template>
        </v-snackbar>
        <!--v-btn :to="`/estudiantes/` + estudiantecomponent.codigoestud"--><v-btn @click="buscar()">Buscar</v-btn>
        <v-space></v-space><br>
      </v-card>
    </center>
        
    <br /><br /><br /><br />
    <v-card width="800">
      <v-row justify="center">
        <v-btn color="primary" class="ma-2" dark @click="dialog = true">
          INFORME ACADEMICO
        </v-btn>
        <v-btn color="primary" class="ma-2" dark @click="dialog2 = true">
          RENDIMIENTO
        </v-btn>
        <v-btn color="primary" class="ma-2" dark @click="dialog3 = true">
          ASISTENCIA
        </v-btn>
        <v-menu bottom offset-y >
          <template v-slot:activator="{ on, attrs }">
            <v-btn class="ma-2" v-bind="attrs" v-on="on"> MATERIAS </v-btn>
          </template>
          <v-list>
            <v-list-item v-for="(item, i) in items" :key="i" @click="() => {}">
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
        <v-dialog
          v-model="dialog5"
          fullscreen
          hide-overlay
          transition="dialog-bottom-transition"
          scrollable
        >
          <v-card tile>
            <v-toolbar flat dark color="primary">
              <v-btn icon dark @click="dialog5 = false">
                <v-icon>Mis clases</v-icon>
              </v-btn>
              <v-toolbar-title>Configuración</v-toolbar-title>
              <v-spacer></v-spacer>
              <v-toolbar-items>
                <v-btn dark text @click="dialog5 = false"> Save </v-btn>
              </v-toolbar-items>
              <v-menu bottom right offset-y>
                <template v-slot:activator="{ on, attrs }">
                  <v-btn dark icon v-bind="attrs" v-on="on">
                    <v-icon>Áreas trabajadas durante el período</v-icon>
                  </v-btn>
                </template>
                <v-list>
                  <v-list-item
                    v-for="(item, i) in items"
                    :key="i"
                    @click="() => {}"
                  >
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-menu>
            </v-toolbar>
            <v-card-text>
              <v-btn
                color="primary"
                dark
                class="ma-2"
                @click="dialog2 = !dialog2"
              >
                Abrir el cuadro de diálogo
              </v-btn>
              <v-tooltip right>
                <template v-slot:activator="{ on, attrs }">
                  <v-btn class="ma-2" v-bind="attrs" v-on="on">
                    Conocimientos adquiridos
                  </v-btn>
                </template>
                Procesos exitosos
              </v-tooltip>
              <v-list three-line subheader>
                <v-subheader>Autonomía</v-subheader>
                <v-list-item>
                  <v-list-item-content>
                    <v-list-item-title>Trabajo en equipo</v-list-item-title>
                    <v-list-item-subtitle
                      >Recomendaciones: los trabajos en equipo deben ser
                      distribuidos para cada actividad con estudiantes
                      diferentes, de tal forma que el extudiante viva la
                      experiencia de compartir con diferentes
                      compañeros.</v-list-item-subtitle
                    >
                  </v-list-item-content>
                </v-list-item>
                <v-list-item>
                  <v-list-item-content>
                    <v-list-item-title>Contraseña</v-list-item-title>
                    <v-list-item-subtitle
                      >Requiere contraseña....</v-list-item-subtitle
                    >
                  </v-list-item-content>
                </v-list-item>
              </v-list>
              <v-divider></v-divider>
              <v-list three-line subheader>
                <v-subheader>General</v-subheader>
                <v-list-item>
                  <v-list-item-action>
                    <v-checkbox v-model="notifications"></v-checkbox>
                  </v-list-item-action>
                  <v-list-item-content>
                    <v-list-item-title>Indicaciones</v-list-item-title>
                    <v-list-item-subtitle
                      >Cambios apropiados para el
                      estudiante</v-list-item-subtitle
                    >
                  </v-list-item-content>
                </v-list-item>
                <v-list-item>
                  <v-list-item-action>
                    <v-checkbox v-model="sound"></v-checkbox>
                  </v-list-item-action>
                  <v-list-item-content>
                    <v-list-item-title>Expresiones</v-list-item-title>
                    <v-list-item-subtitle
                      >Vivencias del estudiante en su cotidiano vivir que le
                      pueden ayudar a mejorar.</v-list-item-subtitle
                    >
                  </v-list-item-content>
                </v-list-item>
                <v-list-item>
                  <v-list-item-action>
                    <v-checkbox v-model="widgets"></v-checkbox>
                  </v-list-item-action>
                  <v-list-item-content>
                    <v-list-item-title>Control emociones</v-list-item-title>
                    <v-list-item-subtitle
                      >Procesos que permiten la autonomía en el
                      estudiante</v-list-item-subtitle
                    >
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </v-card-text>

            <div style="flex: 1 1 auto"></div>
          </v-card>
        </v-dialog>

        <v-dialog v-model="dialog2" max-width="500px">
          <v-card width="800px">
            <v-card-title> Artística </v-card-title>
            <v-card-text>
              <v-btn color="primary" dark @click="dialog3 = !dialog3">
                Ciencias Sociales
              </v-btn>
              <v-select
                :items="select"
                label="Elegir de la lista"
                item-value="text"
              ></v-select>
            </v-card-text>
            <v-card-actions>
              <v-btn color="primary" text @click="dialog2 = false">
                Cerrar
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
        <v-dialog v-model="dialog3" max-width="500px">
          <v-card>
            <v-card-title>
              <span>Dialog 3</span>
              <v-spacer></v-spacer>
              <v-menu bottom left>
                <template v-slot:activator="{ on, attrs }">
                  <v-btn icon v-bind="attrs" v-on="on">
                    <v-icon>mdi-dots-vertical</v-icon>
                  </v-btn>
                </template>
                <v-list>
                  <v-list-item
                    v-for="(item, i) in items2"
                    :key="i"
                    @click="() => {}"
                  >
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-menu>
            </v-card-title>
            <v-card-actions>
              <v-btn color="primary" text @click="dialog3 = false">
                Cerrar
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-row>
    </v-card>
    <v-breadcrumbs >
      <v-card width="800px">
        <v-responsive :aspect-ratio="16 / 9">
          <v-card-text>
            <br />

            <v-card class="mx-auto" width="560" tile>
              <v-navigation-drawer permanent>
                <v-system-bar></v-system-bar>
                <v-list>
                  <v-list-item>
                    <v-text></v-text>
                    {{ estudianteacudientecomponent.codigoestud}}
                    <v-list-item-avatar>
                      <v-img
                        src=""
                      ></v-img>
                    </v-list-item-avatar>
                  </v-list-item>
                  {{ estudianteacudientecomponent.nombrestud}}  {{estudianteacudientecomponent.apellidosestud}}
                  <v-list-item link>
                    <v-list-item-content>
                      <v-list-item-title class="text-h6">
                        <v-container> </v-container>
                      </v-list-item-title>
                      <v-list-item-subtitle
                        ><estudianteacudientecomponent class="e">{{estudianteacudientecomponent.apellidosestud}}</estudianteacudientecomponent></v-list-item-subtitle
                      >
                    </v-list-item-content>

                    <v-list-item-action>
                      <v-icon>mdi-menu-down</v-icon>
                    </v-list-item-action>
                  </v-list-item>
                </v-list>
                <v-divider></v-divider>
                <v-list nav dense>
                  <v-list-item-group v-model="selectedItem" color="primary">
                    <v-list-item v-for="(item, i) in items" :key="i">
                      <v-list-item-icon>
                        <v-icon v-text="item.icon"></v-icon>
                      </v-list-item-icon>

                      <v-list-item-content>
                        <v-list-item-title
                          v-text="item.text"
                        ></v-list-item-title>
                      </v-list-item-content>
                    </v-list-item>
                  </v-list-item-group>
                </v-list>
              </v-navigation-drawer>
            </v-card>
          </v-card-text>
        </v-responsive> </v-card></v-breadcrumbs
    ><br /><br /><br />
  </div></center>
</template>
<script>
import { eliminarEstudiante,obtenerporCodigo, ObtenerEstudiantes } from "../controllers/Estudiante.controller";
/*import {
  crearMaestroConImagen,
} from "../../controllers/Maestro.controller";*/
export default {
  props: ["estudianteacudientecomponent"], //las propiedades son los atributos que bienen de un componente padre
  data: () => ({
      snackbar: false,
      snackbarText: "",
      dialog5: false,
      idestudiante:0,
    apellidos: "",
    nombre: "",
    fechanacimiento: "",
    edad: 0,
    estatura: 0,
    grado: 0,
    masa: 0,
    diagnosticado: "",
    diagnostico: "",
    descripcion: "",
    estudiantes: [],
    selectedItem: 0,
    items: [
      { text: "Actividades", icon: "mdi-folder",  },
      { text: "Cualidades", icon: "mdi-account-multiple" ,},
      { text: "Adquisiciones", icon: "mdi-star" },
      { text: "Pendientes", icon: "mdi-history" },
      { text: "Desconectado", icon: "mdi-check-circle" },
      { text: "Documentos", icon: "mdi-upload" },
      { text: "Almacenados", icon: "mdi-cloud-upload" },
    ],
    items2: [
      {
        title: "MATEMATICAS",
      },
      {
        title: "CASTELLANA",
      },
      {
        title: "EXTRANGERA",
      },
      {
        title: "TECNOLOGÍA",
      },
    ],

    dialog: false,
    dialog2: false,
    dialog3: false,
    notifications: false,
    sound: true,
    widgets: false,

    select: [
      { text: "Matemàticas" },
      { text: "Lengua Castella" },
      { text: "Tecnología" },
      { text: "Ciencias sociales" },
      { text: "Artística" },
      { text: "Educaciòn Física" },
      { text: "Ciencias Naturales" },
    ],
   }),
   created() {
    let codigoestudiante = this.$route.params.identificacion;
    console.log("estoy creando... no molestar")
    console.log("codigo en created:", codigoestudiante)
    if (codigoestudiante != undefined) {
      
      obtenerporCodigo(codigoestudiante)
        .then((response) => {
          const estudiante = response.data;
          (this.idestudiante = estudiante.codigoestud);
          (this.apellidos = estudiante.apellidosestud),
            (this.nombre = estudiante.nombrestud),
            (this.fechanacimiento = estudiante.fechanacimiento),
            (this.edad = estudiante.edad),
            (this.estatura = estudiante.estatura),
            (this.masa = estudiante.masa),
            (this.grado = estudiante.grado),
            (this.diagnosticado = estudiante.diagnosticado),
            (this.diagnostico = estudiante.diagnostico),
            (this.descripcion = estudiante.descripcion),
            (this.nuevoestud = false),
            console.log("estudiante", this.apellidos) //cuando cargue el elemnto quiero ver que tiene el item
        })
        .catch((err) => console.error(err));
          console.log("código vacío")
    }
  },
  mounted() {
      console.log("estudiante codigo", this.estudianteacudientecomponent.codigoestudiante); //cuando cargue el elemnto quiero ver que tiene el item
 
    
    console.log("estudianteacudientecomponent", this.estudianteacudientecomponent); //cuando cargue el elemnto quiero ver que tiene el item
    ObtenerEstudiantes()
      .then((response) => {
        this.maestros = response.data;
      })
      .catch((err) => console.error(err));
  
  },      
  methods:{
      /*buscar() {
        const estudiantebuscar = this.idestudiante
      obtenerporCodigo(estudiantebuscar)
        .then(() => {
            console.log("estudiante", estudiantebuscar)
            console.log("estudiante", this.apellidos)
          this.snackbarText = "Estudiante obtenido correctamente";
          this.snackbar = true;
        })
        .catch((err) => console.error(err.response.data.message));
    },*/
     buscar() {
      if (
        this.idestudiante == undefined ||
        this.idestudiante == " " ||
        this.nombre == undefined ||
        this.nombre == "" ||
        this.apellidos == undefined ||
        this.apellidos == "" ||
        this.fechanacimiento == undefined ||
        this.fechanacimiento== "" ||
        this.descripcion == undefined ||
        this.descripcion == ""
      ) {
        console.log("Diligencie todos los datos porque son obligatorios");
      }
      const estud = {
        idestudiante: this.codigoestud,
        nombre: this.nombrestud,
        apellidos: this.apellidosestud,
        fechanacimiento: this.fechanacimiento,
        descripcion: this.descripcion,
      };
      obtenerporCodigo(this.idestudiante, estud)
        .then(() => {
          this.snackbarText = "Estudiante obtenido correctamente";
          this.snackbar = true;
        })
        .catch((err) => console.error(err.response.data.message));
    },
    volverEstudiante() {
      (this.snackbar = false), this.$router.push("/EstudiantesList");
    },
    editar() {
      console.log(`Editar ${this.estudianteacudientecomponent.codigoestud}`);
      this.$router.push(`/estudiantes/${this.estudianteacudientecomponent.codigoestud}`);
    },
    eliminar() {
      eliminarEstudiante(this.estudianteacudientecomponent.codigoestud)
        .then(() => {
          this.snackbarText = "Estudiante eliminado correctamente";
          this.snackbar = true;
          window.location.reload();
        })
        .catch((err) => console.error(err.response.data.message));
    },
  },
  computed: {
    /*imageUrl: "",*/
  },
};
</script>

<style scope>
.estudiantes {
  margin: 4px;
  content-visibility: initial;
}
.mensaje {
  width: 500px;
}
.categories {
  display: flex;
  padding: 10px;
  justify-content: center !important;
}
</style>