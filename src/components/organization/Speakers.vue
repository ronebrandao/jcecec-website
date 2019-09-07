<template>
  <div>
    <v-carousel light hide-delimiters height="auto">
      <v-carousel-item v-for="(item, i) in speakersPaginated" :key="i">
        <div class="speakers" v-for="(container, j) in speakersPaginated" :key="j">
          <Speaker v-for="(speaker, index) in item.array" v-bind:speaker="speaker" v-bind:key="index" />
        </div>
      </v-carousel-item>
    </v-carousel>
    
    <!-- <div class="speakers">
      <Speaker v-for="(speaker, index) in speakers" v-bind:speaker="speaker" v-bind:key="index" />
    </div> -->
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
  @Prop(Number) private per_page: number=2;

  private speakersPaginated: any = null;

  constructor() {
    super();

    if(this.per_page){
      
      let pages = this.speakers.length/this.per_page | 0 + (() => (this.speakers.length%this.per_page == 0) ? 0 : 1)();
      this.speakersPaginated = [];
      /* let objectsPerPage = []; */


      for(let i = 0; i < pages; i++){
        this.speakersPaginated.push(
          (() => {
            let objectsPerPage: any = [];

            if(this.speakers.length)
              for(let j = 0; j < this.per_page; j++)
                objectsPerPage.push(this.speakers.shift());

            return {
              array: objectsPerPage
            };
          })()
        );
      }
      console.log(this.speakersPaginated);
    }
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

.v-carousel {
  box-shadow: unset;
  -webkit-box-shadow: unset;
  padding: 0 50px;
  box-sizing: content-box;
  position: relative;
  left: -50px;
}
</style>

