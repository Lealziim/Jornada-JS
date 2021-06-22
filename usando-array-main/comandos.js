console.log("Meu primeiro array");

let vetor = [1, 22, 0, 100];
console.log("Vetor:");
console.log(vetor);
console.log("");
console.log("Exibindo o numero 22");
console.log(vetor[1]);  //exibirá 22 pois o numero inicial começa em 0 (zero);
console.log("");
console.log("Alterando Valores");

let vetor2 = [1, 22, 0, 100];
vetor2[0] = 9000; //altera o valor da primeira posição
vetor2[4] = 7; //Insere um valor na após o ultimo elemento.
console.log(vetor2)