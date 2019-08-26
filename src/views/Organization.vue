<template>
  <div class="obs-page">
    <PhotoHeader title="Organization" description="Short description about the event organization">
      <p>Something to place here, like buttons or links</p>
    </PhotoHeader>

    <Main>
      <Paragraph title="Title">
        klokdfpsk kmsf�jkmvs k�sjidsvmk ks�dfv�mso �sfdiofmvk sk�vmdfmjk� ksvmdimd�skm skvm km
        kvsfmfsl� kfsvkl klnkdsk n nskkldn nl knk dkkldnklv dfkl kkld kkfk kkk fnsn lfjnjf sfk
        klokdfpsk kmsf�jkmvs k�sjidsvmk ks�dfv�mso �sfdiofmvk sk�vmdfmjk� ksvmdimd�skm skvm km
        kvsfmfsl� kfsvkl klnkdsk n nskkldn nl knk dkkldnklv dfkl kkld kkfk kkk fnsn lfjnjf sfk
        klokdfpsk kmsf�jkmvs k�sjidsvmk ks�dfv�mso �sfdiofmvk sk�vmdfmjk� ksvmdimd�skm skvm km
        kvsfmfsl� kfsvkl klnkdsk n nskkldn nl knk dkkldnklv dfkl kkld kkfk kkk fnsn lfjnjf sfk
        klokdfpsk kmsf�jkmvs k�sjidsvmk ks�dfv�mso �sfdiofmvk sk�vmdfmjk� ksvmdimd�skm skvm km
        kvsfmfsl� kfsvkl klnkdsk n nskkldn nl knk dkkldnklv dfkl kkld kkfk kkk fnsn lfjnjf sfk
      </Paragraph>

      <Paragraph title="our speakers">
        <Speakers />
      </Paragraph>

      <Columns>
        <Paragraph title="title 1">
          This is a text jhudahofda dhjals sdhjld jcvdjac bdjab cjdbakj cjsdbc ljdb jcbadcb dkjabbdv dkabgkfcb ad
          djacbkjadbkcbkbadcbkdbkjcvd sjdhkab d skb dkbab dksba kdbsdbkjsvajdhd dhjavc jdvavc asdhcvsvcjasv cvsjcs
          dcbklvb khdbvdbkcvb dkjbkldbcv dkbv hkbdklbkdbkjbjhuvghgvfgvfk fskvjgblv sklgdfkj gjsdh jvd sfvhkgf vhkjsfg
        </Paragraph>

        <Paragraph title="title 2">
          This is a text bdka bbdaskvb dbkv
          <br />jdnl vljdfsvh fsvd vb bj vsd d b dblb cvb jldb bdfvkfbkjvfbjvkjs j dbckv bvkjdfb fkjbv b fkbv vskfvb klddksbv kfs
          djvhjdkv lsfhv fklb kjbhkdcv hbdvkbvdk bkcb kcb vkdfb vdfksb vfklsv bckhb ck dhdvb cbk jch vdsdkjvhg f fvhjg sf
          <br />nfdakhbkdagbik dsvvvvvvvvvvcfhjvkjchgv g gchk jdkj hvd kjvcd jgvcd jjdksvcdjk dsjk c
        </Paragraph>

        <Paragraph title="title 3">
          This is a text pfsno vfsbhiod iovbaf sbv dfkb sfkbgdfkshgb dfsbv jbd kjv kjhsd vjdgfvksgvfkjds vjfgkj fdfv
          fvsdhbghkjdsgb vd kjds shdcbkjhdgb vhbdkvbdkvlgs dghdhdhgd haskjd kjcv djvc jdc jdjc dj cdhjjdc sj cvdd
          hdbhjcvdhjvchjszdhgckjdcgvkjdvgdjgvchdvbjks
        </Paragraph>
      </Columns>

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
import Speakers from "@/components/organization/Speakers.vue";
import Columns from "@/components/organization/Columns.vue";

@Component({
  components: {
    PhotoHeader,
    Main,
    HorizontalList,
    Paragraph,
    Speakers,
    Columns
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