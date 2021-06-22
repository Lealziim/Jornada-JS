# switch
 Olá, hoje irei mostrar como funciona e para que serve um switch.

O switch serve para executar um código de acordo com diversos possíveis resultados.

O Switch é a alternativa perfeita ao if/else caso existam muitas comparações de um valor.

switch (codigo) {
	case 50:
	  console.log("Banana");
	 break;
	case 9540:
	  console.log("Limão");
	 break;
	default:
	  console.log("Desconhecido");
	 break;
}

CASE: como você pode ver pelo exemplo, para cada possibilidade, é necessário termos um "case".

BREAK: o comando "break" serve para encerrar a leitura do switch. Sem ele o código da case abaixo será executado.

DEFAULT: o default é o nosso "else" e executará quando nenhum case corresponder ao valor.

COMPARAÇÃO: O switch compara usando o "===", então tanto o valor quanto o tipo do dado precisam ser iguais.

let codigo = "0";

switch (codigo) {
	case 0:
	     console.log("zero");
	  break;
	case 1:
	     console.log("um");
	  break;
	default:
	     console.log("n/a");
	  break;
}
No caso o numero "0" iria para default, pois "0" e 0 tem diferença.
"0" String.
0 Number.
