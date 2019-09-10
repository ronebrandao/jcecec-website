<template>
  <div id="container-sobre">
    <v-layout p-3 row wrap>
      <v-flex xs12 class="text-xs-left" mt-5>
        <h2>IV Jornada Científica da Escola de Ciências Exatas e da Computação</h2>
      </v-flex>
      <v-flex id="sobre" xs12 class="text-xs-left" mt-3>
        <p>
          emos o prazer de anunciar a realização da IV
          Jornada Científica da Escola de Ciências Exatas e
          da Computação (JCECEC) da Pontifícia Universi-
          dade Católica de Goiás (PUC Goiás) e I Jornada
          Científica Regional (JCR) que será realizada de
          11 a 14 de Novembro de 2019. A IV JCECEC e
          I JCR será a primeira internacional e vai contar
          com pesquisadores do Canadá, Inglaterra e Portu-
          gal. Ainda da tempo de submeter o seu trabalho
          online em http://ecec.pucgoias.edu.br. Os melhores
          trabalhos da IV JCECEC e I JCR serão convidados para publicação na revista da ECEC.
        </p>
      </v-flex>
    </v-layout>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class About extends Vue {}
</script>

<style>
#container-sobre {
  max-width: 1000px !important;
  padding: 0 24px;
  margin: auto;
}
#container-sobre h2 {
  color: #2776f5;
}

@media screen and (max-width: 576px) {
  #sobre p {
    font-size: 18px !important;
  }
}
</style>


