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
        <Speakers :speakers="speakers" :paginate="1" />
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
        name: "Rosa Maria de Castro Fernandes Vasconcelos",
        institution: "Universidade do Minho – Portugal",
        speaking: "O Meu Futuro “Uma nova abordagem”",
        description:`
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
        img: "/assets/img/speakers/sp1.jpg",
        action: () => {
          alert("You clicked on the first speaker");
        }
      },
      {
        name: "Prof. Dr. Alejandro Pedro Ayala",
        institution: "Universidade Federal do Ceará",
        speaking: "Desafios para a engenharia de cristais na indústria farmacêutica",
        description: `
          Bolsista de produtividade em pesquisa do CNPq nível 1B. Possui graduação em Física -
          Universidad Nacional de Córdoba (1990) e Doutorado em Física - Universidad Nacional de La Plata (1995).
          Atualmente é professor Associado IV do Departamento de Física da Universidade Federal do Ceará.
          Coordenador do Programa de Pós-Graduação em Física da Universidade Federal do Ceará (2015-2017).
          Membro permanente dos colegiados dos Programas de Pós-graduação em Física (UFC), Ciência
          Farmacêuticas (UFC) e Desenvolvimento e Inovação Tecnológica em Medicamentos (em rede: UFC, UFRN,
          UFPB, UFRPE). Publicou 188 trabalhos em revistas indexadas (Factor H = 26 (WoS)/ 30 (Scholar)) e
          orientou 17 Dissertações de Mestrado e 12 Teses de Doutorado. Coordenou Projetos de Pesquisa e Redes de
          Colaboração Internacional com grupos de pesquisa de Estados Unidos, Irlanda, Índia, Argentina, Uruguai e
          Venezuela. Ministrou palestras convidadas em diversos eventos nacionais e internacionais. Tem experiência
          na área de Física do Estado Sólido, com ênfase nas aplicações em fármacos e cerâmicos, atuando
          principalmente nos seguintes temas: polimorfismo em fármacos, engenharia de cristais e materiais funcionais
          investigados através de espectroscopia vibracional, análise térmica e difração de raios-x.
        `,
        subjectResume: `
          A administração de medicamentos por via oral em formulações sólidas (comprimidos, cápsulas,
          suspensões etc.) é, em geral, a mais conveniente, segura e barata, e, portanto, a mais comum. No entanto, sua
          eficácia terapêutica está diretamente relacionada às características do fármaco no estado sólido. Em
          particular, a solubilidade desempenha um papel crítico na biodisponibilidade de um fármaco. Porém,
          moléculas com limitada solubilidade em água estão se tornando cada vez mais predominantes na pesquisa e
          desenvolvimento de novos fármacos. Estas moléculas são um grande desafio para o desenvolvimento
          farmacêutico já que podem exibir uma dissolução lenta em fluidos biológicos e, portanto, uma baixa eficácia,
          particularmente quando ministrados por via oral. Diversas estratégias têm sido aplicadas para contornar a
          baixa solubilidade em água e melhorar e a velocidade de dissolução, as quais incluem a micronização, o uso
          de sais, a solubilização de drogas em co-solventes e soluções micelares, a complexação com ciclodextrinas e
          a utilização de sistemas lipídicos. Embora estas técnicas têm-se mostrado eficazes para aumentar a
          biodisponibilidade oral, o sucesso delas é às vezes dependente a natureza físico-química específica das
          moléculas alvo. A abordagem da Engenharia de Cristais, baseada num profundo conhecimento das
          propriedades físicas dos fármacos, oferece um método alternativo e de grande potencial para melhorar a
          solubilidade, velocidade de dissolução e biodisponibilidade de insumos farmacêuticos ativos (de origem
          sintético ou natural) pouco solúveis. Nesta apresentação serão discutidos os avanços realizados nesta área
          através de exemplos baseados num enfoque multidisciplinar, com especial destaque para a física de estado
          sólido, que contribui para caracterizar, entender e predizer os mecanismos que levam ao empacotamento
          molecular nos fármacos e suas consequências na qualidade e eficácia dos medicamentos.
        `,
        img: "/assets/img/speakers/sp2.png",
        action: () => {
          alert("You clicked on the second speaker");
        }
      },
      {
        name: "Dr. Fabício Augusto de Lima",
        institution: "Clínica de Radioterapia e Quimioterapia de Presidente Prudente.",
        speaking: "Novas tecnologias e novas profissões: perspectivas da Física Médica no Brasil",
        description: `
          Bacharelado em Física Médica (2010), Doutorado Sanduíche (2016) e Pós Doutorado (2017)
          pela Universidade de São Paulo (USP). Concluiu o Programa de Residência Multiprofissional do Hospital
          das Clínicas da FMRP-USP na área de Radioterapia (2019). É supervisor de Proteção Radiológica (RT-0576)
          e Especialista em Física Médica da Radioterapia (RA-0323) com registro na CNEN. Atualmente é Físico
          Médico da Clínica de Radioterapia e Quimioterapia de Presidente Prudente. Tem experiência em
          Espectroscopia Vibracional aplicada ao diagnóstico precoce de doenças, programação em ambiente
          MATLAB, processamento de imagens, Análise Multivariada e reconhecimento de padrões. Recentemente,
          teve experiência em Radioterapia 2D, 3D, IMRT, VMAT, Radiocirurgia intracraniana e SBRT, utilizando
          sistemas Eclipse, XiO e Monaco, bem como em sistemas de gerenciamento Aria, Lantis e Mosaiq. Tem
          experiência em Dosimetria e Controle de Qualidade de equipamentos Varian, Elekta e Siemens, bem como
          em IGRT via Portal Imaging e CBCT.
        `,
        img: "/assets/img/speakers/sp3.png",
        subjectResume: `
          O avanço da tecnologia e dos processos de produção no Brasil tem se acentuado fortemente nas
          últimas décadas. Fatores como o aumento da competitividade e o cenário econômico instável têm forçado
          empresas a buscar cada vez mais eficiência em suas operações, otimizando seus processos e aumentando a
          complexidade dos produtos produzidos e dos serviços prestados. Uma consequência direta desta otimização
          é a demanda por profissionais cada vez mais especializados, de modo que novos cursos de graduação e pós-
          graduação têm surgido a cada ano para formar profissionais preparados para demandas específicas do
          mercado. Foi neste contexto que surgiu a especialidade de Física Médica no Brasil em meados da década de
          1980. Uma formação sólida em ciências exatas com ênfase em aplicações médicas e biológicas confere ao
          Físico Médico uma característica única no mercado, atuando como elo entre as necessidades médicas e as
          soluções propostas pela tecnologia. Trabalhando em áreas da indústria, ensino, pesquisa e prestação de
          serviços, o Físico Médico atualmente é um profissional flexível, altamente especializado e preparado para
          atualizar-se constantemente. Durante esta discussão, serão abordados temas como áreas de atuação do Físico
          Médico brasileiro, faixa salarial destes profissionais, locais que disponibilizam formação nesta especialidade
          e caminhos traçados pelos egressos da graduação nos últimos anos. Como exemplo da atuação do Físico
          Médico, serão mencionados resultados de pesquisas relacionadas ao diagnóstico precoce de doenças,
          baseado no reconhecimento de padrões e inteligência artificial, assim como a atuação clínica deste
          profissional nos tratamentos de câncer que envolvem radioterapia e medicina nuclear.
        `,
        offset: "-15px",
        action: () => {
          alert("You clicked on the third speaker");
        }
      },
      {
        name: `Msc Camilo de Lelis Medeiros de Morais`,
        institution: `School of Pharmacy and Biomedical Sciences, University of Central Lancashire, Reino Unido.
