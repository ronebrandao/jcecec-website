import { Component, Vue, Prop} from "vue-property-decorator";
import Columns from "../organization/Columns.vue"

@Component({
    components: {
        Columns,
    }
})
export default class MiniCourse extends Vue {
    @Prop(Object) course: any;

    constructor(){
        super();

        //Test
        this.course = {
            title: "Metodologias ageis um conceito cada vez mais em foco",
            instructor: "Vinícius de Pádua Bertoldo Costa",
            institution: "PUC Goiás",
            desc: `Estatísticas alarmantes mostram que os projetos de TI chegam a custar 400% mais que o previsto,
            realizando apenas 25% dos benefícios prometidos. Manifesto Ágil nos faz sempre lembrar, indivíduos e
            interações são mais importantes que processos e ferramentas; responder a mudanças é mais importante que
            documentação; colaboração com o cliente é mais importante que negociação de contratos; e que software
            funcionando é mais importante que seguir um plano. Embora a modelagem seja uma técnica importante em
            desenvolvimento de software inclusive em metodologias ágeis, frequentemente é subestimada ou mal
            entendida. Na luta contra o desenvolvimento centrado em processos burocráticos e contra o desenvolvimento
            baseado em ferramentas, a modelagem acabou sendo atacada também.`,
            date: "12/11",
            time: "14:00-18:00",
            place: "LAB101-C, Área II"
        }
    }
}