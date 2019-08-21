import Cognito from "@/cognito";
import store from "@/store";

const auth = new Cognito();

export function logOut() {
  auth.logOut();
  store.dispatch("clearSession");
}

export function confirmUser(code: string) {
  return auth.confirmUser(code);
}

export function login(username: string, password: string) {
  return auth.authenticateUser(username, password);
}

export function resendCode() {
  return auth.resendCode();
}

export function getUser() {
  return auth.getCognitoUser();
}

export function setCognitoUser(username: string) {
  auth.setCognitoUser(username);
}
