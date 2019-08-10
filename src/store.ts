import Vue from "vue";
import Vuex from "vuex";
import { CognitoUser, CognitoUserSession } from "amazon-cognito-identity-js";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

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
    setUserSession(state, session) {
      state.userSession = session;
    },
    clearUserSession(state) {
      state.userSession = null;
    }
  },
  actions: {
    setSession(context, session) {
      context.commit("setUserSession", session);
    },
    clearSession(context) {
      context.commit("clearUserSession");
    }
  },
  plugins: [createPersistedState({
    key: "jcecec"
  })]
});
