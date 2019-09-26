const Courses = [
  {
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
  },
  {
    title: "Fluig e ferramentas da plataforma",
    instructor: "Luvânio Lopes",
    institution: "Totvs",
    desc: `O Fluig é uma plataforma WEB com (app mobile) concebida pela TOTVS no ano 2013 com
        finalidade de apoiar as empresas no mapeamento, gestão de processos, gestão de documentos e comunicação
        entre colaboradores. Através dos recursos oferecidos viabiliza e proporciona as empresas a redução de
        custos, otimização dos processos e melhor qualidade na segurança das informações. O objetivo deste
        minicurso é realizar uma abordagem teórica e prática sobre a plataforma os recursos oferecidos e a aplicação
        deles no mercado.`,
    date: "12/11",
    time: "14:00-18:00",
    place: "LAB102-C, Área II"
  },
  {
    title: "Introdução à ciência de dados",
    instructor: "Anderson da Silva Soares",
    institution: "Instituto de Informática – UFG",
    desc: `Introdução abrangente sobre o que é Ciência de Dados e porque a profissão de Cientista de Dados
        está em alta demanda em todo o mundo. Você vai aprender a relação entre Ciência de Dados e Big Data, os
        principais conceitos ligados a Data Science e as profissões relacionadas.`,
    date: "12/11",
    time: "14:00-18:00",
    place: "LAB103-C, Área II"
  },
  {
    title: "Utilizando Python em Pentesting",
    instructor: "Msc. Rafael Leal Martins",
    institution: "PUC Goiás",
    desc: `Python é uma linguagem de programação multiplataforma fácil de aprender que tem várias
        bibliotecas de terceiros. Muitas ferramentas de hacking de código aberto são escritas em Python e podem ser
        facilmente integradas no seu script. Este curso tem como objetivo apresentar scripts Python para apresentar
        práticas de Ethical Hacking.`,
    date: "12/11",
    time: "14:00-18:00",
    place: "LAB104-C, Área II"
  },
  {
    title: "Micropython com ESP32",
    instructor: "Msc. Daniel Corrêa da Silva",
    institution: "PUC Goiás",
    desc: `O MicroPython é uma implementação gratuita e de código aberto do Python 3 otimizada para
    rodar em um microcontrolador com com baixos recursos computacionais, oferecendo um sistema
    operacional Python de baixo nível com uma Interface de Linha de Comando (CLI). A proposta é instalar o
    MicroPython sobre a plataforma ESP32 para que se possa programar a suas diversas interfaces eletrônicas:
    entradas digitais / saídas digitais e analógicas (GPIO) e comunicação WiFi.`,
    date: "12/11",
    time: "14:00-18:00",
    place: "LAB105-C, Área II"
  },
  {
    title: "Introdução a visão computacional",
    instructor: "Prof. Dr. Gustavo Teodoro Laureano",
    institution: "Instituto de Informática – UFG",
    desc: `Introdução à Visão Computacional. Percepção e Inteligência. Processos em Visão Computacional.
    Relação 3D – 2D em aquisição. Imagem, Visão e modelagem de câmeras. Múltiplas Vistas. Características
    Intrínsecas. Visão estéreo. Movimento e rastreamento de objetos. Reconhecimento de Objetos. Aplicações e
    Efeitos Especiais.`,
    date: "13/11",
    time: "14:00-18:00",
    place: "LAB101-C, Área II"
  },
  {
    title: "Python para Ciência de Dados",
    instructor: "Analista de Sistemas Cristiano Borges de Oliveira",
    institution: "IBM Brasil",
    desc: `Noções básicas do Python, seu primeiro programa, tipos de dados, expressões e variáveis,
    operações de strings, estruturas de dados python, listas e tuplas, conjuntos, dicionários, fundamentos da
    programação em python, condições e comandos condicionais em cascata, laços, funções, objetos e classes,
    trabalhando com dados em python.`,
    date: "13/11",
    time: "14:00-18:00",
    place: "LAB102-C, Área II"
  },
  {
    title: "Introdução a FPGA",
    instructor: "Msc. Gustavo Sigueira Vinhal",
    institution: "PUC Goiás",
    desc: `PGA (Field Programmable Gate Array) são dispositivos de hardware amplamente utilizados em
    computação de alto desempenho. Também conhecidos como hardwares reconfiguráveis, esse tipo de
    arquitetura oferece a possibilidade de construção de hardware a nível de programação. Assim, permitem a
    criação de dispositivos dedicados para aplicações específicas para ganho de desempenho.
    Este minicurso visa dar uma ampla visão sobre FPGA. Serão apresentados conceitos básicos da plataforma e
    da linguagem de programação VHDL, necessária para programação do dispositivo.`,
    date: "13/11",
    time: "14:00-18:00",
    place: "LAB103-C, Área II"
  },
  {
    title: "Introdução à Internet das coisas",
    instructor: "Msc. Ludmilla Reis Pinheiro dos Santos",
    institution: "PUC Goiás",
    desc: `Atualmente há diversos dispositivos conectados à Internet com capacidade de monitoramento,
    processamento, atuação e comunicação entre si, com usuários e máquinas. Este minicurso apresentará uma
    introdução à Internet das Coisas (IoT), algumas plataformas que possibilitam o controle de dispositivos reais
    e os desafios na utilização dessa tecnologia. Será realizado uma implementação prática, empregando os
    principais conceitos de IoT.`,
    date: "14/11",
    time: "14:00-18:00",
    place: "LAB101-C, Área II"
  },
  {
    title: "Conhecendo o Docker",
    instructor: "Msc. Daniel Vitor de Lucena",
    institution: "IFG",
    desc: `Nesse minicurso vamos abordar os fundamentos do Docker. Apresentar os princípios, práticas,
    comandos, ferramentas e como ele pode ser um meio para facilitar a entrega e melhorar a disponibilidade das
    aplicações.`,
    date: "14/11",
    time: "14:00-18:00",
    place: "LAB103-C, Área II"
  },
  {
    title: "Introdução à inteligência artificial",
    instructor: "Msc. Ricardo Augusto Pereira Franco",
    institution:
      "Escola de Engenharia Elétrica, Mecânica e de Computação (EMC) da Universidade Federal de Goiás (UFG)",
    desc: `As redes neurais, também conhecidas como redes neurais artificiais, possuem a capacidade de
    aprender uma tarefa a partir da experiência com ou sem um professor. Uma rede neural, composta por uma
    certa quantidade de neurônios interligados, possui o objetivo de assemelhar seu funcionamento ao do cérebro
    humano. As redes neurais possuem bases em muitas disciplinas: Neurociência, Matemática, Estatística,
    Física, Ciência da Computação e Engenharia. Assim, nesse minicurso será apresentado assuntos introdutórios
    em relação à inteligência artificial, ao aprendizado de máquina e às redes neurais.`,
    date: "14/11",
    time: "14:00-18:00",
    place: "LAB104-C, Área II"
  }
];

export default Courses;
