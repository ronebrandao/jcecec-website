<template>
  <v-layout row wrap>
    <v-flex xs12>
      <v-carousel hide-controls hide-delimiters height="900">
        <v-carousel-item v-for="(item,i) in items" :key="i" :src="item.src" hide-controls>
          <v-container fill-height>
            <v-layout align-center fill-height justify-center>
              <div class="banner">
                <img src="assets/img/logo-clean.webp" class="logo" />
                <img src="assets/img/logo-clean.webp" class="logo back" />
                <div>
                  <span class="date">6 a 9 de Novembro</span>
                </div>
                <hr />
                <div>
                  <span class="jcecec">IV JCECEC</span>
                </div>
                <div>
                  <span
                    class="jcecec-sub"
                  >Jornada Científica da Escola de Ciências Exatas e Computação</span>
                </div>
                <hr />
                <div>
                  <span id="description">
                    NOVAS TECNOLOGIAS NA
                    <br />EDUCAÇÃO E NA INDÚSTRIA
                  </span>
                </div>
              </div>
            </v-layout>
          </v-container>
        </v-carousel-item>
      </v-carousel>
    </v-flex>
  </v-layout>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Carousel extends Vue {
  private items: any;

  constructor() {
    super();

    this.items = [
      {
        src: "/assets/img/slider/3.jpg"
      }
      // {
      //   src: "/assets/img/slider/4.jpg"
      // },
      // {
      //   src: "/assets/img/slider/1.jpg"
      // }
    ];
  }
}
</script>

<style scoped>
.banner {
  padding: 30px 120px;
  background-color: #2364adc4;
  color: #fff;
}

@media screen and (max-width: 576px) {
  .banner {
    padding: 30px 5px;
  }
}

.banner span {
  text-align: center;
}

#description {
  letter-spacing: 3px;
}

.jcecec {
  text-transform: uppercase;
  font-size: 5em;
  font-weight: 300;
}

.jcecec-sub {
  font-size: 0.9em;
}

#logo {
  width: 30%;
  height: 30%;
}

.banner {
  position: relative;
  padding: 30px 150px 60px 250px !important;
}

hr {
  border: 1px solid #fff;
}
</style>
