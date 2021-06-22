# usandoarray
 Olá, hoje irei mostrar o que é um Array e como utiliza-lo

Array é uma lista ou coleção de dados que pode ser acessada por índice.
para criar um vetor vazio basta criar uma variavel e atribuir [] a ela

let vetor = [];

Atribuindo valores: você pode criar um vetor com seus valores separados por virgula.

let vetor = [1, 22, 0, 100];

Obs: pode-se adicionar valores de qualquer tipo de vetor.

let vetor = [1, "olá mundo", true, [1,2,3]];

Acessando valores: os valores podem ser acessados através de seu índice

let vetor = [1, 22, 0, 100];
console.log(vetor[1]); //exibirá 22

Observe que o índice começa no 0. então o primeiro item está na posição 0,
o segundo na posição 1 e assim por diante.

Alterando e atribuindo valores pelo índice:
Com o índice, você pode: 
a) Alterar um valor existente
b) Inserir um novo valor em uma posição específica

let vetor = [11, 21, 23, 433, 50];

vetor[0] = 9000; //altera o valor da primeira posição
vetor[5] = 7; //Insere um valor na após o ultimo elemento.
