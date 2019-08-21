import { Vue, Component } from "vue-property-decorator";

@Component
export default class NotificationMixin extends Vue {
  public showErrorNotification(text: string) {
    this.$notify({
      type: "error",
      title: "Ops!",
      text
    });
  }

  public showWarningNotification(text: string) {
    this.$notify({
      type: "warn",
      title: "Ops!",
      text
    });
  }

  public showServerErorNotification() {
    this.$notify({
      type: "error",
      title: "Ops!",
      text: "O Sistema encontra-se indisponível. Tente novamente!"
    });
  }

  public showPasswordMismatchNotification() {
    this.$notify({
      type: "error",
      title: "Ops!",
      text: "As senhas devem ser iguais!"
    });
  }

  public showInvalidDataNotification() {
    this.$notify({
      type: "error",
      title: "Ops!",
      text: "Usuário ou Senha inválido."
    });
  }

  public showNonExistentUserNotification() {
    this.$notify({
      type: "error",
      title: "Ops!",
      text: "Usuário não existe."
    });
  }
}
