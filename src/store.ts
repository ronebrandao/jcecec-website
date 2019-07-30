import Vue from "vue";
import Vuex from "vuex";
import { CognitoUser, CognitoUserSession } from "amazon-cognito-identity-js";
import VuexPersistence from "vuex-persist";

Vue.use(Vuex);

const vuexLocal = new VuexPersistence({
  storage: window.localStorage
});

interface CustomStore {
  user?: CognitoUser;
  userSession?: CognitoUserSession;
}

export default new Vuex.Store<CustomStore>({
  state: {},
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
    setUserSession(state, userAuth) {
      state.userSession = userAuth;
    }
  },
  actions: {},
  plugins: [vuexLocal.plugin]
});
