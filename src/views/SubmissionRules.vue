<template>
  <div class="view">
    <div class="container mt-4">
      <div class="row">
        <div class="col-md-7">
          <v-expansion-panel v-model="panel" expand>
            <v-expansion-panel-content>
              <template v-slot:header>
                <div class="titles">
                  <v-icon class="mr-2">fas fa-file-alt</v-icon>Normas para Apresentação dos Trabalhos
                </div>
              </template>
              <v-card>
                <v-card-text class="grey lighten-3">
                  <p>1. Os trabalhos apresentados no evento serão publicados nos Anais Virtuais.</p>
                  <p>2. Serão consideradas somente contribuições científicas inéditas, originais e enquadradas no escopo do Congresso, sendo vedado ao autor submeter trabalhos já divulgados e pesquisas em fase de planejamento, tais como:</p>
                  <ul class="my-2" id="aceitacao">
                    <li>simples descrição de projeto, intenção de trabalho ou trabalho com resultados preliminares</li>
                    <li>resumo de trabalho já publicado.</li>
                    <li>resumo de revisão bibliográfica.</li>
                    <li>resumos baseados em um mesmo trabalho de investigação e fragmentados com resultados emdiferentes resumos, com ou sem primeiros autores diferentes.</li>
                  </ul>
                  <p>3. Pelo menos um dos autores deverá estar inscrito na JCECEC. Cada inscrito poderá apresentar até doistrabalhos.</p>
                  <p>4. Cabe ao autor indicar o eixo temático do seu trabalho. Em cada área existem duas opções para o autorenquadrar seu trabalho: Estudante de Graduação ou Profissional. Os trabalhos serão avaliados e expostossegundo o enquadramento do autor</p>4.1 Eixos Temáticos para submissão de Trabalhos
                  <ul id="temas">
                    <li>Química</li>
                    <li>Ensino de Química</li>
                    <li>Física</li>
                    <li>Ensino de Física</li>
                    <li>Matemática</li>
                    <li>Ensino de Matemática</li>
                    <li>Ciências da Computação</li>
                    <li>Engenharia da Computação</li>
                    <li>Análise e Desenvolvimento de Sistemas</li>
                    <li>Iniciação Científica</li>
                  </ul>
                  <p>5. Na categoria Estudantes de Graduação, o orientador é considerado um dos autores do trabalho e condição indispensável para a submissão do mesmo.</p>
                  <p>6. O autor receberá e-mail da aceitação de seu trabalho. Atente se seu provedor não tem restrições a spam. Ele poderá "entender" que o remetente está nesta categoria.</p>
                  <p>7. Os tipos de trabalhos permitidos para submissão ao evento são:</p>
                  <ul class="mt-y" id="aceitacao">
                    <li>Pesquisa científica, submetida por estudantes, professores ou pesquisadores de quaisquer níveis.</li>
                    <li>
                      rabalho desenvolvido no âmbito das bolsas do PIBIC, PIBID ou PIBIT. Trabalhos oriundos dessas
                      bolsas, o(s) autor(es) deve(m) citar nas conclusões a Instituição/local do Programa que está(ão) vinculado(s).
                    </li>
                    <li>
                      Estudo de caso, que é um trabalho que se refere ao relato de casos ou experiências que
                      explorem/descrevam/discutam um método ou problema por meio do exemplo – aplicado às situações
                      complexas ou casos raros.
                    </li>
                    <li>Experiências e/ou práticas de ensino-aprendizagem.</li>
                  </ul>
                  <p>8. Os resumos expandidos devem conter:</p>
                  <ul>
                    <li>8.1. Título: Deve ser claro e conciso, permitindo pronta identificação do conteúdo do trabalho</li>
                    <li>
                      8.2. Autores: Nome(s) do(s) autor(es), conforme modelo na página, escrevendo-se o último sobrenome
                      seguindo-se das letras dos demais nomes e sobrenomes. Após o nome de cada autor deve aparecer a
                      instituição a que ele pertence. Pode ter até 10 (dez) autores.
                    </li>
                    <li>
                      8.3. Resumo: o texto deve, obrigatoriamente, explicar o(s) objetivo(s) pretendido(s), os principais
                      procedimentos adotados, os resultados mais expressivos e conclusões.
                    </li>
                    <li>8.4. Palavras-chave: máximo 3 palavras.</li>
                    <li>
                      8.5. Introdução: visão geral sobre o tema estudado (breve revisão da literatura sobre o tema) e relevância da
                      pesquisa. Apresentar os objetivos e justificativos da importância do tema.
                    </li>
                    <li>
                      8.6. Material e Métodos: como o trabalho foi realizado (procedimentos, estratégias, sujeitos participantes,
                      documentos, equipamentos, ambientes etc.) incluindo, se for o caso, a análise estatística empregada.
                      Unidades de medida e símbolos devem seguir o sistema internacional.
                    </li>
                    <li>
                      8.7. Resultados e Discussão: apresentar tabelas, gráficos, etc. Na discussão, confrontar os dados obtidos com
                      o da literatura.
                    </li>
                    <li>
                      8.8. Conclusões: descrever a conclusão do(s) autor(es) com base nos resultados do trabalho, relacionando-as
                      aos objetivos da pesquisa.
                    </li>
                    <li>8.9. Agradecimentos se for o caso, inseri-los após as conclusões.</li>
                    <li>8.10. Referências: segundo normas da ABNT.</li>
                  </ul>
                  <p>
                    9. Observações quanto à submissão de resumos:
                    O respeito aos direitos autorais é de total responsabilidade dos autores do trabalho. Em caso de comprovado
                    o plagio os autores responsáveis ficaram sujeitos a sanções impostas pela Comissão de Organização.
                    O trabalho deve ter rigorosa revisão gramatical, ortográfica, de digitação, de conteúdo e dados da pesquisa.
                    O trabalho sem cuidados em sua preparação ou com deficiências na pesquisa; com as informações
                    desorganizadas e/ou com procedimentos/descrições inadequados ou equivocados; em quaisquer dos itens
                    será recusado.
                  </p>
                  <p>
                    10. Somente serão aceitas as submissões de trabalhos quando houver pelo menos um autor devidamente
                    inscrito na JCECEC.
                  </p>
                  <p>11. Trabalhos com nenhum dos autores inscritos na JCECEC serão descartados.</p>
                  <p>12. Depois de enviado o trabalho via e-mail será impossível alterá-lo.</p>
                  <p>13. Todos os trabalhos aceitos deverão ser apresentados na JCECEC por meio de pôsteres ou oral.</p>
                </v-card-text>
              </v-card>
            </v-expansion-panel-content>
            <v-expansion-panel-content>
              <template v-slot:header>
                <div class="titles">
                  <v-icon class="mr-2">fas fa-file-alt</v-icon>Normas para Apresentação de Pôsteres
                </div>
              </template>
              <v-card>
                <v-card-text class="grey lighten-3">
                  <p>1. O Pôster deverá atender os seguintes padrões:</p>
                  <ul class="my-2" id="aceitacao">
                    <li>Título centralizado, Arial 66, negrito;</li>
                    <li>Nome dos autores centralizado, Arial 46;</li>
                    <li>Nome do evento, Arial 34, negrito;</li>
                    <li>Local e data do evento, Arial 34, negrito;</li>
                    <li>O restante do pôster em Arial de no mínimo 32;</li>
                    <li>OBRIGATORIAMENTE as dimensões do pôster são 90 cm (largura) X 100 cm (altura).</li>
                  </ul>
                  <p>2. Todas essas orientações estão disponíveis no modelo em anexo.</p>
                  <p>
                    3. O local onde o pôster será afixado será divulgado em lista na secretaria do evento a partir do primeiro dia
                    de sua realização.
                  </p>
                </v-card-text>
              </v-card>
            </v-expansion-panel-content>
            <v-expansion-panel-content>
              <template v-slot:header>
                <div class="titles">
                  <v-icon class="mr-2">fas fa-file-alt</v-icon>Normas para Apresentação Oral
                </div>
              </template>
              <v-card>
                <v-card-text class="grey lighten-3">
                  <p>
                    1. A Comissão Científica selecionará e convidará os trabalhos que deveram ser apresentarem via oral os
                    demais serão apresentados na forma de pôster.
                  </p>
                  <p>
                    2. O resultado desta seleção será publicado e informado aos selecionado (via e-mail) uma semana depois do
                    prazo final para o envio do aceite dos trabalhos.
                  </p>
                  <p>
                    3. A apresentação dos trabalhos orais deverá ocorrer em horário e local próprios divulgados em lista na
                    secretaria do evento a partir do primeiro dia de sua realização.
                  </p>
                </v-card-text>
              </v-card>
            </v-expansion-panel-content>
            <v-expansion-panel-content>
              <template v-slot:header>
                <div class="titles">
                  <v-icon class="mr-2">fas fa-user-check</v-icon>Certificados de Participação e Apresentação de Trabalhos
                </div>
              </template>
              <v-card>
                <v-card-text class="grey lighten-3">
                  <p>
                    1. Todos os Certificados de apresentação de trabalhos são disponibilizados no site da PUC após a realização
                    do evento.
                  </p>
                  <p>
                    2. O responsável da seção de pôsteres fará a verificação da presença do pôster e de pelo menos um dos
                    autores, que terá que assinar a lista de presença. Sem a assinatura do autor o certificado do trabalho não é
                    liberado.
                  </p>
                  <p>
                    3. Os Certificados estarão disponíveis para impressão no site da PUC pelo período de 60 (sessenta) dias após
                    o evento. Depois desse prazo não mais será possível obter o certificado.
                  </p>
                </v-card-text>
              </v-card>
            </v-expansion-panel-content>

            <v-expansion-panel-content>
              <template v-slot:header>
                <div class="d-flex">
                  <div class="titles">
                    <v-icon class="mr-2">fas fa-award</v-icon>Premiações
                  </div>
                </div>
              </template>
              <v-card>
                <v-card-text class="grey lighten-3">
                  <p>1. A ECEC oferece aos apresentadores de trabalhos 3 modalidades de prêmios.</p>
                  <ul class="my-2" id="aceitacao">
                    <li>Prêmio Cientista ECEC Euler</li>
                    <li>Prêmio Cientista ECEC Gauss</li>
                    <li>Prêmio ECEC Marie Curie</li>
                  </ul>
                  <p>
                    2. Os trabalhos cujos autores estejam ausentes na data da apresentação são excluídos do processo de
                    premiação da JCECEC.
                  </p>
                  <p>3. A JCECEC confere o Prêmio Cientista ECEC Euler ao melhor trabalho apresentado na forma oral.</p>
                  <p>4. A JCECEC confere o Prêmio Cientista ECEC Gauss ao melhor trabalho apresentado na forma de pôster.</p>
                  <p>
                    5. A JCECEC confere o prêmio ECEC Marie Curie ao melhor trabalho inscritos na categoria Iniciação
                    Científica.
                  </p>
                  <p>
                    6. Todos os trabalhos premiados serão convidados a publicar um artigo completo na Revista da Escola de
                    Ciências Exatas e da Computação – RECEC.
                  </p>
                </v-card-text>
              </v-card>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </div>
        <div class="col-md-5">
          <Login />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import { mixins } from "vue-class-component";
