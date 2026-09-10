const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");


  const perguntas = [
  {
    enunciado:
      "Ao ter um trabalho em grupo, Artthur precisa decidir entre seus super amigos, fieis que nunca o trocariam ou uma garota falsa. O que ele escolheria?",
    alternativas: [
      {
        texto: "os Amigos maravilhosos!!!", 
        afirmacao:"afirmacao"
      },
      {
        texto: "A garota!",
        afirmacao:  "afirmacao"
      }
     
     
    ]
  },
  {
    enunciado:
      "Ao escolher a garota falsa, artthur vai ao laboratório com ela e tem que escolher onde ira se sentar?",
    alternativas: [
      {
        texto: "Longe de seus super amigos fiéis, pois ele gostaria de se tornar falso igual a ela",
        afirmacao:"afirmacao"
      },
     {
      texto:  "Perto dos seus super amigos fiéis que iriam o ajudar não importa as dificuldade, mesmo ele tendo feito escolhas ruins no passado.",
     }
     
    ]
  },
  {
    enunciado:
      "Depois de escolher onde se sentar, Artthur começa a fazer o trabalho até o sinal bater para o recreio e depois vai comer toda comida das escola. Ao voltar do recreio ele percebe que apagou os arquivos dele e as unicas pessoas que ficaram na sala depois que ele saiu  foram seus super amigos fiés e a garota falsa. Quem ele acusa?",
    alternativas: [
     {
      texto:"Ele a acusa seus super amigos extremamente fieis",
      afirmacao:"afirmacao"
     },
      {
       texto:"Ele acusa a garota falsa.",
       afirmacao:"afirmacao"
      }
      
    ],
  },
  {
    enunciado:
      "Ao final da acusação Artthur descobre que foi a garota falsa, ele perdoa ela?",
    alternativas: [
      {
        texto: "Ele perdoa ela.",
        afirmacao:"afirmacao"
      },
      {
        texto: "Ele decide não perdoar, voltar para seus super amigos e se arrepender de seus erros.",
        afirmacao:"afirmacao"
      }
     
     
    ],
  },
 
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
  if(atual >= perguntas.length){
    mostraResultado();
    return;
  }
  perguntaAtual = perguntas[atual];
  caixaPerguntas.textContent = perguntaAtual.enunciado;
  caixaAlternativas.textContent = "";
  mostraAlternativas();

}

function mostraAlternativas(){
   for(const alternativa of perguntaAtual.alternativas) {
      const botaoAlternativas = document.createElement("button");
      botaoAlternativas.textContent = alternativa.texto;
      botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
      caixaAlternativas.appendChild(botaoAlternativas);
   }
}
function respostaSelecionada(opcaoSelecionada){
    const afirmacoes = opcaoSelecionada.afirmacoes;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
      
}

function mostraResultado(){
  caixaPerguntas.textContent = "futuramente...";
  textoResultado.textContent = historiaFinal;
  caixaAlternativas.textContent = "";
}
mostraPergunta();
