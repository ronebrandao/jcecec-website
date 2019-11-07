<template>
  <v-layout>
    <v-dialog v-model="dialog" persistent max-width="600px">
      <v-card>
        <v-card-title>
          <span class="headline">Submissão</span>
        </v-card-title>
        <v-card-text>
          <v-container grid-list-md>
            <v-layout>
              <v-flex xs12>
                <span class="category">
                  <b>N° de revisões:</b>
                </span>
              </v-flex>
            </v-layout>
            <v-layout wrap>
              <v-flex xs12>
                <span class="category">
                  <b>Originalidade:</b>
                </span>
              </v-flex>
              <v-flex xs12>
                <span class="category">
                  <b>Contribuição para a área:</b>
                </span>
              </v-flex>
              <v-flex xs12>
                <span class="category">
                  <b>Qualidade técnica:</b>
                </span>
              </v-flex>
              <v-flex xs12>
                <span class="category">
                  <b>Organização e apresentação:</b>
                </span>
              </v-flex>
              <v-flex xs12>
                <span class="category">
                  <b>Recomendação para esse trabalho:</b>
                </span>
              </v-flex>
              <v-flex xs12>
                <span class="category">
                  <b>Confiança do revisor:</b>
                </span>
              </v-flex>
              <v-flex xs12>
                <span class="category">
                  <b>Categoria:</b>
                </span>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="error" flat text @click="hideDialog">Cancelar</v-btn>
          <v-btn type="submit" flat color="success">Submeter</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>
</template>

<script lang="ts">
import { Vue, Prop, Component, Watch, Inject } from "vue-property-decorator";
import { mixins } from "vue-class-component";
import { submitWork } from "@/services/api/submission";
import LoaderMixin from "@/mixins/loader";
import NotificationMixin from "@/mixins/notification";

@Component
export default class ProofreadsSummary extends mixins(
  LoaderMixin,
  NotificationMixin
) {
  @Prop({ type: Boolean, default: false }) showDialog: boolean;
  private dialog: boolean = false;

  private title: string = "";

  @Watch("showDialog")
  showDialogChanged(newVal: boolean) {
    this.dialog = newVal;
  }

  private hideDialog() {
    this.$emit("hidden");
  }
}
</script>

<style scoped>
#wrapper {
  display: flex;
  justify-content: center;
}

.headline {
  color: #272727 !important;
}

.category {
  font-size: 14px;
  color: #272727;
}
</style>
