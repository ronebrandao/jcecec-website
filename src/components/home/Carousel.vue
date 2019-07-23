<template>
  <div>
      <v-carousel
          hide-controls
          hide-delimiters
          height="700">
        <v-carousel-item
          v-for="(item,i) in items"
          :key="i"
          :src="item.src"
          hide-controls
        ></v-carousel-item>
      </v-carousel>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Carousel extends Vue {
    private items: any;

    constructor() {
        super();

        this.items = [
            {
            src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg'
            },
            {
            src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg'
            },
            {
            src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg'
            },
            {
            src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg'
            }
      ]

    }
}


</script>

