<template>
  <div>
    <h3>
      {{title}}
    </h3>
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">

import { Component, Vue, Prop } from "vue-property-decorator";

@Component({
  components: {
    
  }
})


export default class HorizontalList extends Vue {

  @Prop(String) private title: string;

  constructor() {
    super();
  }
}
</script>

<style scoped>

div > h3 {
  padding: 15px 0;
  background-color: #2776f5;
  color: white;
  text-align: center;
  text-transform: uppercase;
}
div > div {
  display: flex;
  justify-content: space-evenly;
  padding: 42px 0;
  border-bottom: 2px solid #2776f5;
}

</style>

