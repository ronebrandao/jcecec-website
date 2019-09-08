<template>
  <div class="obs-page">
    <PhotoHeader title="Organization" description="Short description about the event organization">
      <p>Something to place here, like buttons or links</p>
    </PhotoHeader>

    <Main>
      <Paragraph>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae delectus voluptatum at sapiente, dolorum corporis excepturi dolores ipsam neque minus! Mollitia vitae odio molestiae itaque culpa asperiores laudantium odit? Illo perspiciatis dicta incidunt voluptate aspernatur at quia esse molestias dolorem ea repellat quisquam ipsum iusto dolores nisi iste saepe, corrupti neque, ratione animi, minima quod. Error ea molestiae reprehenderit libero nisi inventore, porro officia eaque laborum ducimus commodi hic nostrum obcaecati repellat voluptatem nemo sit, aliquam cum et pariatur consequuntur! Minima libero perspiciatis quidem molestiae commodi, nam tenetur maxime porro optio labore soluta, voluptas architecto ut animi voluptates nisi aperiam, blanditiis quasi ad fugiat nemo! Saepe perferendis quisquam laborum a ut, ex, iusto odio inventore laudantium neque totam, esse et? Asperiores dolores iusto corrupti fugiat dolore! Vel ab aliquid eos, quam velit cupiditate quis doloribus, est nesciunt deserunt omnis quas debitis voluptatibus aliquam tenetur ducimus assumenda, libero a veritatis illum odio ut aut fugit. Officia tenetur in doloribus reiciendis magni molestias porro quasi tempora similique! Quod, id voluptates dolore minus exercitationem vel aut cumque porro, eligendi ad nam officiis explicabo earum est beatae repellendus voluptatibus quia accusamus blanditiis modi eveniet. Eum ad harum velit neque voluptas? Deserunt, quidem consectetur. Unde reiciendis eligendi sint obcaecati vitae totam ab quaerat neque repellat quisquam natus quibusdam odio quod, optio nihil tempora officiis cupiditate consequuntur cumque cum nostrum corrupti explicabo! Sed ab itaque, sint mollitia quibusdam, laudantium quod cum magnam corporis iste animi, non consequatur repellat dignissimos nemo. Ducimus, nisi est! Beatae minus omnis eos molestias nisi quos totam neque culpa dignissimos facere, ea distinctio necessitatibus vitae maxime, excepturi aliquam aperiam. Obcaecati, necessitatibus tempore!
      </Paragraph>

      <Paragraph title="our speakers">
        <Speakers v-bind:speakers="speakers" />
      </Paragraph>

      <Columns>
        <Paragraph
          title="title 1"
        >Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, rem culpa saepe iste eum quam, modi molestias quaerat aspernatur animi illum commodi delectus ipsam consequuntur fugiat? Illo suscipit dolor consectetur repellendus dignissimos quibusdam eveniet autem, voluptatem deleniti ab quisquam modi enim molestiae accusantium temporibus expedita adipisci consequatur aspernatur esse, alias rerum? Quibusdam quaerat accusantium laboriosam omnis mollitia est, iure saepe quo commodi qui. Sequi necessitatibus eaque quaerat nihil a voluptatem? Suscipit quam vel nemo voluptas aperiam quibusdam eligendi facilis obcaecati totam officia saepe voluptate impedit veniam adipisci, fugit vitae, et sequi vero! Possimus, dolores! Officiis ea porro cumque impedit esse similique repellendus reprehenderit nisi aliquid?</Paragraph>

        <Paragraph title="title 2">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque adipisci, possimus dolore accusantium deserunt itaque nihil minima fugit saepe vitae sit, sint labore ex tempora, consequatur pariatur quaerat tempore dolorem repudiandae dolorum cupiditate magnam praesentium. Veniam velit qui, harum nam eum illum quisquam, libero esse enim assumenda mollitia, nobis aut ut nihil quasi laboriosam. Obcaecati labore voluptas repellendus quam dolorem sit officia commodi possimus laudantium similique! Facere praesentium vel ea!
          <br />Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate quibusdam eum cumque commodi ipsam quasi magnam nulla quod dignissimos.
        </Paragraph>

        <Paragraph
          title="title 3"
        >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos ad officiis eaque ab quibusdam nesciunt eum sequi. Nostrum in blanditiis enim. Aperiam illo nihil suscipit impedit quas exercitationem, aut dolor neque magnam nisi in corrupti nobis unde voluptatum omnis, a ipsa animi aliquid molestiae repellat ad dolorem voluptatibus ex sapiente! Officiis quis necessitatibus numquam inventore cum veritatis error debitis sequi asperiores laudantium, non corrupti atque omnis consequatur molestias possimus distinctio fugit at reiciendis praesentium quaerat ratione repudiandae maxime earum! Distinctio sit libero nam assumenda nostrum quidem eum, nisi voluptatem!</Paragraph>
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
  private speakers: any = null;

  constructor() {
    super();

    this.speakers = [
      {
        name: "CARLOS ALBERTO DE NOBREGA",
        institution: "fessor at Hampden-Sydney College in Virginia, looked ",
        speaking: "theory of ethics",
        description:
          "lievable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary,",
        img: "/assets/img/speakers/sp1.jpg",
        action: () => {
          alert("You clicked on the first speaker");
        }
      },
      {
        name: "CARLOS ALBERTO DE NOBREGA",
        institution: "fessor at Hampden-Sydney College in Virginia, looked ",
        speaking: "theory of ethics",
        description:
          "lievable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary,",
        img: "/assets/img/speakers/sp2.png",
        action: () => {
          alert("You clicked on the second speaker");
        }
      },
      {
        name: "CARLOS ALBERTO DE NOBREGA",
        institution: "fessor at Hampden-Sydney College in Virginia, looked ",
        speaking: "theory of ethics",
        description:
          "lievable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary,",
        img: "/assets/img/speakers/sp3.png",
        offset: "-15px",
        action: () => {
          alert("You clicked on the third speaker");
        }
      }
    ];
  }
}
</script>

<style scoped>
</style>