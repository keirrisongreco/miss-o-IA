const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");


  const perguntas = [
  {
    enunciado:
      "Ao ter um trabalho em grupo, Artthur precisa decidir entre seus super amigos, fieis que nunca o trocariam ou uma garota falsa. O que ele escolheria?",
    alternativas: ["A Garota!", "os Amigos maravilhosos!!!"],
  },
  {
    enunciado:
      "Ao escolher a garota falsa, artthur vai ao laboratório com ela e tem que escolher onde ira se sentar?",
    alternativas: [
      "Longe de seus super amigos fiéis, pois ele gostaria de se tornar falso igual a ela",
      "Perto dos seus super amigos fiéis que iriam o ajudar não importa as dificuldade, mesmo ele tendo feito escolhas ruins no passado.",
    ],
  },
  {
    enunciado:
      "Depois de escolher onde se sentar, Artthur começa a fazer o trabalho até o sinal bater para o recreio e depois vai comer toda comida das escola. Ao voltar do recreio ele percebe que apagou os arquivos dele e as unicas pessoas que ficaram na sala depois que ele saiu  foram seus super amigos fiés e a garota falsa. Quem ele acusa?",
    alternativas: [
      "Defende a ideia de que a IA pode criar novas oportunidades de emprego e melhorar habilidades humanas",
      "Me preocupo com as pessoas que perderão seus empregos para máquinas e defendem a importância de proteger os trabalhadores.",
    ],
  },
  {
    enunciado:
      "Ao final da discussão, você precisou criar uma imagem no computador que representasse o que pensa sobre IA. E agora?",
    alternativas: [
      "Criar uma imagem utilizando uma plataforma de design como o Paint.",
      "Criar uma imagem utilizando um gerador de imagem de IA.",
    ],
  },
  {
    enunciado:
      "Você tem um trabalho em grupo de biologia para entregar na semana seguinte, o andamento do trabalho está um pouco atrasado e uma pessoa do seu grupo decidiu fazer com ajuda de uma IA. O problema é que o trabalho está totalmente igual ao do chat. O que você faz?",
    alternativas: [
      "Escrever comandos para o chat é uma forma de contribuir com o trabalho, por isso não é um problema utilizar o texto inteiro.",
      "O chat pode ser uma tecnologia muito avançada, mas é preciso manter a atenção pois toda máquina erra, por isso revisar o trabalho e contribuir com as perspectivas pessoais é essencial.",
    ],
  },
];

let atual = 0;
let perguntaAtual;

function mostraPergunta() {
  perguntaAtual = perguntas[atual];
  caixaPerguntas.textContent = perguntaAtual.enunciado;
}

mostraPergunta();