import PhotoHeader from "@/components/organization/PhotoHeader.vue";
import Main from "@/components/organization/Main.vue";
import Paragraph from "@/components/organization/Paragraph.vue";
import Login from "@/views/Login.vue";
import { getSession, refreshSession } from "../services/authentication";
import { CognitoUserSession } from "amazon-cognito-identity-js";
import LoaderMixin from "../mixins/loader";

@Component({
  components: {
    PhotoHeader,
    Main,
    Paragraph,
    Login
  }
})
export default class SubmissionRules extends mixins(LoaderMixin) {
  private panel = [true, false, false];

  private async created() {
    try {
      this.showLoader();
      const session = await getSession();

      if (session instanceof CognitoUserSession) {
        if (session.isValid()) {
          this.hideLoader();
          this.$router.push("/conta");
        } else {
          const newSession = await refreshSession(session.getRefreshToken());

          if (newSession instanceof CognitoUserSession) {
            this.hideLoader();
            this.$router.push("/conta");
          } else {
            this.hideLoader();
            this.$router.push("/submissao");
          }
        }
      }
    } catch (error) {
      this.hideLoader();
      this.$router.push("/submissao");
    }
  }
}
</script>

<style scoped>
#aceitacao li {
  list-style-type: disc !important;
}

#temas li {
  list-style-type: decimal-leading-zero !important;
  margin-left: 10px;
}

.titles {
  font-size: 16px !important;
  font-weight: 500;
}
</style>