<template>
  <div>
     <h1>{{nuevoestud ? "Nuevo Estudiante" : "Editar Estudiante"}}</h1>

    <v-card class="nuevoestudiante">
      <!--v-img max-height="300" max-width="250" :src="img"></v-img-->
      <div>
        <!--v-text-field v-model="img" :rules="imgRules" label="Url de la imagen">
          <v-icon slot="append" color="red"> mdi-image </v-icon>
          <v-icon slot="prepend" color="green"> mdi-image </v-icon>
        </v-text-field>
        <v-file-input></v-file-input-->
         <v-img v-if="!esnuevo" :src="iamageUrl"></v-img>
      <v-file-input
        v-if="esnuevo"
        accept="image/*"
        label="Imágen"
        v-model="image"
        :rules="imageRules"
      ></v-file-input>
        <v-text-field
          label="Código del Estudiante"
          :rules="codRules"
          hide-details="auto"
          v-model="codigoestud"
        >
           <v-icon slot="prepend" color="green"> mdi-smart-card</v-icon>
        </v-text-field>
        <v-text-field
          label="Nombre del Estudiante"
          :rules="NameRules"
          hide-details="auto"
          v-model="nombrestud"
        >
          <v-icon slot="prepend" color="green"> mdi-head-cog</v-icon>
        </v-text-field>
        <v-text-field
          label="Apellidos"
          :rules="ApellidoRules"
          v-model="apellidosestud"
          hide-details="auto"
        > <v-icon slot="prepend" color="green"> mdi-head-cog</v-icon></v-text-field>
         
  <!--template v-slot:activator="{ on, attrs }">
          <v-text-field
            v-model="fechanacimiento"
            label="Fecha de Nacimiento"
            prepend-icon="mdi-calendar"
            readonly
            v-bind="attrs"
            v-on="on"
          ></v-text-field>
        </template-->
       <v-menu
        ref="menu"
        v-model="menu"
        :close-on-content-click="false"
        transition="scale-transition"
        offset-y
        min-width="auto"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-text-field
            v-model="fechanacimiento"
            label="Fecha nacimiento"
            prepend-icon="mdi-calendar"
            readonly
            v-bind="attrs"
            v-on="on"
          ></v-text-field>
        </template>
        <v-date-picker
          v-model="fechanacimiento"
          :active-picker.sync="activePicker"
          :max="
            new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
              .toISOString()
              .substr(0, 10)
          "
          min="1950-01-01"
          @change="save"
        >   <v-icon slot="prepend" color="green"> mdi-calendar</v-icon>
      </v-date-picker>
      </v-menu>
       
        <v-text-field
          label="Estatura"
         
          hide-details="auto"
          v-model="estatura"
        >
          <v-icon slot="prepend" color="green"> mdi-head-cog</v-icon>
        </v-text-field>
        <v-text-field
          label="Peso actual"
        
          hide-details="auto"
          v-model="peso"
        >
          <v-icon slot="prepend" color="green"> mdi-head-cog</v-icon>
        </v-text-field>
        <v-text-field
          label="Grado al que ingresa"
          :rules="gradoRules"
          hide-details="auto"
          v-model="grado"
        >
          <v-icon slot="prepend" color="green"> mdi-head-cog</v-icon>
        </v-text-field>
        <v-text-field
          label="Tiene diagnostico:"
          :rules="diagnosticadoRules"
          hide-details="auto"
          v-model="diagnosticado"
        >
          <v-icon slot="prepend" color="green"> mdi-head-cog</v-icon>
        </v-text-field>
        <v-textarea
          :rules="diagnosticoRules"
          label="Diagnostico:"
          hint="Diagnostico"
          v-model="diagnostico"
        >
          <v-icon slot="prepend" color="green">
            mdi-eye-check</v-icon
          ></v-textarea
        >
        <v-textarea
          :rules="descipcionRules"
          label="Características:"
          hint="Datos personales"
          v-model="descripcion"
        >
          <v-icon slot="prepend" color="green">
            mdi-eye-check</v-icon
          ></v-textarea
        >
        <v-snackbar v-model="snackbar">
          {{ snackbarText }}

          <template v-slot:action="{ attrs }">
            <v-btn color="pink" text v-bind="attrs" @click="volverEstudiante()">
              Close
            </v-btn>
          </template>
        </v-snackbar>
      </div>
      <br /><br />
          <div id="botones">
       <v-btn color="primary" @click="guardarEstudiante()" v-if="nuevoestud" >GUARDAR<v-icon right dark> mdi-content-save </v-icon></v-btn>
       <v-btn color="success" v-if="!nuevoestud" @click="modificarEstudiante()">ACTUALIZAR</v-btn>
     </div>
    </v-card>
  </div>
