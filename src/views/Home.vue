<template>
  <v-app class="home" id="inspire">
    <Carousel />

    <About />

    <Robot />

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

    <div mt-5 mb-5 id="inscricoes">
      <v-container>
        <v-layout row wrap>
          <v-flex offset-md3 xs12 md3>
            <span>Inscrições Gratuitas</span>
          </v-flex>
          <v-flex xs12 md3>
            <span>Instruções para Submissões</span>
          </v-flex>
        </v-layout>
        <v-layout row wrap>
          <v-flex offset-md3 xs12 md3>
            <v-btn color="primary">Faça sua inscrição</v-btn>
          </v-flex>
          <v-flex xs12 md3>
            <v-btn color="primary">Submeta seu artigo</v-btn>
          </v-flex>
        </v-layout>
      </v-container>
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

#quando {
  font-size: 32px;
}

#onde {
  font-size: 24px;
}
</style>

