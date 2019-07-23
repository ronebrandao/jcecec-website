<template>
    <div id="container-sobre">
      <v-layout p-3 row wrap>
        <v-flex xs12 class="text-xs-justify" mt-5>
          <h2>IV Jornada Científica da Escola de Ciências Exatas e da Computação</h2>
        </v-flex>
        <v-flex id="sobre" xs12 class="text-xs-justify" mt-3>
          <p >A partir da organização da estrutura administrativa da PUC-Goiás em escolas decidiu-se por criar um um evento científico da Escola de Ciências Exatas e da Computação (ECEC) para contemplar a natureza dos seis cursos de graduação que compõem a ECEC: Matemática, Física, Ciência da Computação, Engenharia de Computação, Química e Análise de Desenvolvimento de Sistemas.</p>
          <p>Desta forma, os eventos UCG-COMP e a JORCEX foram unidos e nomeado como Jornada de Científica da ECEC – JCECEC. Sua realização é anual, e ao longo das três edições anteriores foram mais de XX participantes, contemplando mais de YY trabalhos científicos. Pela primeira vez a JCECEC será um evento internacinal</p>
        </v-flex>
      </v-layout>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class About extends Vue {
    
}


</script>

<style>
#container-sobre {
  max-width: 1000px !important;
  padding: 24px;
  margin: auto;
}
#container-sobre  h2 {
  color: #2776f5;
}


</style>