Lancashire Teaching Hospitals NHS Foundation Trust, Royal Preston Hospital, Reino Unido.`,
        speaking: `Biospectroscopia para diagnóstico clínico: métodos alternativos para detecção
de câncer`,
        description: `
          Candidato a PhD em Quimiometria na School of Pharmacy and Biomedical Sciences,
          University of Central Lancashire, Reino Unido. Pesquisador honorário do Departamento de Neuropatologia
          na Lancashire Teaching Hospitals NHS Foundation Trust, Royal Preston Hospital, Reino Unido.
        `,
        img: ``,
        subjectResume: `
          O uso de espectroscopia vibracional (infravermelho e Raman) para análise não-destrutiva de
          materiais biológicos é uma área de rápida expansão, em que existe um alto foco no desenvolvimento de
          metodologias mais simples, rápidas e baratas para diagnóstico clínico. Através da interação entre luz e a
          amostra de estudo (por exemplo, biofluidos, como sangue e urina, ou tecidos) é possível obter um sinal
          espectroquímico característico para cada paciente, denominado de espectro de impressão-digital. O uso de
          ferramentas computacionais é de fundamental importância para processar e interpretar os dados obtidos
          experimentalmente, em que estratégias de pre-processamento de sinais, análise multivariada, seleção de
          variáveis, e aprendizagem de máquina (machine-learning) são essenciais para se obter bons resultados
          clínicos. Um exemplo em que a biospectroscopia é utilizada com sucesso é o diagnóstico de inúmeros tipos
          de câncer e seus graus de agressividade usando apenas uma gota de sangue. Essa apresentação pretende
          12mostrar através de exemplos reais no Reino Unido como é feito a aquisição e análise dos dados espectrais
          provenientes de amostras clínicas para o desenvolvimento de metodologias alternativas para o diagnóstico de
          diversos tipos de câncer.
        `,
        offset: ``,
        action: ``,
      },
      {
        name: `Jancarlos Menezes Lapa`,
        institution: `Universidade Federal da Bahia`,
        speaking: `STEAM BY ME A experiência de uma Comunidade de Prática de Ensino de
