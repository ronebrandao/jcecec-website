<template>
  <div>
    <v-dialog v-model="dialog" persistent max-width="800px">
      <v-form ref="form" v-model="valid" @submit.prevent="submit">
        <v-card>
          <v-card-title>
            <span class="headline">Revisão</span>
          </v-card-title>
          <v-card-text>
            <v-container grid-list-md>
              <v-layout wrap>
                <v-flex xs12>
                  <v-radio-group v-for="(item) in items" :key="item.title" v-model="item.group">
                    <template v-slot:label>
                      <div>
                        <strong>{{item.title}}</strong>
                        {{item.subtitle}}
                      </div>
                    </template>
                    <v-radio
                      v-for="(item, index) in item.options"
                      :key="index"
                      :label="item.text"
                      :value="item.value"
                    ></v-radio>
                  </v-radio-group>
                  <v-textarea solo label="Mensagem para o autor" v-model="mensagemAutor" required></v-textarea>
                  <v-textarea
                    solo
                    label="Mensagem para a organização"
                    v-model="mensagemOrganizacao"
                    required
                  ></v-textarea>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="error" flat text @click="hideDialog">Cancelar</v-btn>
            <v-btn type="submit" flat color="success" @click="submit">Submeter</v-btn>
          </v-card-actions>
        </v-card>
      </v-form>
    </v-dialog>
  </div>
</template>

<script lang="ts">
import { Vue, Prop, Component, Watch, Inject } from "vue-property-decorator";
import { mixins } from "vue-class-component";
import { submitWork } from "@/services/api/submission";
import { getProofread, Proofread } from "@/services/api/proofreads";
import LoaderMixin from "@/mixins/loader";
import NotificationMixin from "@/mixins/notification";

@Component
export default class ProofcheckForm extends mixins(
  LoaderMixin,
  NotificationMixin
) {
  @Prop({ type: Boolean, default: false }) private showDialog: boolean;
  @Prop(Number) private submissionId: number;
  private dialog: boolean = false;
  private valid: boolean = false;
  private title: string = "";
  private mensagemAutor = "";
  private mensagemOrganizacao = "";

  private items = [
    {
      group: 0,
      title: "Originalidade do trabalho: ",
      subtitle:
        "Como você avalia a originalidade do trabalho apresentado nesse artigo?",
      options: [
        { value: 5, text: "5. Muito original" },
        { value: 4, text: "4. Originalidade acima da média" },
        { value: 3, text: "3. Originalidade média" },
        { value: 2, text: "2. Pouca originalidade" },
        { value: 1, text: "1. Nenhuma originalidade" }
      ]
    },
    {
      group: 0,
      title: "Contribuição para a área: ",
      subtitle: "Como você avalia a contribuição do artigo para a área?",
      options: [
        { value: 5, text: "5. Grande contribuição para a área" },
        { value: 4, text: "4. Contribuição significante" },
        { value: 3, text: "3. Contribuição pequena, mas clara" },
        { value: 2, text: "2. Pouca contribuição" },
        {
          value: 1,
          text: "1. Nenhuma contribuição discernível para a área"
        }
      ]
    },
    {
      group: 0,
      title: "Qualidade técnica: ",
      subtitle:
        "Como você avalia a qualidade técnica do trabalho apresentado nesse artigo?",
      options: [
        { value: 5, text: "5. Excelente" },
        { value: 4, text: "4. Boa" },
        { value: 3, text: "3. Média" },
        { value: 2, text: "2. Baixa" },
        {
          value: 1,
          text: "1. Inaceitável"
        }
      ]
    },
    {
      group: 0,
      title: "Organização e apresentação: ",
      subtitle: `Como você avalia a legibilidade, clareza e organização desse artigo?
         As citaçôes e formatação estão de acordo com o estilo da conferência?`,
      options: [
        { value: 5, text: "5. Excelente" },
        { value: 4, text: "4. Boa" },
        { value: 3, text: "3. Média" },
        { value: 2, text: "2. Baixa" },
        {
          value: 1,
          text: "1. Inaceitável"
        }
      ]
    },
    {
      group: 0,
      title: "Recomendação para esse trabalho: ",
      subtitle: "O que você recomenda para esse artigo?",
      options: [
        {
          value: 5,
          text:
            "5. Deve ser aceito - Tenho fortes argumentos a favor da aceitação"
        },
        {
          value: 4,
          text:
            "4. Aceitação fraca - Não irei lutar fortemente pela aceitação desse trabalho"
        },
        { value: 3, text: "3. Neutro - Não tenho certeza" },
        {
          value: 2,
          text: "2. Rejeição frace - Não irei lutar fortemente contra"
        },
        {
          value: 1,
          text:
            "1. Não deve ser aceito - Tenho fortes argumentos a favor da não aceitação"
        }
      ]
    },
    {
      group: "",
      title: "Confiança do revisor: ",
      subtitle: "Qual é a sua confiança a respeito dessa revisão?",
      options: [
        { value: 3, text: "Sou um especialista na área" },
        {
          value: 2,
          text: "Sou familiarizado com trabalho nessa área"
        },
        { value: 1, text: "Não sou um especialista na área" }
      ]
    },
    {
      group: "",
      title: "Categoria: ",
      subtitle: "Em qual categoria o trabalho se enquadra?",
      options: [
        { value: "oral-presentation", text: "Apresentação Oral" },
        { value: "poster", text: "Poster" }
      ]
    },
    {
      group: "",
      title: "Indicação: ",
      subtitle: "Indicaria esse trabalho ao prêmio de melhor artigo da área?",
      options: [{ value: "sim", text: "Sim" }, { value: "nao", text: "Nao" }]
    }
  ];

  constructor() {
    super();
  }

  @Watch("showDialog")
  private showDialogChanged(newValue: boolean, oldValue: boolean) {
    this.dialog = newValue;
    this.shownDialog();
  }

  private shownDialog(): void {
    if (this.submissionId !== 0) {
      // this.showLoader();
      getProofread(this.submissionId)
        .then(result => {
          if (result.success) {
            this.mapValues(result.data);
          }
          // this.hideLoader();
        })
        .catch(err => {
          console.log(err);
          // this.hideLoader();
        });
    }
  }

  private hideDialog() {
    this.$emit("hidden");
  }

  private mapValues(proofRead: Proofread) {
    this.items[0].group = proofRead.originalidade;
    this.items[1].group = proofRead.contribuicao;
    this.items[3].group = proofRead.qualidade;
    this.items[4].group = proofRead.organizacao;
    this.items[5].group = proofRead.recomendacao;
    this.items[6].group = proofRead.confianca_revisor;
    this.items[7].group = proofRead.categoria;
    this.items[8].group = proofRead.indicacao;

    this.mensagemAutor = proofRead.mensagem_autor;
    this.mensagemOrganizacao = proofRead.mensagem_organizacao;
  }

  private async submit() {
    this.showWarningNotification("Função indisponível");
  }
}
</script>

<style scoped>
#wrapper {
  display: flex;
  justify-content: center;
}
</style>
