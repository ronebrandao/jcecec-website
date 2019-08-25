<template>
    <main>
      <slot></slot>
    </main>
</template>

<script lang="ts">

import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {
  }
})

export default class Main extends Vue {

  constructor() {
    super();
  }
}
</script>

<style scoped>

main {
  text-align: left;
  padding: 100px 14.6484375vw;
}

</style>