Ciências enquanto estratégia formativa de professores de Ciências dentro de
uma abordagem STEAM`,
        description: `
          Doutor e Mestre em Ensino, Filosofia e História das Ciências pela Universidade Federal da
          Bahia. Possui especialização em Metodologia do Ensino Superior pela Faculdade Batista Brasileira e é
          Licenciado em Ciências com Habilitação em Física pela Universidade Estadual de Santa Cruz. Atualmente é
          professor do ensino básico, técnico e tecnológico, em regime de dedicação exclusiva no Instituto Federal de
          Educação, Ciência e Tecnologia da Bahia - IFBA .Tem experiência na área de Física, com ênfase em Ensino
          de Física e formação de professores
        `,
        img: ``,
        subjectResume: `
          Objetiva-se retratar a experiência vivida em uma Comunidade de Prática de Ensino de Ciências
          enquanto estratégia formativa de professores de Ciências dentro de uma abordagem STEAM. O relato
          descreve desde a ida da missão brasileira ao Reino Unido, formada por 15 pesquisadores de Instituições
          Públicas de Ensino Superior de todas as regiões do Brasil, a partir de um Programa de Cooperação
          Internacional foi fruto de uma iniciativa conjunta do British Council, através do Fundo Newton, e da
          Diretoria de Educação Básica (DEB) da CAPES dentro do Programa Novos Talentos. A atividade constituiu
          de duas etapas: 1. Imersão: quando os participantes tiveram a oportunidade de conhecer ações desenvolvidas
          na área STEAM em várias instituições, formais e não-formais, da Inglaterra e da Escócia; 2. Disseminação
          das atividades no Brasil, junto a professores e estudantes da educação básica de escolas públicas estaduais no
          estado da Bahia.
        `,
        offset: ``,
        action: ``,
      },
      {
        name: `Prof. Dra. Adda Daniela Lima Figueiredo Echalar`,
        institution: `Universidade Federal de Goiás`,
        speaking: `T ecnologias na Educação`,
        description: `
          Doutora em Educação pela Pontifícia Universidade Católica de Goiás (PUC Goiás), na linha
          de pesquisa de Teorias da Educação e Processos Pedagógicos. Mestre em Biologia pela Universidade Federal
          de Goiás (UFG). Cursou especialização em Formação de Professores, com foco em Educação Ambiental,
          13pela PUC Goiás. Graduou-se em Ciências Biológicas, licenciatura e bacharelado, pela PUC Goiás.
          Professora do Programa de Pós-Graduação Stricto Sensu em Educação em Ciências e Matemática
          (PPGECM) e do Departamento de Educação em Ciências (DEC) no Instituto de Ciências Biológicas (ICB) -
          UFG. É integrante dos grupos de pesquisa KADJÓT (Grupo interinstitucional de estudos e pesquisas sobre
          as relações entre as Tecnologias e a Educação) e COLLIGAT - [(Re)pensando a formação de professores de
          Ciências da Natureza]. Vice-coordenadora do Fórum de Licenciatura, regional Goiânia, da UFG (2016-
          2018). Tem experiência na área de educação, com ênfase em educação e tecnologias, teorias da educação,
          processos pedagógicos, formação de professores e educação em Ciências.
        `,
        img: ``,
        subjectResume: `
          A presente exposição busca analisar o conteúdo de políticas públicas com o objetivo de desvelar as
          intencionalidades político-pedagógicas que fomentam a inserção das tecnologias digitais em rede em
          processos educativos. Para tanto, são analisados documentos nacionais, internacionais, um estado da arte e
          dois estados do conhecimento na constituição do atual momento sócio-histórico no qual foram geradas no
          esforço de apreender a “totalidade”. Duas grandes temáticas regem os documentos analisados, sendo eles: a
          inserção das TIC nos países em desenvolvimento na lógica de empregabilidade e do crescimento econômico
          e a inovação pedagógica com uso de tecnologias. Já os estudos acadêmicos nos apresentam a predominância
          de uma lógica formal para se pensar as relações entre educação e tecnologia. No âmbito da empregabilidade
          e crescimento econômico o treinamento escolar além de possibilitar o adensamento da cadeia produtiva de
          tecnologias, facilita a absorção da tecnologia mais elaborada, proveniente dos países desenvolvidos. Para
          tanto, seria necessária uma mão de obra “melhor educada” ou “melhor formada”, ou seja, com maior
          capacidade de absorver as tecnologias modernas e de inovar. No que tange à mudança da prática docente, a
          dita “inovação”, para o uso das tecnologias digitais em rede, percebemos que enquanto os documentos
          internacionais norteiam as diretrizes das reformas educacionais e os documentos nacionais tratam da
          operacionalização de propostas de ação. Compreendemos que o Estado atua de forma sofisticada de
          intervencionismo para a consolidação de uma agenda que visa o treinamento dos professores para o uso dos
          aparatos digitais, almejando a produção de mão de obra qualificada ao final da escolaridade e, consequente,
          do consumo. Concluímos que os documentos expressam políticas de inclusão digital via educação, que são
          geradoras de novos mecanismos de exclusão e ampliam o lastro das desigualdades econômicas e sociais. E
          que a produção acadêmica que versam sobre as tecnologias e a educação pouco se propõe a emancipação dos
          humanos de modo a fomentar mudanças estruturais no que está posto nas políticas.
        `,
        offset: ``,
        action: ``,
      },
      {
        name: `Feliz Alberto Ribeiro Gouveia`,
        institution: `Universidade Fernando Pessoa`,
        speaking: `IA e Engenharia de Software`,
        description: `
          Feliz Ribeiro Gouveia é professor associado com agregação na Universidade Fernando
          Pessoa, Porto. Licenciado em Eng Electrotécnica pela Universidade do Porto (1986) e doutorado em
          14Computação pela Universidade de Tecnologia de Compiègne, França (1992). Tem desenvolvido investigação
          na área de agentes e Inteligência Artificial, representação de conhecimento e modelos semânticos. Participou
          em mais de 20 projetos de I&D financiados, e é autor ou co-autor de uma centena de publicações em revistas
          e conferências internacionais. É autor do livro Fundamentos de Bases de Dados, FCA, Lisboa (2014).
        `,
        img: ``,
        subjectResume: `
          A Engenharia de Software, como disciplina, muito tem contribuído para o sucesso dos projetos de
          desenvolvimento de software. No entanto, cada projeto traz novos desafios, complexidades e torna a
          reutilização e a aprendizagem de casos anteriores muito difícil. Acresce que as pilhas tecnológicas são cada
          vez mais complexas e com interações muito difíceis de prever. É neste campo que a IA pode automatizar
          etapas de processos e contribuir para o maior sucesso dos projetos de software. Vamos rever as áreas onde a
          automação já contribuiu bastante, e identificar as áreas onde a IA pode trazer uma nova perspetiva.
        `,
        offset: ``,
        action: ``,
      },
      {
        name: `Luciano Lacerda`,
        institution: `Totvs`,
        speaking: `Mercado tecnológico, adaptação e transformação dos negócios`,
        description: `
          ESADE Business & Law School Programa de Gamificación, Innovación e Cambio (2014 –
          2015). Fundação Getúlio Vargas - Curso Gestão e Liderança · (2012 – 2012) Ibmec-Programa de
          Desenvolvimento Gerencial da Microsiga· (2004 – 2005). Universidade Federal de Uberlândia – UFU MBA,
          Finanças Empresariais (1998 – 1999). Universidade Federal de Uberlândia – UFU – Graduação, Engenharia
          Eletrônica (1990 – 1994).
        `,
        img: ``,
        subjectResume: `
          A palestra abordará os aspectos relativos a transformação digital os desafios que ela impõe para os
          negócios, seus profissionais e o que você deve fazer para estar alinhado a essa nova realidade. Diversos
          exemplos serão expostos, buscando aproximar a realidade do mercado profissional com o contexto
          acadêmico.
        `,
        offset: ``,
        action: ``,
      },
      {
        name: `Prof. Dr. André Lage Freitas`,
        institution: `Universidade Federal de Alagoas`,
        speaking: `Predicting Brazilian court decisions`,
        description: `
          Dr. André Lage Freitas is an Assistant Professor at Universidade Federal de Alagoas (Brazil)
          and member of LaCCAN lab (Laboratório de Computação Científica e Análise Numérica). He holds a Ph.D.
          in Computer Science from the Institut National des Sciences Appliquées de Rennes (INRIA, France). His
          main research interest lies on designing and developing machine learning applications by using Cloud
          15Computing technologies. He held for two years the Research Coordinator position under the UFAL Vice-
          Presidency of Research and Graduate Course. He has experience in international research projects such as
          CloudArray project (coordinator) funded by Microsoft Azure Research and further international projects
          funded by European Union and Latin a, e.g., EOxposure H2020, S-CUBE FP7, CONICYT (Chile), and
          FAPEAL (Brazil). He reviews research projects for FAPESP (São Paulo Research Foundation) and he is a
          reviewer of the IEEE Geoscience and Remote Sensing Letters journal. He is a member of the IEEE and of
          the SBC (Sociedade Brasileira de Computação).
        `,
        img: ``,
        subjectResume: `
          Predicting case outcomes is useful but still an extremely hard task for attorneys and other Law
          professionals. However, it is not easy to extract valuable information from cases as this requires dealing with
          huge and complex data sets such as myriads of textual legal decisions. In this talk, I will present an approach
          for predicting Brazilian court decisions which is also able to predict whether the decision will be unanimous.
          This approach reaches 82% of accuracy (F1-score) on a data set composed of 4,043 cases from a Brazilian
          court. To our knowledge, this is the first study to forecast judge decisions in Brazil.        
        `,
        offset: ``,
        action: ``,
      },
      {
        name: `Engenheiro Alessandro Cunha`,
        institution: `Avnet`,
        speaking: `Qual é o futuro da IoT?`,
        description: `
          Possui graduação em Engenharia Elétrica pela Universidade Sao Judas Tadeu (2003).
          Atualmente cursa mestrado no Instituto Tecnológico de Aeronáutica - ITA, em São José dos Campos. Atuou
          por mais de 10 anos na área de telecomunicações, prestando serviços para empresas como NEC, Siemens,
          Motorola, Nortel, Lucent, etc. Além das diversas operadoras de telefonica celular: VIVO, Claro, TIM,
          Vesper, Embratel, OI, etc. Tem experiência na área de Engenharia Elétrica, com ênfase em
          Telecomunicações, atuando principalmente nos temas: microcontroladores, sistemas embarcados e
          robótica. (Texto informado pelo autor)
        `,
        img: ``,
        subjectResume: `
          A palavra IoT (Internet of Things) tem sido utilizada em diversas previsões de futuro como algo
          que vai revolucionar a experiência humana nas mais diversas áreas (agricultura, medicina, advocacia,
          produção industrial, etc.). Mas o que realmente já está implantado e funcionando e o que realmente parece
          que será aplicado num futuro próximo? Nesta palestra iremos mostrar alguns casos reais de produtos de IoT
          e vamos mostrar alguns projetos bem interessantes que estão sendo desenvolvidos nesta área.
        `,
        offset: ``,
        action: ``,
      },
      {
        name: `Prof. Msc. Clélia Brandão Alvarenga Craveiro`,
        institution: `Pontíficia Universidade Catolica de Goiás`,
        speaking: `Educação: a Tecnopedagogia o Currículo e a Indústria`,
        description: `
          Possui graduação em Pedagogia pela Universidade Católica de Goiás (1994) , especialização
          em Metodologia do Ensino pela Universidade Católica de Goiás (1984) e mestrado em Educação pela
          Universidade Federal de Goiás (1987). Tem experiência na área de Educação , com ênfase em Administração
          Educacional.
        `,
        img: ``,
        subjectResume: `
          A humanidade encontra-se num contexto de super complexidade, assim é desafiadora a exigência
          que contemporaneidade apresenta à educação entendida como processo e prática que se concretizam nas
          relações sociais que transcendem o espaço e o tempo escolares, tendo em vista os diferentes sujeitos que a
          demandam. Acrescenta a esse contexto, em especial, no Brasil, a não universalização da educação básica em
          que 40% dos brasileiros de até 19 anos ainda não concluíram o ensino médio.
        `,
        offset: ``,
        action: ``,
      },
      {
        name: `Prof. Dr. Sergio Carrazedo Dantas`,
        institution: `Universidade Estadual do Paraná - Campus Apucarana`,
        speaking: `Tecnologia para aprender matemática`,
        description: `
          Licenciado em Matemática pela Universidade Estadual de Londrina (UEL). Especialista em
          Educação Matemática e mestre em Ensino de Ciências e Educação Matemática, ambos pela UEL. Doutor em
          Educação Matemática pela Universidade Estadual Paulista (UNESP). Professor da Universidade Estadual do
          Paraná - Campus Apucarana e membro do Instituto GeoGebra de São Paulo. Possui experiência de dez anos
          na Educação Básica em que trabalhou em escolas da rede pública e da rede particular. Possui experiência na
          formação de professores de matemática e atua neste campo desde 2007. Atualmente é formador de
          professores na UNESPAR, coordenador do Curso de Licenciatura em Matemática e coordena um projeto de
          formação de professores, intitulado Curso de GeoGebra (atualmente na 13a edição) com uma equipe formada
          por 90 profissionais de educação matemática de vários estados do Brasil.
        `,
        img: ``,
        subjectResume: `
          Nessa palestra apresento minha perspectiva pessoal de resolução de problemas utilizando
          Matemática e Tecnologia. Abordo problemas de aritmética, álgebra e geometria, explorando algumas formas
          de resolução a partir do que é proposto em seus enunciados. Além disso, proponho investigações suscitadas
          pela leitura dos enunciados que vão além de suas proposições iniciais, ou seja, proponho uma forma de
          utilização de alguns softwares para desdobramento de problemas em outros mais complexos e
          generalizadores em um trabalho que se assemelha ao que é realizado com a metodologia de investigação
          matemática.
        `,
        offset: ``,
        action: ``,
      },
      {
        name: `Prof. Richard Frayne`,
        institution: `University of Calcary – Canadá`,
        speaking: `New Horizons in MR Imaging – Opportunity and Challenges of Sparse Sampling and
