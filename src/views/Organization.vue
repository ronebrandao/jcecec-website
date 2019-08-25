<template>
  <div class="obs-page">
    <PhotoHeader title="Organization" description="Short description about the event organization">
	<p>
	  Something to place here, like buttons or links
        </p>
    </PhotoHeader>

    <Main>
      <Paragraph title="Title">
        klokdfpsk kmsfçjkmvs kçsjidsvmk ksçdfvçmso çsfdiofmvk skçvmdfmjkç ksvmdimdçskm skvm km
	  kvsfmfslç kfsvkl klnkdsk n nskkldn nl knk dkkldnklv dfkl kkld kkfk kkk fnsn lfjnjf sfk
	  klokdfpsk kmsfçjkmvs kçsjidsvmk ksçdfvçmso çsfdiofmvk skçvmdfmjkç ksvmdimdçskm skvm km
	  kvsfmfslç kfsvkl klnkdsk n nskkldn nl knk dkkldnklv dfkl kkld kkfk kkk fnsn lfjnjf sfk
	  klokdfpsk kmsfçjkmvs kçsjidsvmk ksçdfvçmso çsfdiofmvk skçvmdfmjkç ksvmdimdçskm skvm km
	  kvsfmfslç kfsvkl klnkdsk n nskkldn nl knk dkkldnklv dfkl kkld kkfk kkk fnsn lfjnjf sfk
       	  klokdfpsk kmsfçjkmvs kçsjidsvmk ksçdfvçmso çsfdiofmvk skçvmdfmjkç ksvmdimdçskm skvm km
	  kvsfmfslç kfsvkl klnkdsk n nskkldn nl knk dkkldnklv dfkl kkld kkfk kkk fnsn lfjnjf sfk
      </Paragraph>

      <Paragraph title="our speakers">
        Waitting for conclusion of small speakers component to place here.
      </Paragraph>

      <HorizontalList title="patrons">
        <h4>Patron 1</h4>
        <h4>Patron 2</h4>
        <h4>Patron 3</h4>
        <h4>Patron 4</h4>
      </HorizontalList>

    </Main>
  </div>
</template>

<script lang="ts">

import { Component, Vue } from "vue-property-decorator";
import PhotoHeader from "@/components/organization/PhotoHeader.vue";
import Main from "@/components/organization/Main.vue";
import HorizontalList from "@/components/organization/HorizontalList.vue";
import Paragraph from "@/components/organization/Paragraph.vue";

@Component({
  components: {
    PhotoHeader,
    Main,
    HorizontalList,
    Paragraph,
  }
})

export default class Organization extends Vue {

  constructor() {
    super();
  }
}
</script>

<style scoped>

</style>