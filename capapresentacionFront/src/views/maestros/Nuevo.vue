<template>
  <div class="nuevo-maestro">
    <v-card class="formulario" center fixed fab>
      <h1>{{ esnuevo ? "Nuevo Maestro" : "Editar Maestro" }}</h1>
      <v-img v-if="!esnuevo" :src="iamageUrl"></v-img>
      <v-file-input
        v-if="esnuevo"
        accept="image/*"
        label="Imágen"
        v-model="image"
        :rules="imageRules"
      ></v-file-input>
      <v-text-field
        label="Identificación"
        v-model="identificacion"
        :rules="idRules"
        hide-details="auto"
        ><v-icon slot="prepend" color="green">
          mdi-head-cog</v-icon
        ></v-text-field
      >
      <v-text-field
        label="Nombre"
        v-model="nombre"
        :rules="nombreRules"
        hide-details="auto"
        ><v-icon slot="prepend" color="green">
          mdi-head-cog</v-icon
        ></v-text-field
      >
      <v-text-field
        label="Apellidos"
        v-model="apellidos"
        :rules="apellidosRules"
        hide-details="auto"
        ><v-icon slot="prepend" color="green">
          mdi-head-cog</v-icon
        ></v-text-field
      >
      <!--div class="mb-6">Fecha de Ingreso: <code>{{ activePicker || 'null' }}</code></div-->
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
            v-model="fechaIngreso"
            label="Fecha ingreso"
            prepend-icon="mdi-calendar"
            readonly
            v-bind="attrs"
            v-on="on"
          ></v-text-field>
        </template>
        <v-date-picker
          v-model="fechaIngreso"
          :active-picker.sync="activePicker"
          :max="
            new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
              .toISOString()
              .substr(0, 10)
          "
          min="1950-01-01"
          @change="save"
        ></v-date-picker>
      </v-menu>
      <v-card>
    <v-radio-group v-model="activo">
       <center> Activo</center><br>
       <v-row>
         <v-col>
      <v-radio value="si">
        <template v-slot:label>
          <div><strong class="success--text">Si</strong></div>
        </template>
      </v-radio></v-col>
      <v-col>
      <v-radio value="no">
        <template v-slot:label>
          <div> <strong class="primary--text">No</strong></div>
        </template>
      </v-radio></v-col>
      </v-row>
    </v-radio-group>
      </v-card>
      <v-textarea
          :rules="fechaRules"
          label="Descripción:"
          hint="Descripción"
          v-model="descripcion"
          hide-details="auto"
        >
          <v-icon slot="prepend" color="green">
            mdi-eye-check</v-icon
          ></v-textarea
        >
   
      <br />
      <!--v-text-field label="materias" v-model="materias"></v-text-field>
    
    <v-text-field label="grados" v-model="grados"></v-text-field-->
      <v-combobox
        v-model="materias"
        chips
        clearable
        label="Materias que dicta:"
        multiple
        solo
      >
        <template v-slot:selection="{ attrs, item, select, selected }">
          <v-chip
            v-bind="attrs"
            :input-value="selected"
            close
            @click="select"
            @click:close="removeChip(item)"
          >
            <strong>{{ item }}</strong
            >&nbsp;
          </v-chip>
        </template>
      </v-combobox>
      <v-combobox
        v-model="grados"
        chips
        clearable
        label="Grados en los que dicta las materias:"
        multiple
        solo
      >
        <template v-slot:selection="{ attrs, item, select, selected }">
          <v-chip
            v-bind="attrs"
            :input-value="selected"
            close
            @click="select"
            @click:close="removeChip2(item)"
          >
            <strong>{{ item }}</strong
            >&nbsp;
          </v-chip>
        </template>
      </v-combobox>

      <div id="botones">
        <v-btn color="primary" @click="guardarmaestro()" v-if="esnuevo"
          >GUARDAR</v-btn
        >
        <v-btn color="success" v-if="!esnuevo" @click="modificarMaestro()"
          >ACTUALIZAR</v-btn
        >
      </div>
      <v-snackbar v-model="snackbar">
        {{ snackbarText }}

        <template v-slot:action="{ attrs }">
          <v-btn color="pink" text v-bind="attrs" @click="volverMaestro()">
            Close
          </v-btn>
        </template>
      </v-snackbar>
    </v-card>
    <br /><br /><br /><br />
  </div>
</template>
<script>
import {
  crearMaestro,
  obtenerMaestro,
  actualizarMaestro,
  crearMaestroConImagen,
} from "../../controllers/Maestro.controller";

