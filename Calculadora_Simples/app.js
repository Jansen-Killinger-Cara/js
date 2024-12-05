import { Principal } from "./js/Principal.js";
document.getElementById('frmPrincipal').addEventListener
('submit', async function (event) {
    event.preventDefault();
    const nomeForm = document.getElementById('txtNome').value;
    let p = new Principal(nomeForm);
    document.getElementById('resposta').innerHTML =
        `Olá Sr@. ${p.getNome()}, tudo bem com você?`
});
/**@author A função somar() é registrada no escopo global 
 * usando window.somar, permitindo que o HTML a 
 * acione diretamente.
A função obtém os valores dos campos de número, 
verifica se são válidos, realiza a soma e exibe o 
resultado no elemento resultadoSoma. */
window.somar = function () {
    const num1 = parseFloat(document.getElementById('nmbNum1').value);
    const num2 = parseFloat(document.getElementById('nmbNum2').value);

    if (!isNaN(num1) && !isNaN(num2)) {
        const resultado = num1 + num2;
        document.getElementById('resultadoSoma').innerHTML = `Resultado da Soma: ${resultado}`;
    } else {
        document.getElementById('resultadoSoma').innerHTML = "Por favor, insira números válidos.";
    }
};
/**@author
 * A diferença entre window e document no contexto do navegador é que, embora ambos sejam objetos globais usados para acessar e manipular elementos da página, eles representam níveis diferentes da estrutura da página web.

1. window: Representa a Janela do Navegador
O objeto window é o contêiner global que representa a janela do navegador. Ele contém todas as informações sobre a própria janela e é o ponto de entrada para acessar e manipular a página, além de muitas funcionalidades do navegador.

Principais características do window:
É o nível mais alto da estrutura da página: Ele contém o próprio 
document e outros objetos.
Métodos e propriedades:
window.location: Acessa e manipula a URL atual da página.
window.history: Manipula o histórico de navegação.
window.alert(), window.prompt(), window.confirm(): Exibem caixas de diálogo.
window.setTimeout(), window.setInterval(): Agendam funções para serem executadas no futuro.
window.innerWidth e window.innerHeight: Obtêm a largura e altura da janela do navegador.
2. document: Representa o Conteúdo HTML da Página
O objeto document representa o conteúdo HTML carregado na janela 
do navegador, ou seja, o DOM (Document Object Model). 
Ele permite o acesso e manipulação dos elementos da página, 
como <div>, <p>, <button>, e assim por diante.

Principais características do document:
Foca no conteúdo da página: Ele permite acessar e modificar elementos HTML, atributos, estilos, e o texto da página.
Métodos e propriedades:
document.getElementById(), document.querySelector(), document.querySelectorAll(): Permitem selecionar elementos específicos na página.
document.createElement(): Cria novos elementos HTML.
document.body: Representa o elemento <body>, onde o conteúdo principal da página reside.
document.title: Manipula o título da página.
document.cookie: Lê e escreve cookies para a página.
Comparação Prática
Para exemplificar as diferenças entre window e document:

javascript
Copiar código
// Exemplo com window
window.alert("Esta é uma caixa de alerta!"); // Exibe um alerta
console.log(window.location.href); // Exibe a URL atual da página

// Exemplo com document
const title = document.title; // Obtém o título da página
document.getElementById("meuElemento").innerHTML = "Novo 
conteúdo"; // Modifica o conteúdo de um elemento HTML
Resumo das Diferenças
window: Representa a janela do navegador. É o objeto mais 
alto e contém document como uma de suas propriedades.
document: Representa o conteúdo HTML da página (DOM) e é 
usado para acessar e manipular elementos HTML.
Essencialmente, o window contém o document, e o document 
representa a estrutura da página HTML dentro da janela do navegador.
 */
