import Vue from 'vue';
import Vuex from 'vuex';
import { CognitoUser, CognitoUserSession } from 'amazon-cognito-identity-js';

Vue.use(Vuex);

interface CustomStore {
  user?: CognitoUser;
  userSession?: CognitoUserSession;
}

export default new Vuex.Store<CustomStore>({
  state: {

  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
    setUserSession(state, userAuth) {
      state.userSession = userAuth;
    }
  },
  actions: {

  },
});
