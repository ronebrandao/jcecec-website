<template>
  <div class="speakers">
    <Speaker v-for="(speaker, index) in speakers" v-bind:speaker="speaker" v-bind:key="index" />
  </div>
</template>

<script lang="ts">

import { Component, Vue, Prop } from "vue-property-decorator";
import Speaker from "@/components/organization/Speaker.vue";

@Component({
  components: {
    Speaker,
  }
})

export default class PhotoHeader extends Vue {

  @Prop(Object) private speakers: any;

  constructor() {
    super();
  }
}
</script>

<style>
.speakers {
  margin: 25px 0;
}
.speakers .speaker {
  margin-bottom: 85px;
}
</style>

