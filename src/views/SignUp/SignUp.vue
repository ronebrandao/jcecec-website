<template>
  <v-app class="mt-5">
     <v-form ref="validation" @submit.prevent="addUser">
      <v-container class="form-container">
      <h6 class="title">Informações Pessoais</h6>  
      <v-layout>
        <v-flex xs12 md6 >
          <v-text-field
            :rules="nameRules"
            v-model="form.firstName"
            label="Nome"
            required
          ></v-text-field>
        </v-flex>

        <v-flex xs12 md6>
          <v-text-field
            :rules="nameRules"
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

      <v-layout>
        <v-flex xs12 md6 >
          <v-text-field
            v-model="form.birthDate"
            label="Data de Nascimento"
            required
            mask="date"
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
        >
      </v-autocomplete>'' 

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
            >
            </v-autocomplete>
        </v-flex>

        <v-flex xs12 md5>
          <v-autocomplete
            :items="cities"
            v-model="selectedCity"
            :label="'Cidade'"
          >
          </v-autocomplete>
        </v-flex>

        <v-flex xs12 md4> 
          <v-text-field
            v-model="form.neighborhood"
            label="Bairro"
            required
          ></v-text-field>
          </v-flex>
      </v-layout>

         <v-layout>
        <v-flex xs12 md6>
          <v-text-field
            v-model="form.street"
            label="Rua"
            required
          ></v-text-field>
        </v-flex>

        <v-flex xs12 md2>
          <v-text-field
            v-model="form.street_number"
            label="Número"
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

@Component({
  components: {
  },
})

export default class SignUp extends Vue {
  private form: SignUpForm;
  private cognito: Cognito;

  private nameRules: any;
  private emailRules: any;

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
      university: '',
      type: '',
      cep: '',
      street: '',
      street_number: '',
      state: '',
      city: '',
      neighborhood: '',
      complement: ''
    };

    this.cognito = new Cognito();

    this.states = [];
    this.siglas = [];
    this.selectedState = '';

    this.cities = ["GOIANIA"];
    this.selectedCity = '';

    this.institutions = ["PUC"];

    this.nameRules = [
      v => !!v || 'Campo obrigatório',
    ];

    this.emailRules = [
      v => !!v || 'E-mail é obrigatório',
      v => /.+@.+/.test(v) || 'Digite um E-mail válido'
    ];
  }

  created() {
    getStates().then(states => {
      this.states = states;
      this.siglas = states.map(state => state.sigla).sort();
    });
  }

  private async addUser() {

    console.log(this.form);
    this.cognito.signUp(this.form.email, this.form.password, 
    {
      name: this.form.firstName,
      family_name: this.form.lastName,
      email: this.form.email,
      birthdate: this.form.birthDate,
      phone_number: this.form.phoneNumber,
      "custom:type": 'user'
    })
    .then(result => {

      this.$store.commit("setUser", result);
  
      this.$localStorage.set('user', JSON.stringify(this.form))

      console.log(result);
      
      this.$router.push("cadastro/confirmacao");
    })
    .catch(err => {
      alert("Deu errado");
      console.log(err);
    })

  }

  private populateFields(): void {

    let loader = this.$loading.show();

    getAdress(this.form.cep).then(address => {
      this.form.street = address.logradouro;
      this.form.neighborhood = address.bairro;
      this.selectedState = address.uf;
      this.selectedCity = address.localidade;

      loader.hide();
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
  background-color: #fff;
  max-width: 700px;
}

.wrapper {
  padding: 30px;
}

label {
  font-weight: 500;
  float: left;
}
</style>