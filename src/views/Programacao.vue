<template>
  <div class="programacao">
    <Main>
      <div>
        <Paragraph title="Título"></Paragraph>
        <div class="list">
          <div class="item" :for="(palestra, i) in palestras" :key="i">
            <div>
              <i :style="{gridArea: 'id'}" class="far fa-calendar-alt" title="Data"></i>
              <i :style="{gridArea: 'ip'}" class="fas fa-map-marker" title="Local"></i>
              <p :style="{gridArea: 'd'}"> {{ palestra.date }} </p>
              <p :style="{gridArea: 'p'}">Lorem ipsum dolor sit amet.</p>
              <i :style="{gridArea: 'it'}" class="far fa-clock"></i>
              <p :style="{gridArea: 't'}">Lorem, ipsum dolor.</p>
            </div>
            <div>
              <h4>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum magnam nisi deserunt ducimus aliquam! Adipisci?
              </h4>
              <h6>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur iusto dolore eum nisi.
              </h6>
            </div>
          </div>
        </div>
      </div>
    </Main>    
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import PhotoHeader from "@/components/organization/PhotoHeader.vue";
import Main from "@/components/organization/Main.vue";
import Paragraph from "@/components/organization/Paragraph.vue";
import HorizontalList from "@/components/organization/HorizontalList.vue";
import Speakers from "@/components/organization/Speakers.vue";
import Columns from "@/components/organization/Columns.vue";
import Organization from "@/components/organization/Names.vue";
import Supporters from "@/components/organization/Supporters.vue";
import speakers from "@/models/speakers";

@Component({
  components: {
    PhotoHeader,
    Main,
    HorizontalList,
    Paragraph,
    Speakers,
    Columns,
    Organization,
    Supporters
  }
})
export default class Programacao extends Vue {

  private palestras: any;

  constructor() {
    super();

    this.palestras = require('@/storage/programacao/palestras');
    console.log(this.palestras);
  }
}
</script>

<style scoped>
.programacao .list {
  display: initial;
}
.programacao .list .item {
  display: flex;
  margin-top: 22px;
}
@media screen and (max-width: 425px) {
  .programacao .list .item {
    flex-direction: column-reverse;
  }
}
.programacao .list .item > div:first-child {
  flex: 5;
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: repeat(4, auto);
  grid-template-areas: "id ip" "d p" "it it" "t t";
  text-align: center;
  padding: 10px;
  background-color: whitesmoke;
  box-shadow: -2px 5px 6px rgba(0, 0, 0, 0.7);
}
@media screen and (max-width: 425px) {
  .programacao .list .item > div:first-child {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, auto);
    grid-template-areas: "id ip it" "d p t";
    background-color: unset;
    box-shadow: unset;
  }
}
.programacao .list .item > div:first-child i {
  font-size: 18pt;
}
.programacao .list .item > div:first-child p {
  margin-top: 10px;
  font-size: 10pt;
  text-align: inherit;
}
@media screen and (max-width: 320px) {
  .programacao .list .item > div:first-child p {
    padding: 0 8px;
  }
}
.programacao .list .item > div:nth-child(2) {
  flex: 18;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 20px;
}
@media screen and (max-width: 425px) {
  .programacao .list .item > div:nth-child(2) {
    margin-left: unset;
    margin-bottom: 15px;
    text-align: center;
  }
}
</style>