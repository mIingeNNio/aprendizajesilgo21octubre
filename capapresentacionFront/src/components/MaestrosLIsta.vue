<template>
  <div>
    <v-timeline>
      <v-timeline-item large>
        <template v-slot:icon>
          <v-avatar>
            <img :src="maestrocomponent.imageUrl" />
          </v-avatar>
        </template>
        <template v-slot:opposite>
          <span class="text-h4"
            >{{ maestrocomponent.nombre }}
            {{ maestrocomponent.apellidos }}</span
          >
        </template>
        <v-card class="elevation-5">
          <v-card-title class="text-h7">
            Características: {{ maestrocomponent.descripcion }}
          </v-card-title>
          <v-card class="elevation-5">
            <v-card-title>
              Fecha ingreso: {{ maestrocomponent.fechaIngreso }}
            </v-card-title>
          </v-card>
          <v-card-text
            ><div class="categories">
              Materias:
              <v-chip v-for="mat in maestrocomponent.materias" :key="mat"
                >{{ mat }}
              </v-chip>
            </div>
            <div class="categories">
              Grados:
              <v-chip v-for="gr in maestrocomponent.grados" :key="gr"
                >{{ gr }}
              </v-chip>
            </div>
            <v-snackbar v-model="snackbar">
              {{ snackbarText }}

              <template>
                <v-btn color="pink" text @click="volverMaestro()">
                  Close
                </v-btn>
              </template>
            </v-snackbar>
            <v-card-actions class="dosbotones">
              <v-btn
                color="success"
                :to="`/maestros/` + maestrocomponent.identificacion"
                >EDITAR</v-btn
              >

              <v-row justify="center">
                <v-btn color="primary" dark @click.stop="dialog = true">
                  ELIMINAR
                </v-btn>

                <v-dialog v-model="dialog" max-width="290">
                  <v-card>
                    <v-card-title class="text-h5">
                     {{ maestrocomponent.nombre }}
            {{ maestrocomponent.apellidos }}
                    </v-card-title>

                    <v-card-text>
                      ¿Con seguridad desea eliminar desde el listado. !No podrá
                revertir esta acción¡?
                    </v-card-text>

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

              <!--v-row justify="center">
                <v-dialog v-model="dialog" persistent max-width="490">
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn   @click="eliminar()" color="primary" dark v-bind="attrs" v-on="on">
                      ELIMINAR
                    </v-btn>
                  </template>
                  <v-card class="mensaje">
                    <v-card-title class="text-h5">
                      {{ maestrocomponent.nombre }}
                      {{ maestrocomponent.apellidos }}
                    </v-card-title>
                    <v-card-text
                      >¿Con seguridad desea eliminar desde el listado. !No podrá
                      revertir esta acción¡?</v-card-text
                    >
                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn color="blue darken-1" text @click="dialog = false">
                        NO
                      </v-btn>
                      <v-btn
                        color="blue darken-1"
                        text
                        @click="eliminar()"
                        dialog="false"
                      >
                        SI
                      </v-btn>
                      <v-btn color="blue darken-1" text @click="dialog = false">
                        SALIR
                      </v-btn>
                    </v-card-actions>
                  </v-card>
                </v-dialog>
              </v-row-->
            </v-card-actions>
          </v-card-text>
        </v-card>
      </v-timeline-item>
    </v-timeline>

    <!--/v-card-->
  </div>
</template>
<script>
import { eliminarMaestro } from "../controllers/Maestro.controller";
export default {
  props: ["maestrocomponent"], //las propiedades son los atributos que bienen de un componente padre
  data() {
    return {
      snackbar: false,
      snackbarText: "",
      dialog: false,
      admin: false,
      maestros: [],
    };
  },
  mounted() {
    console.log("maestrocomponent", this.maestrocomponent); //cuando cargue el elemnto quiero ver que tiene el item
  
 },
  methods: {
    volverMaestro() {
      (this.snackbar = false), this.$router.push("/Maestroslist");
    },

    editar() {
      console.log(`Editar ${this.maestrocomponent.identificacion}`);
      this.$router.push(`/maestros/${this.maestrocomponent.identificacion}`);
    },
    eliminar() {
      eliminarMaestro(this.maestrocomponent.identificacion)
        .then(() => {
          this.snackbarText = "Eliminado correctamente";
          this.snackbar = true;
          window.location.reload();
        })
        .catch((err) => console.error(err.response.data.message));
    },
  },
  computed: {
    imageUrl() {
      return this.maestrocomponent.imageUrl == undefined
        ? "https://picsum.photos/"
        : this.maestrocomponent.imageUrl;
    },
  },
};
</script>

<style scope>
.materias {
  margin: 4px;
}
.mensaje {
  width: 500px;
}
.categories {
  padding: 5px;
  justify-content: center !important;
  gap: 10px;
}
.dosbotones {
  position: unset;
}
</style>