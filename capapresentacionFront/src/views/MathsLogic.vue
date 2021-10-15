<template>
  <div>
    <h1>PÁGINA DE MATEOLOGÍA</h1>
    <br /><br /><br /><br />
    <v-sheet class="fases" elevation="10" height="233" width="250"
      >MATEOLOGÍA<img src="https://picsum.photos/200" />
    </v-sheet>
    <br />
    <v-bottom-navigation shift dark height="100">
      <v-btn v-on:click="exploracion = !exploracion" width= "150" height="60">
        <span>Previos</span>
        <v-icon>mdi-television-play</v-icon>
        FASE EXPLORACIÓN
      </v-btn>
      <v-btn v-on:click="estructuracion = !estructuracion"  width= "150" height="60">
        <span>Conoce</span>
        <v-icon>mdi-music-note</v-icon>
        FASE ESTRUCTURACIÓN
      </v-btn>
      <v-btn v-on:click="aplicacion = !aplicacion"  width= "150" height="60">
        <span>Aplica</span>
        <v-icon>mdi-book</v-icon>
        FASE APLICACIÓN
      </v-btn>
      <v-btn v-on:click="transferencia = !transferencia"  width= "150" height="60">
        <span>Transfiere</span>
        <v-icon>mdi-image</v-icon>
        FASE TRANSFERENCIA
      </v-btn>
      <v-btn v-on:click="validacion = !validacion"  width= "150" height="60">
        <span>Valorar</span>
        <v-icon>mdi-image</v-icon>
        FASE VALIDACIÓN
      </v-btn>
    </v-bottom-navigation>
    <br>
    <v-card>
      <v-responsive :aspect-ratio="16 / 9">
        <v-card-text>
          <br /><br />{{ nombrefase }}<br /><br />
          <transition name="fade">
            <v-card disabled elevation="15" loading shaped 
              ><div class="texto" v-if="exploracion">
                <explorar /></div></v-card
          ></transition>
          <br />
          <v-card disabled elevation="19" loading outlined tile 
            ><div class="texto" v-if="estructuracion">
              <transition name="fade"><estructurar /></transition></div
          ></v-card>
          <br />
          <transition name="fade">
            <v-card disabled elevation="10" loading shaped 
              ><div class="texto" v-if="aplicacion"><aplicar /></div
            ></v-card> </transition
          ><br />
          <transition name="fade">
            <v-card disabled elevation="10" loading shaped 
              ><div class="texto" v-if="transferencia"><transferir /></div
            ></v-card>
          </transition>
          <br />
          <transition name="fade">
            <v-card 
              ><div class="texto" v-if="validacion">
                <validar /></div
            ></v-card>
          </transition>
          <div class="texto">
            <v-row align="center">
              <v-item-group
                v-model="window"
                class="shrink mr-6"
                mandatory
              >
                <v-item
                  v-for="n in length"
                  :key="n"
                  v-slot="{ active, toggle }"
                >
                  <div>
                    <v-btn :input-value="active" icon @click="toggle">
                      <v-icon>mdi-record</v-icon>
                    </v-btn>
                  </div>
                </v-item>
              </v-item-group>

              <v-col>
                <v-window v-model="window" class="elevation-10" vertical>
                  <v-window-item v-for="n in length" :key="n">
                    <v-card flat>
                      <v-card-text>
                        <v-row class="mb-4" align="center">
                          <v-avatar color="grey" class="mr-4"></v-avatar>
                          <strong class="text-h6">ACTIVIDAD {{ n }}</strong>
                          <v-spacer></v-spacer>
                          <v-btn icon>
                            <v-icon>mdi-account</v-icon>
                          </v-btn>
                        </v-row>

                        <p>
                          <center>
                            <b>
                              ACTIVIDADES PARA LOS ESTUDIANTES QUE NO ALCANZARON
                              LOS LOGROS DEL PRIMER PERÍODO ((**2021**);)</b
                            >
                          </center>

                          DATOS PERSONALES DEL ESTUDIANTE:<br />
                          <br />
                          NOMBRE: <input type="text" id="nombre" /><br />
                          <br />
                          GRADO: <input type="text" id="grado" /><br /><br />
                          MATRICULA<br />
                          MASTER:
                          <input type="text" id="matriculam" /><br /><br />
                          <!--input type="button" onclick="s()" value="BIENVENIDA"/><br><br>
                            ¿Cómo le va?: <div id="estudiantes"></div>
                            <span id="mensaje">
                                </span><div id="grados"></div> <div id="matriculasm"></div><br/-->

                          "Este es un trabajo ameno para que desarrolle las
                          capacidades que requiere para enfrentar los siguientes
                          niveles en esta área y pueda triunfar en su vida ya
                          que tiene toda la inteligencia para hacerlo, es su
                          decisión el hacer los ejercicios de forma conciente y
                          aprender o de lo contrario hacerse trampa usted mismo
                          como si fuera un tonto y seguir quejandose siempre
                          porque no es capaz");<br /><br />

                          <br /><br />
                          <br />
                          <b>ACTIVIDAD #1</b> <br />

                          Realice las siguientes actividades, compruebe los
                          resultados, luego tome nota en su cuaderno con los
                          enunciados y las operaciones matemáticas que realice
                          en cada uno para enviarlos vía correo electrónico.<br />
                          <br />
                          1. Si usted tiene 10000 pesos y quiere comprar un
                          artículo que vale 20000 pesos. Esto se puede
                          representar matemáticamente de la siguiente forma:
                          10000 pesos que tiene quedaría adelante con el signo
                          positivo pero no se coloca, -20000 menos veintemil
                          pesos que vale el producto pero no los tiene, la
                          operación sería:<br />
                          10000 - 20000 = -10000<br />
                          El resultado obtenido serían -10000 menos diez mil
                          pesos es decir lo que le hace falta para comprar el
                          producto.
                          <br /><br />
                          En la primera casilla coloque el primer valor:<br />
                          <!--input type="numero" id="valor1"/><br><br>
                        En la segunda casilla coloque el segundo valor:<br>
                        <input type="numero" id="valor2"/><br>
                        <div id="resultadoSuma"></div> <br>
                        Haga clic en lel botón SUMAR para obtener el resultado:<br>
                        <input type="button" onclick="imprimirSuma()" value="SUMAR"/><br/><br/><br>
                        El primer valor introducido fue:<br>
                        <span id="primervalor"></span><br>
                        El segundo valor introducido fue: <span id="segundovalor"></span>
                        <br-->
                          2. Uste se reune con cuatro compañeros para conseguir
                          dinero entre todos y salir en bicicleta para ir a un
                          pueblo cercano, con el dinero compraran comida y
                          bebidas, el primer compañero dice: "yo tengo 8000", el
                          segundo dice: "mi abuelo me presta 20000", el tercero
                          dice: "yo tengo 15000" y el cuarto dice: "mi mamá me
                          presta 15000". <br />
                          a. ¿Cuánto dinero recogieron entre los cuatro
                          compañeros?<br />

                          Dinero del primer compañero:<br />
                          <!--input type="numero" id="compa1"/><br><br>
                        Dinero del segundo compañero:<br>
                        <input type="numero" id="compa2"/><br>
                        Dinero del tercer compañero:<br>
                        <input type="numero" id="compa3"/><br><br>
                        Dinero del cuarto compañero:<br>
                        <input type="numero" id="compa4"/><br><br>
                        <input type="button" onclick="totalcompa()" value="SUMAR"/><br/>
                        <br>Entre todos tienen: <span id="dinerocompa"></span> <br-->
                          Haga clic en lel botón SUMAR para obtener el
                          resultado:<br />

                          b. ¿Cuánto dinero quedarían debiendo después del
                          paseo?.<br />
                          Respuesta: -<!--span id="dinerodeuda"></span> <br>
                        <br>3. Teniendo en cuenta los procesos anteriores realice los siguientes ejercicios en su cuaderno explicando porque obtiene ese resultado, cuando termine puede verificar sus resultados haciendo clic en el botón TOTALES:<BR>
                        a. 45 + 20 + 6 =  <span id="a"></span><br>
                        b. 45 - 20 + 6 =  <span id="b"></span><br>
                        c. 45 + 20 - 6 =  <span id="c"></span><br>
                        d. 45 - 20 - 6 =  <span id="d"></span><br>
                        e. -45 + 20 + 6 =  <span id="e"></span><br>
                        f. 50 - 120 - 60 =  <span id="f"></span><br>
                        g. 9 - 29 + 60 =  <span id="g"></span><br>
                        h. 70 - 200 - 46 + 15=  <span id="h"></span><br>
                        i. -345 + 920 + 600 =  <span id="i"></span><br>
                        j. -85 -520 -980 =  <span id="j"></span><br><br>
                        <input type="button" onclick="totales()" value="TOTALES"/><br/><br-->
                        </p>
                        <p>
                          <b>ACTIVIDAD #2</b> <br />
                          1. Indicar en los siguientes fraccionarios cuál es el
                          numerador y cuál es el denominador:<br />
                          a. 2/5<br />
                          b. 3/7<br />
                          c. 4/25<br />
                          d. 231/45<br />
                          2. Indicar en los siguientes fraccionarios cuál de los
                          dos números indica las partes en que se dividen las
                          unidades y cual número indica las partes que se
                          toman.<br />
                          a. 1/2<br />
                          b. 6/12<br />
                          c. 15/30<br />
                          d. 11/5<br />
                          e. 6/3<br />
                          3. Mostrar en un dibujo la representación de cada una
                          de las fracciones mostradas en los puntos 1 y 2. Por
                          ejemplo para el fraccionario 2/5 hacer el dibujo de un
                          lápiz que divide en cinco partes y toma dos.<br />
                          4. Cuáles de estas funciones son PROPIAS y cuáles son
                          IMPROPIAS, explicar el porque en cada caso.<br />
                          a. 1/2<br />
                          b. 6/12<br />
                          c. 15/30<br />
                          d. 11/5<br />
                          e. 6/3<br />
                          5. Realizar la operación e indicar cuáles de las
                          siguientes parejas de fracciones son EQUIVALENTES y
                          cuáles no.<br />
                          a. 2/5 y 3/7<br />
                          b. 2/4 y 4/8<br />
                          c. 20/3 y 15/5<br />
                          d. 10/5 y 8/4<br />
                          6. Mostrar el proceso que realiza para solucionar las
                          siguientes operaciones y colocar el resultado
                          final.<br />
                          a. 5/3 + 4/3<br />
                          b. 12/9 + 5/8<br />
                          c. 25/7 - 9/2<br />
                          d. 45/8 - 25/5<br />
                          e. 54/3 * 30/5<br />
                          f. 98/45 ÷ 22/7<br />
                          g. 8/7 ÷ 22/7<br />
                          h. 35/9* 4/7<br />
                        </p>
                        <p>
                          <b>ACTIVIDAD #3</b> <br />
                          En un juego virtual de futbolin le dan 5000 puntos
                          cuando comienza el juego y por cada gol anotado le
                          incrementan 300 puntos. Para este caso formular la
                          función lineal, luego la tabla de valores con la que
                          debe presentar el gráfico. Indicar cuáles son los
                          elementos de la función lineal que acaba de crear
                          según su forma canonica y = mx + b.<br />

                          <b>ACTIVIDAD #4</b> <br />
                          Utilizándo la estructura de la regla de tres simple
                          responda a las preguntas:<br />
                          1. ¿Cuántos kilometros hay en 500 metros?<br />
                          2. ¿Cuántos días ha vivido desde que nació?<br />
                          3. ¿Cuántas horas ha vivido desde que nació?<br />
                          4. Para aplicar una vacuna se debe tener en cuenta el
                          peso de la persona ya que por cada kilogramo que pese
                          la persona solo se pueden aplicar 5ml:<br />
                          a. ¿Cuál es su peso?<br />
                          b. ¿Cuántos mililitros de la vacuna le pueden aplicar
                          a usted?.<br />
                          5. ¿Cuántas kilogramos tiene un bus que pesa 15
                          toneladas?. <br />
                        </p>
                      </v-card-text>
                    </v-card>
                  </v-window-item>
                </v-window>
              </v-col>
            </v-row>
          </div>
        </v-card-text>
      </v-responsive>
    </v-card>
    <br /><br />
  </div>
