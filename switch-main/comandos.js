console.log("Teste Switch");
console.log("");
const cargos = "Gerente";
switch (cargos) {
    case 'CEO':
        console.log("Olá, CEO");
        break;
    case 'Gerente':
        console.log("Olá, Gerente");
        break
    case 'Novato':
        console.log("Olá, Novato");
        break;
    default:
        console.log("Você não definiu um login em comandos.js")
}

