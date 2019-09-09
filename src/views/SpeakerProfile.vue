<template>
  <div>
    <header class="banner" :style="{backgroundImage: `url(${defaults.bgBanner})`}">
      <div>
        <div :style="{backgroundImage: `url(${speaker.img})`}"></div>
        <div>
          <div>
            <h1>{{speaker.name}}</h1>
            <h4>{{speaker.institution}}</h4>
          </div>
        </div>
      </div>
    </header>

    <div class="main">
      <label for="curriculum">
        <h4>Curriculum</h4>
      </label>
      <input type="checkbox" id="curriculum" class="toggle" />
      <div>
        <div>
          <p>{{speaker.description}}</p>
        </div>
      </div>

      <label for="palestra">
        <h4>Palestra</h4>
      </label>
      <input type="checkbox" id="palestra" class="toggle" />
      <div>
        <div>
          <i>
            <h5>{{speaker.speaking}}</h5>
          </i>
          <p>{{speaker.subjectResume}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component
export default class SpeakerProfile extends Vue {
  private speaker: any;
  private defaults: any;

  constructor() {
    super();

    this.defaults = {
      bgBanner:
        "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
    };

    this.speaker = {
      name: "Rosa Maria de Castro Fernandes Vasconcelos",
      institution: "Universidade do Minho – Portugal",
      speaking: "O Meu Futuro “Uma nova abordagem”",
      description: `
          Professora Associada do Departamento de Engenharia Têxtil (DET) da EEUM desde 2005.
          Licenciada em Engenharia Têxtil pela Universidade do Minho. É professora na Universidade do Minho
          desde 1984. Doutora em Engenharia - Tecnologia e Química Têxtil pela Universidade do Minho, concluída
          em 1993. Recebeu o Prémio Rieter em 1993. É responsável por várias unidades curriculares no ciclos de
          estudos integrados em Engenharia Têxtil e Engenharia e Gestão Industrial, no 1o ciclo de Design e Marketing
          de Moda, e também nos cursos de 2o Ciclo de Design e Comunicação de Moda, Química Têxtil, Têxteis
          Avançados e Design e Marketing. Pesquisador-chefe e membro de pesquisa de vários projetos de P & D,
          apresentou como autor principal ou co-autor muitas dezenas de artigos de periódicos científicos e
          comunicações em conferências internacionais. É Presidente do Conselho Pedagógico da Escola Superior de
          Engenharia desde 2011. É Vice-Reitora da Escola Superior de Engenharia da Universidade do Minho desde
          2013.
        `,
      subjectResume: `
          Captar a atenção do diretor de Recursos Humanos, na análise de CV de um aluno de Engenharia,
          Tecnologia ou Design, de recém graduados, torna-se uma tarefa cada vez mais difícil. O que por um lado
          9parece ser um aumento feroz da concorrência (quer seja por concorrentes internacionais, mercado global ou
          pela industria 4.0), por outro, o que o mercado dita é que o reforço das competências transversais desde
          muito cedo nos alunos, releva-se por vezes a forma mais eficaz de captar essa atenção. Não se pode dizer que
          há uma formula única, muito menos uma regra direta a aplicar aos alunos, o que podemos dizer é que alertar
          os alunos desde cedo para a importância destas atitudes, pode representar a diferença entre – ficar ou não
          ficar com o emprego pretendido. Aprender a expor no CV as melhores qualidades – que se “transformam”
          em competências no futuro - e que reforçam o interesse e adaptação, dos candidatos ao lugar a que se propõe,
          é o desafio mais importante desta atividade.
        `,
      img: "/assets/img/speakers/sp3.png",
      action: () => {
        // this.$router.push({path: "/profile", query: {name: "test"}});
      }
    };
  }

  private created() {
    console.log(this.$router.currentRoute.query);
  }

  private mounted() {}
}
</script>

<style scoped>
.banner {
  position: relative;
  margin-top: 113.75px;
  height: 250px;
  background-size: cover;
  background-attachment: fixed;
  padding: 0 16.284233901vw;
  margin-bottom: 125px;
}
.banner > div {
  position: absolute;
  height: 250px;
  display: flex;
  bottom: -60%;
  text-align: left;
  width: 67.431532198vw;
}
.banner > div > div:first-child {
  width: 250px;
  height: 250px;
  border-radius: 35px;
  border: 5px solid white;
  box-shadow: 0 15px 30px 0 rgba(0, 0, 0, 0.25),
    0 10px 15px 0 rgba(0, 0, 0, 0.08);
  background-size: cover;
}
.banner > div > div:last-child {
  padding-left: 45px;
  align-self: flex-end;
}

.main {
  padding: 120px 220px;
  text-align: left;
}
.main h4 {
  user-select: none;
  text-transform: uppercase;
  border-bottom: 2px solid;
  padding: 5px 0;
  transition: background-color 300ms ease;
}
.main h4:hover {
  cursor: pointer;
  background-color: lightgray;
}
.main p {
  text-align: justify;
}
.main > div {
  overflow: hidden;
}
.main > div > div {
  padding: 10px 0;
}
.main label {
  display: block;
}
.main input[type="checkbox"] {
  display: none !important;
}
.main .toggle:checked + div {
  height: 0;
}
</style>