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
          <td>{{ props.item.number }}</td>
          <td class="text-xs-center">{{ props.item.category }}</td>
          <td class="text-xs-center">
            <v-btn small :color="props.item.color">{{ props.item.status }}</v-btn>
          </td>
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

@Component({
  components: {
    SubmissionForm
  }
})
export default class Submissions extends mixins(LoaderMixin) {
  private showDialog: boolean = false;

  private headers = [
    {
      text: "Número",
      align: "center",
      value: "number"
    },
    { text: "Categoria", align: "center", value: "category" },
    { text: "Status", align: "center", value: "status" }
  ];
  // private submissions = [
  //   {
  //     number: "001",
  //     category: "Poster",
  //     status: "Aprovada",
  //     color: "success"
  //   },
  //   {
  //     number: "002",
  //     category: "Artigo Científico",
  //     status: "Revisão Pendente",
  //     color: "warning"
  //   }
  // ];
  private submissions: any = [];
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
