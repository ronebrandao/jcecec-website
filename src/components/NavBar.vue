<template>
  <div>
   <b-navbar toggleable="sm" type="light" variant="light">
    <b-navbar-toggle target="nav-text-collapse"></b-navbar-toggle>

    <b-navbar-brand>BootstrapVue</b-navbar-brand>

    <b-collapse id="nav-text-collapse" is-nav>
      <b-navbar-nav>
        <router-link class="nav-link" to="/">Home</router-link> 
        <router-link class="nav-link" to="/cadastro">Cadastro</router-link>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class NavBar extends Vue {
}
</script>

<style scoped lang="scss">

</style>
