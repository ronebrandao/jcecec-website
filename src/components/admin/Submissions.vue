<template>
  <div>
    <h3 class="mt-5 mb-2">Submissões</h3>
    <v-container class="form-wrapper">
      <v-data-table
        :headers="headers"
        :items="submissions"
        no-data-text="Ops! Parece que você ainda não tem nenhuma submissão."
        class="elevation-1"
      >
        <template v-slot:items="props">
          <td>{{ props.item.id }}</td>
          <td class="text-xs-center">{{ props.item.title }}</td>
          <td class="text-xs-center">
            <v-btn small :color="props.item.color">{{ props.item.status }}</v-btn>
          </td>
          <td class="text-xs-center">{{ props.item.created_at }}</td>
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
import { getUserSubmissions } from "@/services/api/submission";

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
export default class Submissions extends mixins(LoaderMixin) {
  private showDialog: boolean = false;
  private date: Date = null;
  private headers = [
    {
      text: "Número",
      align: "center",
      value: "number"
    },
    { text: "Categoria", align: "center", value: "category" },
    { text: "Status", align: "center", value: "status" },
    { text: "Data de submissão", align: "center", value: "created_at" }
  ];

  private submissions: any = [];

  private mounted() {
    this.showLoader();
    getUserSubmissions(this.$store.state.user.id)
      .then(result => {
        this.hideLoader();
        if (result.success) {
          result.data.forEach((item: Submission) => {
            item.created_at = new Date(item.created_at).toLocaleDateString();
            item.color = this.mapColor(item.status);
          });

          this.submissions = result.data;
        }
      })
      .catch(err => {
        this.hideLoader();
      });
  }

  private mapColor(status: string) {
    if (status === "pendente") {
      return "";
    } else if (status === "pendente-em-alteracao") {
      return "warning";
    } else if (status === "reprovado") {
      return "error";
    } else if (status === "aprovado") {
      return "success";
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