export default {
  components: {},
  data() {
    return {
      radios: "",
      activePicker: null,
      date: null,
      menu: false,
      image: null,
      iamageUrl: "",
      identificacion: 0,
      nombre: "",
      apellidos: "",
      fechaIngreso: "",
      activo: "",
      materias: [],
      grados: [],
      descripcion: "",
      snackbar: false,
      snackbarText: "",
      esnuevo: true,
      column: null,
      row: null,
      imageRules: [
        (value) =>
          !value ||
          value.size < 2000000 ||
          "Avatar size should be less than 2 MB!",
      ],
      idRules: [
        (value) => !!value || "Required.",
        (value) => (value && value.length >= 3) || "Mínimo 6 caracteres",
      ],
      nombreRules: [
        (value) => !!value || "Required.",
        (value) => (value && value.length >= 3) || "Mínimo 6 caracteres",
      ],
      apellidosRules: [
        (value) => !!value || "Required.",
        (value) => (value && value.length >= 3) || "Mínimo 6 caracteres",
      ],
      fechaRules: [
        (value) => !!value || "Required.",
        (value) => (value && value.length >= 3) || "Mínimo 6 caracteres",
      ],
      activoRules: [
        (value) => !!value || "Required.",
        (value) => (value && value.length >= 3) || "Mínimo 6 caracteres",
      ],
      descripcionRules: [
        (value) => !!value || "Required.",
        (value) => (value && value.length >= 3) || "Mínimo 6 caracteres",
      ],
    };
  },
  created() {
    const identificar = this.$route.params.identificacion;
    if (identificar != undefined) {
      obtenerMaestro(identificar)
        .then((response) => {
          const maestro = response.data;
          this.imagen = maestro.imagen;
          this.identificacion = maestro.identificacion;
          this.nombre = maestro.nombre;
          this.apellidos = maestro.apellidos;
          this.fechaIngreso = maestro.fechaIngreso;
          this.activo = maestro.activo;
          this.materias = maestro.materias;
          this.grados = maestro.grados;
          this.descripcion = maestro.descripcion;
          this.iamageUrl = maestro.iamageUrl;
          this.esnuevo = false;
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
    atras() {
      this.$router.go("-1");
    },
    guardarmaestro() {
      let request = null;
      if (this.image == null || this.image == undefined) {
        const maestro = {
          identificacion: this.identificacion,
          nombre: this.nombre,
          apellidos: this.apellidos,
          fechaIngreso: this.fechaIngreso,
          activo: this.activo,
          materias: this.materias,
          grados: this.grados,
          image: this.image,
        };
        request = crearMaestro(maestro);
      } else {
        const maestro = new FormData();
        maestro.append("identificacion", this.identificacion);
        maestro.append("nombre", this.nombre);
        maestro.append("apellidos", this.apellidos);
        maestro.append("fechaIngreso", this.fechaIngreso);
        maestro.append("activo", this.activo);
        maestro.append("descripcion", this.descripcion);
        maestro.append("materias", JSON.stringify(this.materias));
        maestro.append("grados", JSON.stringify(this.grados));
        maestro.append("image", this.image);
        request = crearMaestroConImagen(maestro);
      }

      /* if(this.identificacion != undefined && this.nombre != undefined && this.fechaingreso != undefined && this.apellidos!= undefined){
      const maestro = {
        imagen: this.imagen,
        identificacion: this.identificacion,
        nombre: this.nombre,
        apellidos: this.apellidos,
        fechaIngreso: this.fechaIngreso,
        activo: this.activo,
        materias: this.materias,
        grados: this.grados,
        descripcion: this.descripcion,
      };*/
      request
        .then(() => {
          this.snackbarText = "Maestro guardado correctamente";
          this.snackbar = true;
        })
        .catch((err) => console.error(err.response.data.message));
      /* }else{
      this.snackbarText="Debe ingresar todos los datos";
          this.snackbar=true;
    }*/
    },
    modificarMaestro() {
      if (
        this.identificacion == undefined ||
        this.identificacion == " " ||
        this.nombre == undefined ||
        this.nombre == "" ||
        this.apellidos == undefined ||
        this.apellidos == "" ||
        this.fechaIngreso == undefined ||
        this.fechaIngreso == "" ||
        this.activo == undefined ||
        this.activo == "" ||
        this.materias == undefined ||
        this.materias == "" ||
        this.grados == undefined ||
        this.grados == "" ||
        this.descripcion == undefined ||
        this.descripcion == ""
      ) {
        console.log("Diligencie todos los datos porque son obligatorios");
      }
      const maestro = {
        identificacion: this.identificacion,
        nombre: this.nombre,
        apellidos: this.apellidos,
        fechaIngreso: this.fechaIngreso,
        activo: this.activo,
        materias: this.materias,
        grados: this.grados,
        descripcion: this.descripcion,
      };
      actualizarMaestro(this.identificacion, maestro)
        .then(() => {
          this.snackbarText = "Maestro modificado correctamente";
          this.snackbar = true;
        })
        .catch((err) => console.error(err.response.data.message));
    },

    removeChip(item) {
      this.materias.splice(this.materias.indexOf(item), 1);
      this.materias = [...this.materias];
    },
    removeChip2(gr) {
      this.grados.splice(this.grados.indexOf(gr), 1);
      this.grados = [...this.grados];
    },
    volverMaestro() {
      (this.snackbar = false), this.$router.push("/Maestroslist");
    },
  },
};
</script>

<style scope>
#botones {
  display: flex;
  justify-content: right;
}
.nuevo-maestro {
  font: 1em sans-serif;
  vertical-align: center;
}
.formulario {
  border: 5px;
  margin: 60px;
  padding: 60px;
  width: 800px;
  height: 850px;
  vertical-align: center;
  align-self: center;
}
</style>