<template>
  <div>
<v-cad whidt="600px" hight="600px">
    <v-responsive :aspect-ratio="16 / 3" white="800">
      <v-card-text>
        <center><h1>EVALUACIÓN CIRCUITOS ELÉCTRICOS (ARDUINO)</h1></center>
        <br /><br />
        <v-row>
          <v-col>
            <v-container class="px-0" fluid>
              Enunciado primera pregunta...
              <v-radio-group v-model="radioGroup">
                <v-radio
                  v-for="n in 4"
                  :key="n"
                  :label="`Radio ${n}`"
                  :value="n"
                ></v-radio>
              </v-radio-group>
            </v-container>
          </v-col>
          <v-col>
            <v-container class="px-0" fluid>
              Enunciado segunda pregunta...
              <v-radio-group v-model="radioGroup">
                <v-radio
                  v-for="n in 4"
                  :key="n"
                  :label="`Radio ${n}`"
                  :value="n"
                ></v-radio>
              </v-radio-group>
            </v-container>
          </v-col>
          <v-col>
            <v-container class="px-0" fluid>
              Enunciado tercera pregunta...
              <v-radio-group v-model="radioGroup">
                <v-radio
                  v-for="n in 4"
                  :key="n"
                  :label="`Radio ${n}`"
                  :value="n"
                ></v-radio>
              </v-radio-group>
            </v-container>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-container class="px-0" fluid>
              Enunciado cuarta pregunta...
              <v-radio-group v-model="radioGroup">
                <v-radio
                  v-for="n in 4"
                  :key="n"
                  :label="`Radio ${n}`"
                  :value="n"
                ></v-radio>
              </v-radio-group>
            </v-container>
          </v-col>
          <v-col>
            <v-container class="px-0" fluid>
              Enunciado quinta pregunta...
              <v-radio-group v-model="radioGroup">
                <v-radio
                  v-for="n in 4"
                  :key="n"
                  :label="`Radio ${n}`"
                  :value="n"
                ></v-radio>
              </v-radio-group>
            </v-container>
          </v-col>
          <v-col>
            <v-container class="px-0" fluid>
              Enunciado sexta pregunta...
              <v-radio-group v-model="radioGroup">
                <v-radio
                  v-for="n in 4"
                  :key="n"
                  :label="`Radio ${n}`"
                  :value="n"
                ></v-radio>
              </v-radio-group>
            </v-container>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-container class="px-0" fluid>
              Enunciado séptima pregunta...
              <v-radio-group v-model="radioGroup">
                <v-radio
                  v-for="n in 4"
                  :key="n"
                  :label="`Pregunta ${n}`"
                  :value="n"
                ></v-radio>
              </v-radio-group>
            </v-container>
          </v-col>
          <v-col>
            <v-container class="px-0" fluid>
              Enunciado octava pregunta...
              <v-radio-group v-model="radioGroup">
                <v-radio
                  v-for="n in 4"
                  :key="n"
                  :label="`Radio ${n}`"
                  :value="n"
                ></v-radio>
              </v-radio-group>
            </v-container>
          </v-col>
          <v-col>
            <v-container class="px-0" fluid>
              Enunciado novena pregunta...
              <v-radio-group v-model="radioGroup">
                <v-radio
                  v-for="n in 4"
                  :key="n"
                  :label="`Radio ${n}`"
                  :value="n"
                ></v-radio>
              </v-radio-group>
            </v-container>
          </v-col>
        </v-row>
      </v-card-text>
      <v-btn v-on:click="atras">CALIFICAR</v-btn>
    </v-responsive>
    <br /><br />
</v-cad>
  </div>
</template>

<script>
export default {
  components: {
    
  },
   data () {
      return {
        radioGroup: 1,
      }
    }
};
</script>

<style>
</style>