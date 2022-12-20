const idade = 18;
const possuiPatologia = true;
const altura = 140;
const ehEstudante = false;

if (idade < 18 || idade > 65 || altura < 150 || possuiPatologia) {
    console.log("ACESSO NEGADO")
} else { console.log((ehEstudante ? "Pague 10" : "Pague 20")) }

