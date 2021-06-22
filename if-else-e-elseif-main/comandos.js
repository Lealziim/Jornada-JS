console.log("Ele é de:");

let cidade = prompt("Qual sua cidade?");

if(cidade == "Osasco"){
    console.log("Osasco");
    alert("Você é de Osasco");
} else if(cidade == "Barueri"){
    console.log("Barueri");
    alert("Você é de Barueri");
} else if(cidade == "Campinas"){
    console.log("Campinas")
    alert("Você é de Campinas");
} else{
    console.log("Ele ignorou a pergunta")
    alert("Você não disse sua cidade");
}