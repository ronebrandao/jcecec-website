<template>
  <div class="programacao">
    <Main>
      <div class="list">
        <div class="item">
          <div>
            <div>
              <i class="far fa-calendar-alt" title="Data"></i>
              <p>12/12/1088</p>
            </div>
            <div>
              <i class="fas fa-map-marker" title="Local"></i>
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
            <div>
              <i class="far fa-clock"></i>
              <p>Lorem, ipsum dolor.</p>
            </div>
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

  constructor() {
    super();
  }
}
</script>

<style>
.programacao .list .item {
  display: flex;
}
.programacao .list .item > div :first-child {
  flex: 5;
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: auto auto;
  grid-template-areas: "d p" "t t";
}
.programacao .list .item > div :nth-child(2) {
  flex: 18;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>


.programacao{
  .list{
    
    .item{
      
      display: flex;
      
      >div{
        :first-child{
          flex: 5;
          display: grid;
          grid-template-columns: 50% 50%;
          grid-template-rows: auto auto;
          grid-template-areas:
              "d p"
              "t t";
        }
        
        :nth-child(2){
          flex: 18;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
      }
    }
  }
}