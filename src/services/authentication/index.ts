import Cognito from "@/cognito";
import store from "@/store";

const auth = new Cognito();

export function logOut() {
  auth.logOut();
  store.dispatch("clearSession");
}
