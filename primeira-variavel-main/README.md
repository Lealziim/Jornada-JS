# primeira-variavel
Olá, hoje eu aprendi a mexer com variáveis e trouxe uma para mostrar para vocês

O que é uma variável?

Uma variável é um espaço na memória do computador destinado a um dado que é alterado durante a execução do algoritmo. Para funcionar corretamente, as variáveis precisam ser definidas por nomes e tipos. Veja os diferentes tipos de dados:

inteiros: números inteiros (0, 1, 2 , 3…)

reais: números inteiros e decimais (0; 1,2; 2,1; 3)

caracteres: números reais, letras e outros símbolos

lógico: comandos de VERDADEIRO ou FALSO

Você pode imaginar que as variáveis são como “caixas” destinadas a guardar algo mutável ao longo do tempo. Pense em uma aplicação que trabalha com a idade dos usuários cadastrados. Cada um colocará um número inteiro diferente, certo? Portanto a variável seria:

var idade: inteiro

-=-=-=-=-=-=-=-=-=-=-=
TIPOS DE VÁRIAVEIS

var Numero = 10; (Declara uma variavel podendo atribuir um valor)
let outroNumero = 5; (Declara uma variável com escopo de bloco)
const ola = "Olá Mundo"; (Declara uma variável apenas de leitura

Obs: o "Var" não é muito utilizado.

-=-=-=-=-=-=-=-=-=-=-=-
Sobre os nomes das variáveis:

Case-Sensitive: O JavaScript diferencia entre letras maiúsculas e minúsculas.
let nome = "Leal";
let NOME = "STK"; 
nome é diferente de NOME
-=-=-=-=-=-=-=-=-=-=-=-
Caracteres válidos:

Letras: você pode utilizar letras maiúsculas e minúsculas, evite cedilha e acento
let NomeComprador = "Lealzim STK";

Números: Desde que a variável comece com uma letra, você pode utilizar números
let Casa03 = "Casa do Leal";

Underline "_" e cifrão "$": São permitidos em qualquer posição e são utilizados nas
variáveis de bibliotecas e frameworks (Não recomendo começar com eles)
let _variavel = 99;
let $www = true;
