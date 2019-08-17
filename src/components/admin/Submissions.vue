<template>
  <div>
    <v-container class="mt-5 form-wrapper">
      <v-toolbar flat color="white">
        <v-toolbar-title>Submissões</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-text-field
          v-model="search"
          append-icon="search"
          label="Pesquisar"
          single-line
          hide-details
        ></v-text-field>
      </v-toolbar>
      <v-data-table
        :headers="headers"
        :items="submissions"
        :loading="loading"
        :search="search"
        v-model="selected"
        item-key="id"
        select-all
        rows-per-page-text="Itens por página:"
        no-data-text="Ops! Parece que você ainda não tem nenhuma submissão."
        class="elevation-1"
      >
        <template v-slot:items="props">
          <td>
            <v-checkbox v-model="props.selected" primary hide-details></v-checkbox>
          </td>
          <td>{{ props.item.id }}</td>
          <td class="text-xs-center">{{ props.item.title }}</td>
          <td class="text-xs-center">
            <v-btn small :color="props.item.color">{{ props.item.status }}</v-btn>
          </td>
          <td class="text-xs-center">{{ props.item.created_at }}</td>
          <td class="text-xs-center">
            <v-tooltip bottom>
              <template v-slot:activator="{ on }">
                <v-btn
                  fab
                  dark
                  small
                  color="primary"
                  v-on="on"
                  @click="downloadFile(props.item.file_url, props.item.title)"
                >
                  <v-icon dark>cloud_download</v-icon>
                </v-btn>
              </template>
              <span>Baixar arquivo</span>
            </v-tooltip>
            <v-tooltip bottom>
              <template v-slot:activator="{ on }">
                <v-btn
                  fab
                  dark
                  small
                  v-on="on"
                  @click="downloadFile(props.item.file_url, props.item.title)"
                >
                  <v-icon dark>rate_review</v-icon>
                </v-btn>
              </template>
              <span>Revisar submissão</span>
            </v-tooltip>
          </td>
        </template>
        <template v-slot:no-results>
          <v-alert
            :value="true"
            color="error"
            icon="warning"
          >Sua pesquisa por "{{ search }}" não teve nenhum resultado.</v-alert>
        </template>
      </v-data-table>
      <SubmissionForm />
    </v-container>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { mixins } from "vue-class-component";
import LoaderMixin from "@/mixins/loader";
import SubmissionForm from "@/components/dialogs/admin/SubmissionForm.vue";
import { getUserSubmissions, downloadFile } from "@/services/api/submission";
import NotificationMixin from "../../mixins/notification";
import { saveAs } from "file-saver";

interface Submission {
  id: number;
  title: string;
  status: string;
  created_at: string;
  color: string;
}

@Component({
  components: {
    SubmissionForm
  }
})
export default class Submissions extends mixins(
  LoaderMixin,
  NotificationMixin
) {
  private showDialog: boolean = false;
  private loading = false;
  private search = "";
  private selected: any = [];
  private date: Date = null;
  private headers = [
    {
      text: "Número",
      align: "center",
      value: "id"
    },
    { text: "Título", align: "center", value: "title" },
    { text: "Status", align: "center", value: "status" },
    { text: "Data de submissão", align: "center", value: "created_at" },
    { text: "", align: "center", value: "actions" }
  ];

  private submissions: any = [];

  private created() {
    this.loading = true;
    getUserSubmissions(this.$store.state.user.id)
      .then(result => {
        this.loading = false;
        if (result.success) {
          result.data.forEach((item: Submission) => {
            item.created_at = new Date(item.created_at).toLocaleDateString();
            item.color = this.mapStatus(item.status).color;
            item.status = this.mapStatus(item.status).text;
          });

          this.submissions = result.data;
        }
      })
      .catch(err => {
        this.loading = false;
      });
  }

  private downloadFile(fileUrl: string, title: string) {
    downloadFile(
      fileUrl.substring(fileUrl.lastIndexOf("/") + 1, fileUrl.length) // gambi braba
    )
      .then(file => {
        saveAs(file, title);
      })
      .catch(err => {
        this.showErrorNotification(
          "Ocorreu um erro ao realizar o download do arquivo."
        );
      });
  }

  private mapStatus(status: string) {
    if (status === "pendente") {
      return { color: "", text: "PENDENTE" };
    } else if (status === "pendente-em-revisao") {
      return { color: "warning", text: "PENDENTE - EM REVISÃO" };
    } else if (status === "reprovado") {
      return { color: "error", text: "REPROVADO" };
    } else if (status === "aprovado") {
      return { color: "success", text: "APROVADO" };
    }
  }
}
</script>

 
<style scoped>
.form-wrapper {
  max-width: 95%;
  box-shadow: 0 15px 30px 0 rgba(0, 0, 0, 0.11),
    0 5px 15px 0 rgba(0, 0, 0, 0.08);
  border-radius: 10px;
}

.status {
  padding: 5px 10px;
}

table td,
table th {
  font-size: 1.2em !important;
}
</style>