Constrained Reconstruction`,
        description: `
          Professor of Brain Imaging, Radiology and Clinical Neurosciences, Hotchkiss Brain
          Institute, University of Calgary; and Scientific Director, Seaman Family MR Research Centre, oothills
          Medical Centre, Alberta Health Services Calgary, Alberta, CANADA T2N 2T9.
        `,
        img: ``,
        subjectResume: `
          Magnetic resonance (MR) imaging is a powerful non-invasive tool in modern medicine and is used
          worldwide to support important diagnostic medical decisions. Building on earlier discoveries in nuclear
          magnetic resonance, the first MR scanner was commercialized in the early 1980s. These commercial
          instruments mainly adopted a data acquisition and image reconstruction strategy known as “spin-warp” or
          Cartesian imaging. Spin-warp imaging was a critical development that uses a series of gradient magnetic
          fields to acquires MR data in k-space (the Fourier transform, FT, of image space). Image reconstruction is, in
          principle, quite simple, only requiring FT of the acquired kspace data to produce an MR image. Spin-warp
          imaging has a number of advantages including implicit averaging when using the FT and a predictable
          response to most image artifacts (e.g., motion, fat-water off resonance). Spin-warp imaging, however, has
          some drawbacks, primarily the lengthy time required to collect the entire k-space data set. Nonspin-warp
          imaging approaches have been under investigation since before commercialization of MR and have found
          specific application in areas including fast, dynamic (or time resolved) and short echo–time imaging. These
          approaches include radial sampling (similar to computed tomography), spiral sampling and, most recently,
          sparse sampling. In this presentation some sparse sampling approaches will be described and examples of
          their application presented. Their advantages and disadvantages relative to the spin-warp imaging stand will
          be discussed. Focus will be on the signal processing challenges in both data acquisition and image
          reconstruction when employing these methods.
        `,
        offset: ``,
        action: ``,
      },
      {
        name: `Prof. Dra. Letícia Rittner`,
        institution: `Unicamp`,
        speaking: `Aprendizagem de Máquina e suas aplicações na Medicina`,
        description: `
          Graduou-se em Engenharia Elétrica (1994) pela Universidade Estadual de Campinas.
          Trabalhou na indústria automotiva, mais especificamente na Robert Bosch Ltda e Volkswagen do Brasil de
          1994 a 1999, obtendo paralelamente seu título de MBA pela Faculdade Getúlio Vargas (1998). Retornou à
          Academia, recebendo o título de mestre em Engenharia Elétrica (2004) e doutora em Engenharia Elétrica
          pela Universidade Estadual de Campinas (2009), com sanduíche no Montréal Neurological Institut, McGill
          University, Canadá. Realizou Pós-doutorado na Perelman School of Medicine, University of Pennsylvania. É
          atualmente Professora Doutora da Faculdade de Engenharia Elétrica de Computação (FEEC) da
          18Universidade Estadual de Campinas (UNICAMP), onde desenvolve sua pesquisa em processamento e
          análise de imagens médicas e reconhecimento de padrões. Publicou mais de 70 trabalhos, em periódicos
          especializados e eventos científicos. Além das disciplinas regulares da FEEC, têm oferecido mini-cursos de
          Processamento de Imagens para a comunidade acadêmica. Desde 2012 dedica-se também à organização e
          oferecimento de oficinas de programação para crianças e adolescentes.
        `,
        img: ``,
        subjectResume: `
          Se alguém me dissesse há 20 anos atrás que construíriamos máquinas capazes de detectar micro
          sangramentos no cérebro, ou capaz de antever crises epilépticas ou ainda, adivinhar a idade de uma pessoa a
          partir de uma imagem de Tomografia Computadorizada ou Ressonância Magnética, eu teria dificuldade em
          acreditar. Na melhor das hipóteses, acharia tudo isso um bom tema para um filme de ficção científica. Pois
          hoje isso não é mais fruto de uma imaginação fértil, e sim uma realidade, graças à fusão de duas áreas de
          pesquisa extremamente ricas e complexas: a área de Machine Learning (Aprendizado de Máquina) e a
          Medicina. Nesta aula, além de conhecer um pouco das principais técnicas de Machine Learning e de suas
          aplicações na Medicina, vamos tentar responder juntos a algumas questões importantes: a que se deve o
          sucesso sem precedentes quem vem sendo atingido por técnicas de Machine Learning nesta última década?
          Porque as aplicações na área Médica demoraram a se beneficiar destas técnicas, em comparação com outras
          áreas do conhecimento? Até onde podemos (e devemos!) chegar?
        `,
        offset: ``,
        action: ``,
      },
      {
        name: `Amadeu Moura Bego`,
        institution: `Universidade Estadual Paulista (UNESP)`,
        speaking: `Você trabalha ou só dá aula? Um olhar sobre as pesquisas acerca da formação profissional de
professores de química`,
        description: ``,
        img: ``,
        subjectResume: `
          Esta palestra discute a questão da profissionalização do trabalho docente e quais são os saberes
          profissionais necessários para a valorização da atividade docente e a ressignificação de seus status social.
        `,
        offset: ``,
        action: ``,
      }
    ];
  }
}
</script>

<style scoped>
</style>