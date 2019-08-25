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
main h1, main h2, main h3, main h4, main h5, main h6 {
  text-transform: uppercase;
  font-weight: 540;
  color: #2776f5;
}
main p {
  text-align: justify;
}
main > div:not(:last-child) {
  margin-bottom: 42px;
}

</style>

