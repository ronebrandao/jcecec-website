<template>
  <div style="margin:40px 0">
    <div>
      <span class="sub-title text-uppercase">Atenção com as datas</span>
    </div>
    <div style="max-width:700px;margin: 30px auto 10px;">
      <v-data-table
        :headers="headers"
        :items="dates"
        hide-actions
        class="elevation-1"
        item-key="id"
        loading="true"
        no-data-text="Nenhum dado cadastrado"
      ></v-data-table>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component({
  components: {}
})
export default class Dates extends Vue {
  constructor() {
    super();
  }

  private headers = [
    {
      text: "data",
      align: "left",
      value: "date"
    },
    {
      text: "data2",
      align: "right",
      value: "date"
    }
  ];

  private dates = [
    {
      id: 1,
      date: "01-01-2019"
    },
    {
      id: 2,
      date: "01-01-2019"
    },
    {
      id: 3,
      date: "01-01-2019"
    },
    {
      id: 4,
      date: "01-01-2019"
    }
  ];
}
</script>

<style scoped>
.sub-title {
  font-size: 20px;
  color: #0065a0;
  font-weight: 600;
  font-family: "Montserrat", sans-serif;
}
</style>