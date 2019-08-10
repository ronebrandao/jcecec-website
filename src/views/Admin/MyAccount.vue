<template>
  <div>
    <v-toolbar>
      <v-toolbar-side-icon></v-toolbar-side-icon>
      <v-toolbar-title>Conta</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn flat @click="signOut">Sair</v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <Submissions />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { mixins } from "vue-class-component";
import LoaderMixin from "@/mixins/loader";
import Submissions from "@/components/admin/Submissions.vue";
import { logOut } from "@/services/authentication";

@Component({
  components: {
    Submissions
  }
})
export default class MyAccount extends mixins(LoaderMixin) {
  private created() {
    if (!this.$store.state.userSession) {
      this.$router.push("/submissao");
    }
  }

  private signOut() {
    logOut();
    this.$router.push("/");
  }
}
</script>

