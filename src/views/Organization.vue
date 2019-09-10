<template>
  <div class="obs-page">
    <PhotoHeader title="Organização" description="Descrição dos organizadores da IV JCECEC"></PhotoHeader>

    <Main>
      <div v-for="(organizador, index) in organizacao" :key="index">
        <a
          href="javascript:void(0);"
          :class="{'no-dialog': !organizador.participantes}"
          @click="showInfo(organizador)"
        >{{organizador.coordenador}}</a>
        <p class="font-italic">{{organizador.area}}</p>
      </div>
      <v-divider></v-divider>
      <div class="row mt-5">
        <div class="col-md-6 text-center">
          <h6>Realização</h6>
          <img src="/assets/img/puc.png" width="60%" />
        </div>
        <div class="col-md-6 text-center">
          <h6>Apoio</h6>
          <img src="/assets/img/fapeg.png" width="60%" />
        </div>
      </div>
    </Main>
    <Comissao :organizacao="comite" :showDialog="showComissao" @hidden="hideComissao" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import PhotoHeader from "@/components/organization/PhotoHeader.vue";
import Main from "@/components/organization/Main.vue";
import Comissao from "@/components/dialogs/Comissao.vue";

@Component({
  components: {
    PhotoHeader,
    Main,
    Comissao
  }
})
export default class Organization extends Vue {
  private showComissao = false;
  private comite = {};
  private organizacao = [
    {
      coordenador: "Prof. Dr. Clarimar José Coelho - PUC Goiás",
      area: "Coordenador da IV JCECEC"
    },
    {
      coordenador: "Profa. Dra. Carmen Cecília Centeno – PUC Goiás",
      area: "Coordenadora do comitê científico",
      participantes: [
        "Prof. Dr. Adelino Candido Pimenta - PUC Goiás",
        "Prof. Dr. Anderson da Silva Soares – UFG",
        "Prof. Dr. Antônio Newton Borges – PUC Goiás",
        "Prof. Dr. Arlindo Rodrigues Galvão Filho – PUC Goiás",
        "Prof. Dr. Cloves Gonçalves Rodrigues – PUC Goiás",
        "Prof. Dr. Danns Pereira Barbosa – PUC Goiás",
        "Prof. Dr. Duelci Aparecido de Freitas Vaz – PUC Goiás",
        "Prof. Dr. Eduardo Noronha de Andrade Freitas – IFG",
        "Prof. Dr. Gustavo Teodoro Laureano - UFG",
        "Prof. Dr. Marcos Lajovic Carneiro – PUC Goiás",
        "Profa. Dra. Michelle Pereira Quintino – PUC Goiás",
        "Prof. Dr. Rafael Viana de Carvalho – PUC Goiás",
        "Prof. Dr. Raffael Costa Figueiredo Pinto - PUC Goiás",
        "Prof. Dr. Sibelius Lellis Vieira - PUC Goiás",
        "Prof. Dr. Sirlon Diniz de Carvalho – IFG - Goiânia",
        "Profa. Dra. Solange da Silva - PUC Goiás",
        "Prof. Dr. Ulisses Rodrigues Afonseca – IFG-Luziânia"
      ]
    },
    {
      coordenador: "Prof. Dr. Arlindo Rodrigues Galvão Filho – PUC Goiás",
      area: "Coordenador do comitê organizacional",
      participantes: [
        "Prof. Dr. Raffael Costa Figueiredo Pinto - PUC Goiás",
        "Prof. Dr. Anderson Costa da Silva – PUC Goiás",
        "Prof. Dr. Danns Pereira Barbosa – PUC Goiás",
        "Prof. Dr. Vicente Paulo de Camargo – PUC Goiás",
        "Prof. Dr. Arlindo Rodrigues Galvão Filho – PUC Goiás",
        "Prof. Dr. Rafael Viana de Carvalho – PUC Goiás",
        "Prof. Ms. Joriver Rodrigues Canedo – PUC Goiás",
        "Profa. Ma. Lucilia Gomes Ribeiro – PUC Goiás",
        "Profa. Ma. Ludmilla Reis Pinheiro dos Santos – PUC Goiás",
        "Profa. Ma. Mirian Sandra Rosa Gusmão – PUC Goiás",
        "Prof. Ms. Gustavo Siqueira Vinhal – PUC Goiás",
        "Prof. Esp. Gildenor de Souza Amorim Cavalcante – PUC Goiás",
        "Prof. Msc. Adriana dos Reis Ferreira – IFG-Goânia",
        "Prof. Msc. Christiane Borges Santos – IFG – Luziânia",
        "Prof. Esp. Viviane Bessa Ferreira – IFG",
        "Prof. Msc. Carina Calixto Ribeiro de Araujo - IFG-Goiânia",
        "Estudante Douglas Vieira do Nascimento – PUC Goiás",
        "Estudante Rone Cesar Brandão – PUC Goiás"
      ]
    },
    {
      coordenador: "Prof. Dr. Cloves Gonçalves – PUC Goiás",
      area: "Coordenador de postêres"
    },
    {
      coordenador: "Representação Estudantil",
      area: "Centros Acadêmicos",
      participantes: [
        "Centro Acadêmico de Física",
        "Centro Acadêmico de Matemática",
        "Centro Acadêmico de Química",
        "Centro Acadêmico de Ciência da Computação",
        "Centro Acadêmico de Engenharia de Computação",
        "Centro Acadêmico de Desenvolvimento de Sistemas"
      ]
    }
  ];
  private showInfo(organizador: any) {
    if (organizador.participantes) {
      this.comite = organizador;
      this.showComissao = true;
    }
  }

  private hideComissao() {
    this.showComissao = false;
  }
}
</script>

<style lang="scss" scoped>
a {
  text-transform: uppercase;
  font-weight: 540;
  color: #2776f5;
}

.no-dialog:hover {
  text-decoration: none;
  cursor: inherit;
}
</style>