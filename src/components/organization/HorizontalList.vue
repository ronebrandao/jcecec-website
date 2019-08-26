<template>
  <div>
    <h3 v-bind:style="{backgroundColor: color ? color : '#2776f5'}">{{title}}</h3>
    <div v-bind:style="{borderBottom: color ? `2px solid ${color}` : '2px solid #2776f5'}">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component({
  components: {}
})
export default class HorizontalList extends Vue {
  @Prop(String) private title: string;
  @Prop(String) private color: string;

  constructor() {
    super();
  }
}
</script>

<style scoped>
div > h3 {
  padding: 15px 0;
  color: white;
  text-align: center;
  text-transform: uppercase;
}
div > div {
  display: flex;
  justify-content: space-evenly;
  padding: 42px 0;
}
</style>

