<template>
  <div>
     <form @submit.prevent="confirmUser">
      <div class="container form-container">
        <div class="wrapper">
          <b-form-group
              id="input-group-1"
              label="Código de verificação"
              label-for="input-code">
              <b-form-input
                id="input-code"
                v-model="code"
                type="text"
                description="Digite o código que você recebeu por email."
                required
                >
              </b-form-input>
            </b-form-group>
            <b-button type="submit" variant="primary">Confirmar</b-button>
        </div>
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import SignUpForm from '@/models/forms/SignUpForm';
import Cognito from '@/cognito/index';

@Component({
  components: {
  },
})

export default class SignUp extends Vue {
    private code: string;
    private cognito: Cognito;
    private user: SignUpForm;

  constructor() {
    super();

    this.cognito = new Cognito();
    this.code = '';
  }

  private confirmUser() {
      
      this.$store.state.user.confirmRegistration(this.code, true, (err, result) => {
          if (err)
            alert("Deu ruim")

          this.user = JSON.parse(this.$localStorage.get('user')) as SignUpForm;

          this.cognito.authenticateUser(this.user.email, this.user.password)
          .then(result => {
            this.$store.commit('setUserSession', result);
            alert("Usuário logado!");
          })
          .catch(err => {
            alert("Ocorreu um erro ao autenticar o usuário.");
          })
      });

  }

}
</script>

<style>
.form-container {
  background-color: #fff;
  max-width: 500px;
}

.wrapper {
  padding: 30px;
}

label {
  font-weight: 500;
  float: left;
}
</style>