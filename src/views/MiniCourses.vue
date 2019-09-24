<template>

    <div>
        <PhotoHeader :title="title" :description="description" :image="background" offset="calc((-110/523)*100vw + 67.304015296px)">
        </PhotoHeader>
        
        <Main>
            <MiniCourse></MiniCourse>
        </Main>

    </div>

</template>

<script lang="ts">
import { Component, Vue, Prop} from "vue-property-decorator";
import PhotoHeader from "../components/organization/PhotoHeader.vue"
import Main from "../components/organization/Main.vue"
import MiniCourse from "../components/miniCourse/index.vue"

@Component({
    components: {
        PhotoHeader,
        Main,
        MiniCourse
    }
})
export default class MiniCourses extends Vue {

    private title = "Minicursos";
    private description = "Minicursos da jornada";
    private background = "https://cdn.pixabay.com/photo/2016/02/05/16/19/offices-1181385_960_720.jpg"

    constructor(){
        super();
    }
}
</script>

<style scoped>
</style>

