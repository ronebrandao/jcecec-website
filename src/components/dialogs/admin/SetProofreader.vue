<template>
  <v-layout>
    <v-dialog v-model="dialog" max-width="290">
      <v-card>
        <v-card-text>Deseja atribuir esse(s) artigos(s) ao revisor fulano?</v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn color="red darken-1" flat="flat" @click="hideDialog">Cancelar</v-btn>

          <v-btn color="green darken-1" flat="flat" @click="setProofreader">Confirmar</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>
</template>

<script lang="ts">
import { Vue, Prop, Component, Watch, Inject } from "vue-property-decorator";

@Component({
  components: {}
})
export default class SetProofreaderDialog extends Vue {
  @Prop({ type: Boolean, default: false }) private showDialog: boolean;
  private dialog: boolean = false;

  constructor() {
    super();
  }

  @Watch("showDialog")
  private showDialogChanged(newValue: boolean, oldValue: boolean) {
    this.dialog = newValue;
  }

  private hideDialog() {
    this.dialog = false;
  }

  private setProofreader() {
    alert("Brabo");
  }
}
</script>

