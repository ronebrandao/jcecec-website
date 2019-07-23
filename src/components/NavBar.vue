<template>
  <nav class="navbar navbar-expand-md navbar-light bg-light shadow p-3 bg-white rounded">
    <div class="d-flex w-50 order-0">
        <a class="navbar-brand mr-1" href="#">
            <img src="../assets/lampada.png" width="53" height="91" alt="">
                <!-- <span class="ml-2" id="titulo">IV JCECEC</span><br> -->
            <!-- <span class="ml-2 text-left">Jornada Científica da Escola de <br> Ciências Exatas e da Computação</span> -->
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsingNavbar">
            <span class="navbar-toggler-icon"></span>
        </button>
    </div>
    <div class="navbar-collapse collapse justify-content-center order-2" id="collapsingNavbar">
        <ul class="navbar-nav">
            <li class="nav-item active">
                <router-link class="nav-link" to="/">Home</router-link> 
            </li>
            <li class="nav-item">
                <router-link class="nav-link" to="/organizacao">Organização</router-link>
            </li>
            <li class="nav-item">
                <router-link class="nav-link" to="/cadastro">Inscrição</router-link>
            </li>
            <li class="nav-item">
                <router-link class="nav-link" to="/submissao">Submissão</router-link> 
            </li>
        </ul>
    </div>
    <span class="navbar-text small text-truncate mt-1 w-50 text-right order-1 order-md-last"></span>
</nav>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class NavBar extends Vue {
}
</script>

<style scoped >
.nav-link {
    font-size: 18px !important;
}

#titulo {
    font-size: 20px !important;
}


</style>
