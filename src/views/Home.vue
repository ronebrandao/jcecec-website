<template>
  <v-app class="home" id="inspire">
    <Carousel/>

    <About/>

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
            <v-btn color="primary">Inscreva-se</v-btn>
          </v-flex>
          <v-flex xs12 md3>
            <v-btn color="primary">Submissões</v-btn>
          </v-flex>
        </v-layout>
      </v-container>
    </div>

       <v-parallax
      dark
      src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
    >
      <v-layout
        row
        wrap
        mt-5
        align-center
      >
        <v-flex xs12 md6>
          <h5>QUANDO /</h5>
          <span id="quando">De 06 a 09 de novembro de 2019</span>
        </v-flex>
        <v-flex xs12 md6>
          <h5>ONDE /</h5>
          <span id="onde">Escola de Ciências Exatas e da Computação <br>
                Pontifícia Universidade Católica de Goiás</span> <br>
          <span id="onde-endereco">Av, 1ª Avenida, 458-590 - Setor Leste Universitário, <br>
          Goiânia - GO, 74605-020</span>
        </v-flex>


      </v-layout>
    </v-parallax>

    
    <Speakers/>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue'; 
import Carousel from '@/components/home/Carousel.vue';
import Speakers from '@/components/home/Speakers.vue';
import About from '@/components/home/About.vue';

@Component({
  components: {
    HelloWorld,
    Carousel,
    Speakers,
    About
  },
})

export default class Home extends Vue {
  constructor() {
    super();
  }


}
</script>

<style>



#sobre p{
  font-size: 24px;
}

#inscricoes span {
  font-size: 18px;
}

#quando, #onde {
  font-size: 24px;
}
</style>