</template>
<script>
import {
  obtenerporCodigo,
  crearEstudiante,
  actualizarEstudiante,
} from "../../controllers/Estudiante.controller";
export default {
  data() { 
    return {
      esnuevo:true,
      codigoestud: 0,
      apellidosestud: "",
      nombrestud: "",
      fechanacimiento: "",
      edad: 0,
      estatura: 0,
      peso: 0,
      grado: 0,
      diagnosticado: "",
      diagnostico: "",
      descripcion: "",
     /* materias: [],
      planillanotas: {},*/
      snackbar: false,
      snackbarText: "",
      nuevoestud: true,
            imageRules: [
        (value) =>
          !value ||
          value.size < 2000000 ||
          "Avatar size should be less than 2 MB!",
      ],
      codRules: [
        (value) => !!value || "Required.",
        (value) => (value && value.length >= 3) || "Min 6 characters",
      ],
      NameRules: [
        (value) => !!value || "Required.",
        (value) => (value && value.length >= 3) || "Min 6 characters",
      ],
      ApellidoRules: [
        (value) => !!value || "Required.",
        (value) => (value && value.length >= 3) || "Min 6 characters",
      ],
      /*imgRules: [(value) => !!value || "Required."],
      ObservacionesRules: [
        (value) => !!value || "Required.",
        (value) => (value && value.length >= 3) || "Min 10 characters",
      ],*/
      fechaRules: [
        (value) => !!value || "Required.",
        (value) => (value && value.length >= 3) || "Min 6 characters",
      ],
     gradoRules: [
        (value) => !!value || "Required.",
        (value) => (value && value.length >= 3) || "Min 6 characters",
      ],
      diagnosticadoRules: [
        (value) => !!value || "Required.",
        (value) => (value && value.length >= 3) || "Min 6 characters",
      ],
      diagnosticoRules: [
        (value) => !!value || "Required.",
        (value) => (value && value.length >= 3) || "Min 6 characters",
      ],
      descipcionRules: [
        (value) => !!value || "Required.",
        (value) => (value && value.length >= 3) || "Min 6 characters",
      ],
    };
  },
  created() {
    const codigoestudiante = this.$route.params.codigoestud;
    console.log("codigo:", codigoestudiante)
    if (codigoestudiante != undefined) {
      obtenerporCodigo(codigoestudiante)
        .then((response) => {
          const estudiante = response.data;
          (this.codigoestud = estudiante.codigoestud);
          (this.apellidosestud = estudiante.apellidosestud),
            (this.nombrestud = estudiante.nombrestud),
            (this.fechanacimiento = estudiante.fechanacimiento),
            (this.edad = estudiante.edad),
            (this.estatura = estudiante.estatura),
            (this.peso = estudiante.peso),
            (this.grado = estudiante.grado),
            (this.diagnosticado = estudiante.diagnosticado),
            (this.diagnostico = estudiante.diagnostico),
            (this.descripcion = estudiante.descripcion);
            (this.nuevoestud = false);
            /*(this.materias = estudiante.materias),
            (this.planillanotas = estudiante.planillanotas);*/
        })
        .catch((err) => console.error(err));
    }
  },
   watch: {
    menu(val) {
      val && setTimeout(() => (this.activePicker = "YEAR"));
    },
  },
  methods: {
      save(date) {
      this.$refs.menu.save(date);
    },
    volverEstudiante() {
      (this.snackbar = false), this.$router.push("/EstudiantesList");
    },

    guardarEstudiante() {
      /* if(this.identificacion != undefined && this.nombre != undefined && this.fechanacimiento != undefined && this.apellidos!= undefined && this.activo != undefined && this.materias != undefined && this.grados!= undefined ){*/
      const estudiante = {
        codigoestud: this.codigoestud,
        apellidosestud: this.apellidosestud,
        nombrestud: this.nombrestud,
        fechanacimiento: this.fechanacimiento,
        edad: this.edad,
        estatura: this.estatura,
        peso: this.peso,
        grado: this.grado,
        diagnosticado: this.diagnosticado,
        diagnostico: this.diagnostico,
        descripcion: this.descripcion,
        
      };
      crearEstudiante(estudiante)
        .then(() => {
          this.snackbarText = "Estudiante almacenado correctamente";
          this.snackbar = true;
        })
        .catch((err) => console.error(err.response.data.message));
    },
     modificarEstudiante() {
            const estudiante = {
        codigoestud: this.codigoestud,
        apellidosestud: this.apellidosestud,
        nombrestud: this.nombrestud,
        fechanacimiento: this.fechanacimiento,
        edad: this.edad,
        estatura: this.estatura,
        peso: this.peso,
        grado: this.grado,
        diagnosticado: this.diagnosticado,
        diagnostico: this.diagnostico,
        descripcion: this.descripcion,
      };
      actualizarEstudiante(this.codigoestud, estudiante)
        .then(() => {
          this.snackbarText = "Estudiante modificado correctamente";
          this.snackbar = true;
        })
        .catch((err) => console.error(err.response.data.message));
    },
  /*mounted() {
    console.log("id Estudiante", localStorage.idEstudiante);
    console.log("Estudiante", localStorage.estudiantes);
  },
  methods: {
    atras() {
      this.$router.go("-1");
    },
    guardar() {
      validar campos obligatorios
      console.log("Guardar");
      if (this.img === "") {
        alert("Se requiere la imagen");
        return;
      }
      if (this.name === "") {
        alert("Se requiere EL nombre");
        return;
      }
      if (this.Apellidos === "") {
        alert("mSe requiere EL APELLIDO");
        return;
      }
      //Agregar estudiante al loalstorage
      let id = localStorage.idEstudiante;
      if (id === undefined || id == "") {
        id = 1;
      } else {
        id = parseInt(id) + 1;
      }

      const estudiante = {
        id: id,
        name: this.name,
        Apellidos: this.Apellidos,
        observaciones: this.observaciones,
        img: this.img,
      };
      let estudiantes = localStorage.dicentes;
      if (estudiantes === undefined || estudiantes === "") {
        estudiantes = [];
      } else {
        estudiantes = JSON.parse(estudiantes);
      }
      console.log("estudiantes", estudiantes);
      estudiantes.push(estudiante);
      alert("Estudiante creado exitosamente");
      this.name = "";
      this.Apellidos = "";
      this.observaciones = "";
      this.img = "";
      localStorage.idEstudiante = id;
      localStorage.dicentes = JSON.stringify(estudiantes);
    },*/
  },
};
</script>

<style>
.botones {
  float: right;
}
.v-btn {
  margin: 2em;
  padding: 2em;
}
.nuevoestudiante {
  width: 500px;
  align-content: center;
  position: inherit;
  margin: 60px;
  padding: 50px;
}
</style>