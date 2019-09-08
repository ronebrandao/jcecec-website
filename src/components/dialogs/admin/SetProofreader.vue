<template>
  <v-layout>
    <v-dialog v-model="dialog" persistent max-width="450">
      <v-card>
        <v-card-title class="headline">Escolha os revisores do trabalho N° {{submissionId}}</v-card-title>
        <v-card-text>
          <v-autocomplete
            :items="revisores"
            :label="'1°'"
            v-model="revisor1"
            no-data-text="Nenhum revisor encontrado."
          ></v-autocomplete>
          <v-autocomplete
            :items="revisores"
            :label="'2°'"
            v-model="revisor2"
            no-data-text="Nenhum revisor encontrado."
          ></v-autocomplete>
          <v-autocomplete
            :items="revisores"
            :label="'3̣°'"
            v-model="revisor3"
            no-data-text="Nenhum revisor encontrado."
          ></v-autocomplete>
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn color="red darken-1" flat="flat" @click="hideDialog">Cancelar</v-btn>

          <v-btn color="green darken-1" flat="flat" @click="setProofreader">Atribuir</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>
</template>

<script lang="ts">
import { Vue, Prop, Component, Watch, Inject } from "vue-property-decorator";
import { mixins } from "vue-class-component";

import { getUsers } from "../../../services/user";
import { setSubmissionProofreader } from "@/services/api/submission";
import NotificationMixin from "@/mixins/notification";
import LoaderMixin from "@/mixins/loader";

@Component({
  components: {}
})
export default class SetProofreaderDialog extends mixins(
  LoaderMixin,
  NotificationMixin
) {
  @Prop({ type: Boolean, default: false }) private showDialog: boolean;
  @Prop(Array) private submission: any[] = [];
  private dialog: boolean = false;
  private revisores: any = null;
  private submissionId: any = null;

  private revisor1: any = null;
  private revisor2: any = null;
  private revisor3: any = null;

  constructor() {
    super();
  }

  @Watch("showDialog")
  private showDialogChanged(newValue: boolean, oldValue: boolean) {
    this.dialog = newValue;
    this.shownDialog();
  }

  @Watch("submission")
  private submissionChanged(newValue: any) {
    this.submissionId = newValue.length > 0 && newValue[0].id;
  }

  private shownDialog() {
    this.showLoader();
    getUsers()
      .then(resp => {
        if (resp.success) {
          this.revisores = resp.data.filter(
            (user: any) => user.type === "proofreader"
          );

          this.revisores = this.revisores.map((revisor: any) => {
            return {
              text: revisor.email,
              value: revisor.id
            };
          });
        }

        this.hideLoader();
      })
      .catch(err => {
        this.showErrorNotification("Ocorreu um erro ao obter os revisores.");
        this.hideLoader();
        this.hideDialog();
      });
  }

  private hideDialog() {
    this.revisor1 = null;
    this.revisor2 = null;
    this.revisor3 = null;
    this.submissionId = null;
    this.$emit("hidden");
  }

  private setProofreader() {
    // this.showLoader();
    // setSubmissionProofreader(this.submissionId, this.revisor)
    //   .then((resp: any) => {
    //     if (resp.success) {
    //       this.showSuccessNotification("Revisor atribuido com sucesso!");
    //     }
    //     this.hideLoader();
    //     this.hideDialog();
    //   })
    //   .catch(err => {
    //     this.showErrorNotification("Ocorreu um erro ao atribuir o revisor.");
    //     this.hideLoader();
    //   });
  }
}
</script>

