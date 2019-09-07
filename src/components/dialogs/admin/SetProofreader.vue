<template>
  <v-layout>
    <v-dialog v-model="dialog" persistent max-width="400">
      <v-card>
        <v-card-text>
          <v-autocomplete
            :items="revisores"
            :label="'Revisores'"
            v-model="revisor"
            no-data-text="Nenhum revisor encontrado."
            box
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
  private revisor: any = null;
  private revisores: any = null;
  private submissionId: any = null;

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
    this.revisor = null;
    this.submissionId = null;
    this.$emit("hidden");
  }

  private setProofreader() {
    this.showLoader();
    setSubmissionProofreader(this.submissionId, this.revisor)
      .then((resp: any) => {
        if (resp.success) {
          this.showSuccessNotification("Revisor atribuido com sucesso!");
        }
        this.hideLoader();
        this.hideDialog();
      })
      .catch(err => {
        this.showErrorNotification("Ocorreu um erro ao atribuir o revisor.");
        this.hideLoader();
      });
  }
}
</script>

