<template>
  <v-layout class="mt-5">
    <v-form ref="form" v-model="valid" @submit.prevent="login">
      <v-container class="form-container">
        <h6>Login</h6>
        <v-text-field :rules="emailRules" v-model="email" label="E-mail" required box></v-text-field>
        <v-text-field
          :rules="passwrodRules"
          v-model="password"
          label="Senha"
          type="password"
          persistent-hint
          hint="<a href=''>Esqueci minha senha</a>"
          required
          box
        ></v-text-field>
        <v-btn type="submit" color="primary">Acessar</v-btn>
        <v-btn flat color="indigo" @click="redirectSignUp">Não se inscreveu?</v-btn>
      </v-container>
    </v-form>
  </v-layout>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Cognito from "../cognito";
import { mixins } from "vue-class-component";
import LoaderMixin from "../mixins/loader";

@Component
export default class Login extends mixins(LoaderMixin) {
  private valid: boolean = false;
  private emailRules: any;
  private passwrodRules: any;

  private email: string = "";
  private password: string = "";

  private cognito: Cognito;

  constructor() {
    super();

    this.cognito = new Cognito();

    this.emailRules = [
      // @ts-ignore
      v => !!v || "E-mail é obrigatório",
      // @ts-ignore
      v => /.+@.+/.test(v) || "Digite um email válido"
    ];

    this.passwrodRules = [
      // @ts-ignore
      v => !!v || "Campo obrigatório"
    ];
  }

  private created() {
    if (this.$store.state.userSession) {
      this.$router.push("/conta");
    }
  }

  private login() {
    // @ts-ignore
    if (this.$refs.form.validate()) {
      this.showLoader();

      this.cognito
        .authenticateUser(this.email, this.password)
        .then(session => {
          this.$store.dispatch("setSession", session);
          this.$router.push("/conta");
          this.hideLoader();
        })
        .catch(err => {
          console.log(err);
          this.hideLoader();
        });
    }
  }

  private redirectSignUp() {
    this.$router.push("/cadastro");
  }
}
</script>

<style scoped>
.form-container {
  max-width: 500px;
  box-shadow: 0 15px 30px 0 rgba(0, 0, 0, 0.11),
    0 5px 15px 0 rgba(0, 0, 0, 0.08);
  border-radius: 20px;
}

h6 {
  font-size: 1.4em;
}
</style>