</template>

<script>
import explorar from "../views/Fexploracion.vue";
import estructurar from "../views/Fasestructuracion.vue";
import aplicar from "../views/Faseaplicacion.vue";
import transferir from "../views/Fasetransferencia.vue";
import validar from "../views/Fasevalidacion.vue";
export default {
  components: {
    explorar,
    estructurar,
    aplicar,
    transferir,
    validar,
  },
  name: "fases",
  data() {
    return {
      show: true,
      exploracion: false,
      estructuracion: false,
      aplicacion: false,
      transferencia: false,
      validacion: false,
      nombrefase:
        "Para ver la fase presione el botón que le corresponde para ocultarla presione de nuevo",
      title2: "Aprendizaje siglo XXI",
      itemsMath: [
        { title: "Exploracion", icon: "mdi-home", path: "/Faseexploracion" },
        {
          title: "estructuracion",
          icon: "mdi-book-open-page-variant",
          path: "/Fasestructuracion",
        },
        {
          title: "aplicacion",
          icon: "mdi-book-open-outline",
          path: "/Faseaplicacion",
        },
        {
          title: "transferencia",
          icon: "mdi-book-open-page-variant-outline",
          path: "/Fasetransferencia",
        },
        {
          title: "validacion",
          icon: "mdi-book-open-page-variant-outline",
          path: "/Fasevalidacion",
        },
      ],
      festructuracion: false,

      cards: [
        {
          title: "ACTIVIDADES DE EXPLORACIÓN",
          src: "https://cdn.vuetifyjs.com/images/cards/house.jpg",
          flex: 12,
        },
      ],
      length: 3,
      n:3,
      window: 0,
    };
  },
};
</script>
<style>
.texto {
  margin: 2em;
  padding: 1em;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.8s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0.3;
}
.fases{
  color:"blue",
   
}
</style>