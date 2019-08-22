<template>
  <v-app class="home" id="inspire">
    <Carousel />

    <About />

    <Robot />

    <v-layout row wrap>
      <v-flex xs12 sm12>
        <v-parallax dark src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg">
          <v-layout row wrap mt-5 align-center>
            <v-flex xs12 md6>
              <h5>QUANDO /</h5>
              <span id="quando">
                De 06 a 09 de
                <br />novembro de 2019
              </span>
            </v-flex>
            <v-flex xs12 md6>
              <h5>ONDE /</h5>
              <span id="onde">
                Escola de Ciências Exatas e da Computação
                <br />Pontifícia Universidade Católica de Goiás
              </span>
              <br />
              <span id="onde-endereco">
                Av, 1ª Avenida, 458-590 - Setor Leste Universitário,
                <br />Goiânia - GO, 74605-020
              </span>
            </v-flex>
          </v-layout>
        </v-parallax>
      </v-flex>
    </v-layout>

    <ul>
      <li v-for="(speaker,i) in speakers" :key="i">
        <Speakers
          :name="speaker.name"
          :institution="speaker.institution"
          :description="speaker.description"
          :speaking="speaker.speaking"
          :img="speaker.img"
        />
      </li>
    </ul>

    <div mt-5 mb-5 id="inscricoes" class="footer-subscribe">
      <div>
        <v-container>
          <v-layout class="call">
            <v-flex>
              <p>INSCREVA-SE JÁ</p>
            </v-flex>
          </v-layout>
          <v-layout class="call">
            <v-flex>
              <p>tandard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release</p>
            </v-flex>
          </v-layout>
          <v-layout row wrap mt4>
            <v-flex offset-md3 xs12 md3>
              <v-btn color="primary" large>Faça sua inscrição</v-btn>
            </v-flex>
            <v-flex xs12 md3>
              <v-btn large class="btn-submission">Submeta seu artigo</v-btn>
            </v-flex>
          </v-layout>
          <v-layout class="line rights-reserved">
            <v-flex>
              <hr />
              <p>&copy; ndard dummy text ever since the 1500s, when an unknown</p>
            </v-flex>
          </v-layout>
        </v-container>
      </div>
    </div>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HelloWorld from "@/components/HelloWorld.vue";
import Carousel from "@/components/home/Carousel.vue";
import Speakers from "@/components/home/Speakers.vue";
import About from "@/components/home/About.vue";
import Robot from "@/components/home/Robot.vue";

@Component({
  components: {
    HelloWorld,
    Carousel,
    Speakers,
    About,
    Robot
  }
})
export default class Home extends Vue {
  private speakers: any = null;

  constructor() {
    super();

    this.speakers = [
      {
        name: "CARLOS ALBERTO DE NOBREGA",
        institution: "fessor at Hampden-Sydney College in Virginia, looked ",
        speaking: "theory of ethics",
        description:
          "lievable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary,",
        img: "/assets/img/speakers/sp1.jpg"
      },
      {
        name: "CARLOS ALBERTO DE NOBREGA",
        institution: "fessor at Hampden-Sydney College in Virginia, looked ",
        speaking: "theory of ethics",
        description:
          "lievable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary,",
        img: "/assets/img/speakers/sp2.png"
      },
      {
        name: "CARLOS ALBERTO DE NOBREGA",
        institution: "fessor at Hampden-Sydney College in Virginia, looked ",
        speaking: "theory of ethics",
        description:
          "lievable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary,",
        img: "/assets/img/speakers/sp3.png"
      }
    ];
  }
}
</script>

<style>
#sobre p {
  font-size: 24px;
}

#inscricoes span {
  font-size: 18px;
}

.line {
  margin-top: 42px;
  justify-content: center;
  z-index: 100;
}

.call p {
  text-transform: uppercase;
}

.call p:first-child {
  font-size: 40px;
  font-weight: bold;
  color: #ddd;
}

.call p:last-child {
  font-size: 14px;
  color: #ddd;
}

.btn-submission {
  background-color: transparent !important;
  color: #eee !important;
  border: 1px solid #eee;
}

.line > div {
  max-width: 1150px !important;
}

.line hr {
  border: 1px solid #4e6083;
}

.rights-reserved p {
  color: #eee;
  padding: 20px 0 5px;
  justify-content: start;
}

#quando {
  font-size: 32px;
}

#onde {
  font-size: 24px;
}

div > hr {
  color: #cecece;
}

.footer-subscribe {
  background-color: #13264a;
  /* background-color: white; */
}

div > span {
  color: white;
}

/* .v-parallax__image {
  transform: none !important;
  width: 100% !important;
} */
</style>

