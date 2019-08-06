import { Vue, Component } from 'vue-property-decorator';

@Component
export default class NotificationMixin extends Vue {

    public showServerErorNotification() {
        this.$notify({
            type: 'error',
            title: 'Ops!',
            text: 'O Sistema encontra-se indisponível. Tente novamente!'
          });
    }

    public showPasswordMismatchNotification() {
        this.$notify({
            type: 'error',
            title: 'Ops!',
            text: 'As senhas devem ser iguais!'
          });
    }

}
