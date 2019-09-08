<template>
  <div class="obs-page">
    <PhotoHeader title="Evento" description="Descrição dos eventos da jornada">
      <!-- <p>Something to place here, like buttons or links</p> -->
    </PhotoHeader>

    <Main>
      <Paragraph title="Histórico">
        A partir de 25 de Junho de 2014 a PUC Goiás iniciou uma nova organização institucional baseada no
        conceito de Escolas. A ECEC foi criada no dia 24 junho de 2015. A ECEC teve origem da fusão de dois
        departamentos: o Departamento de Matemática e Física (MAF) e o Departamento de Computação (CMP). A
        ECEC é responsável por oferecer os cursos de licenciatura em Física, Matemática e Química; os cursos de
        bacharelado em Ciência da Computação e Engenharia de Computação e o curso Superior de Tecnologia em
        Análise e Desenvolvimento de Sistemas.
        A fusão dos cursos dos antigos departamentos e a interação entre professores e alunos da nova escola
        motivou a reorganização dos eventos científicos organizados pelos antigos departamentos. Nesse sentido, foi
        criada a Jornada Ciêntífica da Escola de Ciências Exatas e da Computação (JCECEC) para dar continuidade
        aos eventos históricos organizados pelo MAF e CMP, tais como a Semana de Computação da Universidade
        Católica de Goiás (UCG-Comp) organizada pelo CMP, Jornada de Ciências Exatas (Jorcex) organizada pelo
        MAF.
        Com o propósito de arganizar o ciclo pedagógico/acadêmico completo foi criada também a revista
        científica da ECEC que foi denominada Arithmós http://seer.pucgoias.edu.br/index.php/arithmos. Assim, os
        artigos que se destacam nas apresentações orais da JCECEC são convidados para uma publicação extendida
        na revista Arithmós
        A JCECEC tem o compromisso histórico de dar continuidade a estes eventos organizados pelos
        antigos departamentos que deram origem a ECEC. As três primeiras edições da JCECEC abordaram importantes temas, como a I JCECEC - Desafios da integração de conhecimentos em ciência e tecnologia, II JCECEC - Ciência e tecnologia no desenvolvimento de um futuro sustentável e III JCECEC - Ciência,
        Tecnologia e Mudanças Sociais.
      </Paragraph>

      <Paragraph title="IV Jornada Científica da Escola de Ciências Exatas e da Computação">
        A IV JCECEC e I Jornada Científica Regional (JCR) será realizada de 11 a 14 de Novembro de
        2019. A IV JCECEC e I JCR será a primeira internacional e vai contar com pesquisadores de diferentes paises.
        Nessa edição conta-se com a participação do Instituto Federal de Goiás (IFG). Novas atividades vem sendo criadas a partir de cada edição da JCECEC. Na III JCECEC foi introduzida a HACKATHON PUC GOIÁS que vai ter sua segunda edição na IV JCECEC. Na IV JCECEC será
        introduzida uma competição de robótica com a participação de alunos de escolas públicas e privadas de
        primeiro e segundo grau
      </Paragraph>

      <Columns>
        <Paragraph title="II HACKATHON PUC GOIÁS">
          Hackatons são eventos cada vez mais frequentes nas comunidades tecnológicas que promovem o trabalho em
          equipe, divulgando os melhores alunos e oportunizando futuras vagas no mercado de trabalho. Estes eventos
          têm sido promovidos comumente em grandes capitais brasileiras como São Paulo e Rio de Janeiro e têm
          como objetivo resolver problemas ligados a tecnologia envolvendo empresas e instituições que desejem
          apresentar uma demanda a ser solucionada. A Pontifícia Universidade Católica de Goiás deseja com este
          evento oportunizar ao aluno a experiência de participar de hackatons como preparação para participação em
          hackthons de âmbito nacional e internacional. A iniciativa de promover o I Hackathon da PUC GOIÁS no
          âmbito da JCECEC tem o propósito de produzir a experiência visando disseminar a ideia no âmbito regional.
        </Paragraph>

        <Paragraph title="I COMPETIÇÃO DE ROBÓTICA">
          As competições de robôs reúnem construtores de robôs que competem para mostrar qual deles é
          capaz de cumprir da melhor forma um determinado objetivo especificado anteriormente à competição. As
          competições podem ser diferenciadas segundo alguns critérios básicos, a saber: propósitos científicos e
          acadêmicos, grau de autonomia exigida dos protótipos de robôs para a realização das tarefas a eles
          solicitadas, restrições para a construção do protótipo, ou seja, o quão livre é a escolha das plataformas
          robóticas que podem ser empregadas na construção dos protótipos e Ua maneira como a organização da
          equipe está vinculada a iniciativas de instituições educacionais ou organizações formais. A competição de
          robôs da IV JCECEC tem vai explorar dois dos critérios propósitos científicos e acadêmicos, grau de
          autonomia exigida dos protótipos de robôs para a realização das tarefas a eles solicitadas.
        </Paragraph>
      </Columns>

      <Paragraph title="palestrantes">
        <Speakers :speakers="speakers" :paginate="3" />
      </Paragraph>
    </Main>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import PhotoHeader from "@/components/organization/PhotoHeader.vue";
import Main from "@/components/organization/Main.vue";
import HorizontalList from "@/components/organization/HorizontalList.vue";
import Paragraph from "@/components/organization/Paragraph.vue";
import Speakers from "@/components/organization/Speakers.vue";
import Columns from "@/components/organization/Columns.vue";

@Component({
  components: {
    PhotoHeader,
    Main,
    HorizontalList,
    Paragraph,
    Speakers,
    Columns
  }
})
export default class Evento extends Vue {
  private speakers: any = null;

  constructor() {
    super();

    this.speakers = [
      {
        name: "CARLOS ALBERTO DE NOBREGA",
        institution: "fessor at Hampden-Sydney College in Virginia, looked ",
        speaking: "theory of ethics",
        description:
          "lievable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary,",
        img: "/assets/img/speakers/sp1.jpg",
        action: () => {
          alert("You clicked on the first speaker");
        }
      },
      {
        name: "CARLOS ALBERTO DE NOBREGA",
        institution: "fessor at Hampden-Sydney College in Virginia, looked ",
        speaking: "theory of ethics",
        description:
          "lievable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary,",
        img: "/assets/img/speakers/sp2.png",
        action: () => {
          alert("You clicked on the second speaker");
        }
      },
      {
        name: "CARLOS ALBERTO DE NOBREGA",
        institution: "fessor at Hampden-Sydney College in Virginia, looked ",
        speaking: "theory of ethics",
        description:
          "lievable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary,",
        img: "/assets/img/speakers/sp3.png",
        offset: "-15px",
        action: () => {
          alert("You clicked on the third speaker");
        }
      }
    ];
  }
}
</script>

<style scoped>
</style>