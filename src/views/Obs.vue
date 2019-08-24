<template>
  <div class="obs-page">
    <PhotoHeader
      title="Organização"
      description="Pequena descrição sobre a organização do evento"
    />
  </div>
</template>

<script lang="ts">

import { Component, Vue } from "vue-property-decorator";
import PhotoHeader from "@/components/organization/PhotoHeader.vue";

@Component({
  components: {
    PhotoHeader,
  }
})

export default class Obs extends Vue {

  constructor() {
    super();
  }
}
</script>

<style scoped>

.obs-page {
  /* Header */
}
.obs-page > header {
  height: 320px;
  display: flex;
  align-items: flex-end;
  background-image: url(/assets/img/slider/3.jpg);
  background-size: cover;
}
.obs-page > header > div {
  text-align: left;
  width: 100%;
  padding: 35px 150px;
  display: flex;
  justify-content: space-between;
  color: white;
  background-image: linear-gradient(0deg, black, rgba(255, 255, 255, 0));
}
.obs-page > header > div > div p {
  font-size: 13pt;
}
.obs-page > header > div > div:first-child {
  max-width: calc(50% - 7.5px);
}
.obs-page > header > div > div:last-child {
  max-width: calc(50% - 7.5px);
}

</style>

