<template>
  <div>
    <PhotoHeader
      :title="title"
      :description="description"
      :image="background"
      offset="calc((-110/523)*100vw + 67.304015296px)"
    ></PhotoHeader>

    <Main>
      <div class="courses-list">
        <div v-for="(course, index) in coursesList" :key="index">
          <MiniCourse :course="course"></MiniCourse>
          <hr />
        </div>
      </div>
    </Main>
  </div>

</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import PhotoHeader from "../components/organization/PhotoHeader.vue";
import Main from "../components/organization/Main.vue";
import MiniCourse from "../components/miniCourse/index.vue";
import Courses from "@/models/miniCourses";

@Component({
  components: {
    PhotoHeader,
    Main,
    MiniCourse
  }
})
export default class MiniCourses extends Vue {
  private coursesList: any;

  private title = "Minicursos";
  private description = "Minicursos da jornada";
  private background =
    "https://cdn.pixabay.com/photo/2016/02/05/16/19/offices-1181385_960_720.jpg";

  constructor() {
    super();

    this.coursesList = Courses;
  }
}
</script>

<style scoped>
.courses-list > div:not(:first-child) {
  margin-top: 35px;
}
</style>