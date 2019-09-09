<template>
    <h1>Profile</h1>
</template>

<script lang="ts">

import { Component, Vue, Prop } from "vue-property-decorator";



export default class SpeakerProfile extends Vue {

    private created() {
        console.log(this.$router.currentRoute.query);
    }

    constructor(){
        super();
    }

}

</script>

<style scoped>

</style>