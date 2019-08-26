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

  @Prop(Object) private speakers: object;

  constructor() {
    super();


    this.speakers = [
      {
        name: "Speaker 1",
        description: "Hello, i'm the first speaker"
      },
      {
        name: "Speaker 2",
        description: "Hello, i'm the second speaker"
      },
      {
        name: "Speaker 3",
        description: "Hello, i'm the third speaker"
      },
    ];

  }
}
</script>

<style>

</style>

