<template>
  <div class="obs-page">
    <PhotoHeader title="Organization" description="Short description about the event organization">
	<p>
	  Something to place here, like buttons or links
        </p>
    </PhotoHeader>

    <Main>
      <h3>
        Title
      </h3>
      <p>
	klokdfpsk kmsfçjkmvs kçsjidsvmk ksçdfvçmso çsfdiofmvk skçvmdfmjkç ksvmdimdçskm skvm km
	kvsfmfslç kfsvkl klnkdsk n nskkldn nl knk dkkldnklv dfkl kkld kkfk kkk fnsn lfjnjf sfk
	klokdfpsk kmsfçjkmvs kçsjidsvmk ksçdfvçmso çsfdiofmvk skçvmdfmjkç ksvmdimdçskm skvm km
	kvsfmfslç kfsvkl klnkdsk n nskkldn nl knk dkkldnklv dfkl kkld kkfk kkk fnsn lfjnjf sfk
	klokdfpsk kmsfçjkmvs kçsjidsvmk ksçdfvçmso çsfdiofmvk skçvmdfmjkç ksvmdimdçskm skvm km
	kvsfmfslç kfsvkl klnkdsk n nskkldn nl knk dkkldnklv dfkl kkld kkfk kkk fnsn lfjnjf sfk
	klokdfpsk kmsfçjkmvs kçsjidsvmk ksçdfvçmso çsfdiofmvk skçvmdfmjkç ksvmdimdçskm skvm km
	kvsfmfslç kfsvkl klnkdsk n nskkldn nl knk dkkldnklv dfkl kkld kkfk kkk fnsn lfjnjf sfk
      </p>
    </Main>
  </div>
</template>

<script lang="ts">

import { Component, Vue } from "vue-property-decorator";
import PhotoHeader from "@/components/organization/PhotoHeader.vue";
import Main from "@/components/organization/Main.vue";

@Component({
  components: {
    PhotoHeader,
    Main,
  }
})

export default class Obs extends Vue {

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
main p {
  text-align: justify;
}
</style>

