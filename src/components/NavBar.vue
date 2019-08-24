<template>
  <div>
    <b-navbar toggleable="lg" type="light" variant="light">
      <b-navbar-brand href="#" class="navbar-brand mobile-hidden big-ml">
        <img src="../assets/lampada.png" width="53" height="91" alt />
      </b-navbar-brand>

      <div class="ml-2">
        <span id="titulo" class="text-left mt-2">IV JCECEC</span>
        <span class="sub-title text-left mt-2 mobile-hidden">
          Jornada Científica da Escola de
          <br />Ciências Exatas e da Computação
        </span>
      </div>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" class="justify-content-sm-end big-mr" is-nav>
        <b-navbar-nav>
          <li class="nav-item">
            <router-link class="nav-link" to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/cadastro">Inscrição</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/organizacao">Organização</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/submissao">Submissão</router-link>
          </li>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class NavBar extends Vue {}
</script>

<style scoped >
.nav-link {
  font-size: 18px !important;
}

.navbar-toggler {
  border: none;
}

.navbar-toggler-icon {
  font-size: 25px;
}

@media screen and (max-width: 576px) {
  .mobile-hidden {
    display: none !important;
  }
}

@media screen and (min-width: 576px) {
  .big-ml {
    margin-left: 100px;
  }
  .big-mr {
    margin-right: 100px;
  }
}

#titulo {
  font-size: 20px !important;
  color: black;
  display: block;
}

.sub-title {
  display: block;
  margin-top: 15x !important;
  color: black;
}

#collapsingNavbar {
  justify-content: right;
  margin-right: 80px;
}
</style>
