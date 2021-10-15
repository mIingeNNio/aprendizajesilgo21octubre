<template>
  <div class="estudiantes">
    <v-responsive>
      <v-card class="mx-auto" max-width="384" outlined>
        <v-list-item three-line>
          <v-list-item-content>
            <div class="text-overline mb-1">
              {{ estudiantecomponent.apellidosestud }}
              {{ estudiantecomponent.nombrestud }}
            </div>
            <v-list-item-title class="text-h7 mb-1">
              Grado: {{ estudiantecomponent.grado }}
            </v-list-item-title>
            <v-list-item-subtitle
              >Descripcion:
              {{ estudiantecomponent.descripcion }}
            </v-list-item-subtitle>
            <v-list-item-subtitle
              >Estatura:
              {{ estudiantecomponent.estatura }}
            </v-list-item-subtitle>
            <v-list-item-subtitle
              >Peso:
              {{ estudiantecomponent.peso}}
            </v-list-item-subtitle>
          </v-list-item-content>
          <v-list-item-avatar
            elevation="33"
            tile
            size="80"
            color="grey"
          > <img :src="estudiantecomponent.imageUrl" /></v-list-item-avatar> </v-list-item
        ><v-spacer></v-spacer>
      </v-card>

      <v-snackbar v-model="snackbar">
        {{ snackbarText }}

        <template v-slot:action="{ attrs }">
          <v-btn color="pink" text v-bind="attrs" @click="volverEstudiante()">
            Close
          </v-btn>
        </template>
      </v-snackbar>
      <v-card-actions>
        <v-btn
          color="success"
          :to="`/estudiantes/` + estudiantecomponent.codigoestud"
          >EDITAR</v-btn
        >
        <v-row justify="center">
          <v-dialog v-model="dialog" persistent max-width="390">
            <template v-slot:activator="{ on, attrs }">
              <v-btn color="primary" dark v-bind="attrs" v-on="on">
                ELIMINAR
              </v-btn>
            </template>

            <v-card class="mensaje" dialog="false">
              <v-card-title class="text-h5">
                {{ estudiantecomponent.nombrestud }}
                {{ estudiantecomponent.apellidosestud }}
              </v-card-title>
              <v-card-text
                >¿Con seguridad desea eliminar desde el listado. !No podrá
                revertir esta acción¡?</v-card-text
              >
              <v-card-actions>
                <v-spacer></v-spacer>
                
                      <v-btn
                        color="green darken-1"
                        text
                        @click="dialog = false"
                      >
                        Noooooo
                      </v-btn>

                      <v-btn color="green darken-1" text @click="eliminar()">
                        Siiiii
                      </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-row>
      </v-card-actions>
    </v-responsive>
  </div>
</template>
<script>
import { eliminarEstudiante } from "../controllers/Estudiante.controller";
export default {
  props: ["estudiantecomponent"], //las propiedades son los atributos que bienen de un componente padre
  data() {
    return {
      snackbar: false,
      snackbarText: "",
      dialog: false,
      estudiantes: [],
    };
  },
  mounted() {
    console.log("estudiantecomponent", this.estudiantecomponent); //cuando cargue el elemnto quiero ver que tiene el item
  },
  methods: {
    volverEstudiante() {
      (this.snackbar = false), this.$router.push("/EstudiantesList");
    },

    editar() {
      console.log(`Editar ${this.estudiantecomponent.codigoestud}`);
      this.$router.push(`/estudiantes/${this.estudiantecomponent.codigoestud}`);
    },
    eliminar() {
      eliminarEstudiante(this.estudiantecomponent.codigoestud)
        .then(() => {
          this.snackbarText = "Estudiante eliminado correctamente";
          this.snackbar = true;
          window.location.reload();
        })
        .catch((err) => console.error(err.response.data.message));
    },
  },
computed: {
    imageUrl() {
      return this.estudiantecomponent.imageUrl == undefined
        ? "https://picsum.photos/"
        : this.estudiantecomponent.imageUrl;
    },
  },
};
</script>

<style scope>
.estudiantes {
  margin: 4px;
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