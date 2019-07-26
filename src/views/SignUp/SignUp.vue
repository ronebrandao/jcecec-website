<template>
  <v-app class="mt-5">
     <v-form ref="form" v-model="valid" @submit.prevent="addUser">
      <v-container class="form-container">
      <h6 class="title">Informações Pessoais</h6>  
      <v-layout>
        <v-flex xs12 md6 >
          <v-text-field
            :rules="requiredRule"
            v-model="form.firstName"
            label="Nome"
            required
          ></v-text-field>
        </v-flex>

        <v-flex xs12 md6>
          <v-text-field
            :rules="requiredRule"
            v-model="form.lastName"
            label="Sobrenome"
            required
          ></v-text-field>
        </v-flex>
      </v-layout>

      <v-text-field
        :rules="emailRules"
        v-model="form.email"
        label="E-mail"
        required
      ></v-text-field>

      <v-text-field
        :rules="passwrodRules"
        v-model="form.password"
        label="Senha"
        type="password"
        required
      ></v-text-field>

      <v-layout>
        <v-flex xs12 md6 >
          <v-text-field
            v-model="form.birthDate"
            label="Data de Nascimento"
            required
            :rules="[v => !!v || 'You must agree to continue!']"
            mask="date"
            return-masked-value
          ></v-text-field>
        </v-flex>

        <v-flex xs12 md6 >
          <v-text-field
            v-model="form.phoneNumber"
            label="Telefone"
            required
            mask="(##) #####-####"
          ></v-text-field>
        </v-flex>
      </v-layout>

      <v-autocomplete
          :items="institutions"
          :label="'Instituições'"
          :rules="requiredRule"
          v-model="form.institution"
        >
      </v-autocomplete>

      <h6 class="title">Endereço</h6>  
      <v-layout>
        <v-flex xs12 md3 >
        <v-text-field
          v-model="form.cep"
          label="CEP"
          required
          mask="#####-###"
        ></v-text-field>
      </v-flex>

      </v-layout>

      <v-layout>
        <v-flex xs12 md3>
           <v-autocomplete
              :items="siglas"
              v-model="selectedState"
              :label="'Estado'"
              :rules="requiredRule"
            >
            </v-autocomplete>
        </v-flex>

        <v-flex xs12 md5>
          <v-autocomplete
            :items="cities"
            v-model="selectedCity"
            :label="'Cidade'"
            :rules="requiredRule"
          >
          </v-autocomplete>
        </v-flex>

        <v-flex xs12 md4> 
          <v-text-field
            v-model="form.neighborhood"
            label="Bairro"
            :rules="requiredRule"
            required
          ></v-text-field>
          </v-flex>
      </v-layout>

         <v-layout>
        <v-flex xs12 md6>
          <v-text-field
            v-model="form.street"
            label="Rua"
            :rules="requiredRule"
            required
          ></v-text-field>
        </v-flex>

        <v-flex xs12 md2>
          <v-text-field
            v-model="form.streetNumber"
            label="Número"
            :rules="requiredRule"
            required
          ></v-text-field>
        </v-flex>

          <v-flex xs12 md4>
           <v-text-field
            v-model="form.complement"
            label="Complemento"
          ></v-text-field>
        </v-flex>
      </v-layout>
      
       <v-btn type="submit" color="success">
        Inscrever-se
      </v-btn>
    </v-container>
    </v-form>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator';
import SignUpForm from '@/models/forms/SignUpForm';
import Cognito from '@/cognito/index';
import { ValidationObserver, ValidationObserverInstance } from "vee-validate";
import { getAdress, getStates, Estado, getCities } from '@/services/address';
import { createUser } from '@/services/user';
import moment from 'moment';
import LoaderMixin from '@/mixins/loader';
import NotificationMixin from '@/mixins/notification';
import { mixins } from 'vue-class-component';

@Component({
  components: {
  }
})

export default class SignUp extends mixins(LoaderMixin, NotificationMixin) {
  private form: SignUpForm;
  private cognito: Cognito;
  private valid: boolean;

  private requiredRule: any;
  private emailRules: any;
  private passwrodRules: any;

  private institutions: string[];

  private states: Estado[];
  private siglas: string[];
  private selectedState: string;

  private cities: string[];
  private selectedCity: string;

  constructor() {
    super();

    this.form = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      birthDate: '',
      phoneNumber: '',
      institution: '',
      type: '',
      cep: '',
      street: '',
      streetNumber: '',
      state: '',
      city: '',
      neighborhood: '',
      complement: ''
    };

    this.cognito = new Cognito();
    this.valid = true;

    this.states = [];
    this.siglas = [];
    this.selectedState = '';

    this.cities = ["GOIANIA"];
    this.selectedCity = '';

    this.institutions = ["PUC"];

    this.requiredRule = [
      // @ts-ignore
      v => !!v || 'Campo obrigatório',
    ];

    this.emailRules = [
      // @ts-ignore
      v => !!v || 'E-mail é obrigatório',
      // @ts-ignore
      v => /.+@.+/.test(v) || 'Digite um email válido'
    ];

    this.passwrodRules = [
      // @ts-ignore
      v => !!v || 'Campo obrigatório',
      // @ts-ignore
      v => (v && v.length >= 8) || 'A senha deve conter pelo menos 8 caracteres'
    ];
  }

  created() {
    getStates().then(states => {
      this.states = states;
      this.siglas = states.map(state => state.sigla).sort();
    });
  }

  private async addUser() {
    // @ts-ignore
    if (this.$refs.form.validate()) {

      this.showLoader();
      
      this.signUp().then(result => {
        if (result.success) {
          this.signUpCognito()
        } else {
          this.showServerErorNotification();
        }
      });
    }
  } 

  private signUpCognito() {

     this.cognito.signUp(this.form.email, this.form.password, 
    {
      name: this.form.firstName,
      family_name: this.form.lastName,
      email: this.form.email,
      birthdate: this.form.birthDate,
      phone_number: "+55" + this.form.phoneNumber,
      "custom:type": 'user'
    })
    .then(result => {
      this.$store.commit("setUser", result);
      this.$localStorage.set('user', JSON.stringify(this.form))

      this.hideLoader();
      
      this.$router.push("cadastro/confirmacao");
    })
    .catch(err => {
      this.showServerErorNotification();
    })

  }

  private async signUp() {
    return await createUser(this.form);
  }

  private populateFields(): void {

    this.showLoader();

    getAdress(this.form.cep).then(address => {
      this.form.street = address.logradouro;
      this.form.neighborhood = address.bairro;
      this.selectedState = address.uf;
      this.selectedCity = address.localidade;

      this.hideLoader();
    });

  }

  @Watch('form.cep')
  onCepChanged(value: string, oldValue: string) {
    
    if (value.length === 8) {
      this.populateFields();
    }

  }

  @Watch('selectedState')
  onSelectedStateChanged(value: string, oldValue: string) {
      
    if (value) {
      this.selectedCity = '';

      let codigoEstado = this.states.filter(state => state.sigla == value)[0].id;
      
      getCities(codigoEstado).then(cities => {
        this.cities = cities;
      })
    }

  }

  @Watch('selectedCity')
  onSelectedCityChanged(value: string, oldValue: string) {
      

  }

}
</script>

<style>
.form-container {
  max-width: 700px;
  box-shadow: 0px 0px 9px 1px rgba(0, 0, 0, 0.22);
  border-radius: 20px;
}

.wrapper {
  padding: 30px;
}

label {
  font-weight: 500;
  float: left;
}
</style>
