<template>
  <div class="columns-component">
    <slot></slot>
  </div>
</template>

<script lang="ts">

import { Component, Vue, Prop } from "vue-property-decorator";

@Component({
  components: {
    
  }
})

export default class Columns extends Vue {

  constructor() {
    super();
  }
}
</script>

<style>

.columns-component {
  display: flex;
}
.columns-component > * {
  flex: 1;
  margin: 0 7.5px;
}
.columns-component > * p {
  text-align: inherit;
}
.columns-component > *:first-child {
  margin-left: 0;
}
.columns-component > *:last-child {
  margin-right: 0;
}

</style>