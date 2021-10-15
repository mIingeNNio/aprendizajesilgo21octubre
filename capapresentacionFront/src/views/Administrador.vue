<template>
  <div>
              <v-card>
            <v-responsive :aspect-ratio="16/9">
              <v-card-text>
            <h1>VISTA ADMINISTRATIVA</h1>
                  <br><br> </v-card-text>
 <v-row>
    <v-col>        
          <v-card
          class="mx-auto"
          max-width="344"
          color= ""
        >
          <v-card-text>
            <div>Acceso para administrar</div>
            <p class="text-h4 text--primary">
              INFORMACIÓN DE LOS MAESTROS
            </p>
           
            <div class="text--primary">
             Ingreso - Modificación - Eliminación de la información.
            </div>
          </v-card-text>
          <v-card-actions>
            <v-btn to="/Maestroslist">Acceso...</v-btn>
          </v-card-actions>

          <v-expand-transition>
            <v-card
              v-if="reveal"
              class="transition-fast-in-fast-out v-card--reveal"
              style="height: 100%;"
            >
              <v-card-text class="pb-0">
                <p class="text-h4 text--primary">
                  ORIGEN
                </p>
                <p>Marcela Patricia Pareja </p>
              </v-card-text>
              <v-card-actions class="pt-0">
                <v-btn
                  text
                  color="teal accent-4"
                  @click="reveal = false"
                >
                  CERRAR
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-expand-transition>
        </v-card>
    </v-col>
    <v-col>
        <v-card
          class="mx-auto"
          max-width="344"
          color=""
        >
          <v-card-text>
            <div>Acceso para administrar</div>
            <p class="text-h4 text--primary">
              INFORMACIÓN DE LOS ESTUDIANTES
            </p>
           
            <div class="text--primary">
             Ingreso - Modificación - Eliminación de la información.
            </div>
          </v-card-text>
          <v-card-actions>
            <v-btn to="/Estudianteslist">Acceso...</v-btn>
          </v-card-actions>

          <v-expand-transition>
            <v-card
              v-if="reveal"
              class="transition-fast-in-fast-out v-card--reveal"
              style="height: 100%;"
            >
              <v-card-text class="pb-0">
                <p class="text-h4 text--primary">
                  ORIGEN
                </p>
                <p>Marcela Patricia Pareja </p>
              </v-card-text>
              <v-card-actions class="pt-0">
                <v-btn
                  text
                  color="teal accent-4"
                  @click="reveal = false"
                >
                  CERRAR
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-expand-transition>
        </v-card>
      </v-col>
      <v-col>
        <v-card
          class="mx-auto"
          max-width="344"
          color=""
        >
          <v-card-text>
            <div>Acceso para administrar</div>
            <p class="text-h4 text--primary">
              INFORMACIÓN DE LOS ACUDIENTES
            </p>
           
            <div class="text--primary">
             Ingreso - Modificación - Eliminación de la información.
            </div>
          </v-card-text>
          <v-card-actions>
            <v-btn to="/Acudientes" nuevo=true>Acceso...</v-btn>
          </v-card-actions>

          <v-expand-transition>
            <v-card
              v-if="reveal"
              class="transition-fast-in-fast-out v-card--reveal"
              style="height: 100%;"
            >
              <v-card-text class="pb-0">
                <p class="text-h4 text--primary">
                  ORIGEN
                </p>
                <p>Marcela Patricia Pareja </p>
              </v-card-text>
              <v-card-actions class="pt-0">
                <v-btn
                  text
                  color="teal accent-4"
                  @click="reveal = false"
                >
                  CERRAR
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-expand-transition>
        </v-card>
      </v-col>
  </v-row>
  </v-responsive>
  </v-card> 
   
    <br>
  <br>    
  </div>
</template>

<script>
export default {
components:{

  },
  data: () => ({
      reveal: false,
      
    }),
}
</script>

<style>
.body{
  color:"#AB47BC"
}
.v-card--reveal {
  bottom: 0;
  opacity: 1 !important;
  position: absolute;
  width: 100%;
  border-bottom-color: aqua;
}
</style>