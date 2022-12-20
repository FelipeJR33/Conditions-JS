const jogada1 = "roxo"
const jogada2 = "azul"

if (jogada1 === jogada2) {
    console.log("Deu empate")
} else if (jogada1 === "tesoura" && jogada2 === "papel") {
    console.log("A jogada 1 ganhou")
} else if (jogada1 === "pedra" && jogada2 === "tesoura") {
    console.log("A jogada 1 ganhou")
} else if (jogada1 === "papel" && jogada2 === "pedra") {
    console.log("A jogada 1 ganhou")
} else if (jogada2 === "tesoura" && jogada1 === "papel") {
    console.log("A jogada 2 ganhou")
} else if (jogada2 === "pedra" && jogada1 === "tesoura") {
    console.log("A jogada 2 ganhou")
} else if (jogada2 === "papel" && jogada1 === "pedra") {
    console.log("A jogada 2 ganhou")
} else { console.log("Ao menos uma das entradas parece não ser válida. Verifique se as entradas foram de fato 'pedra', 'papel' ou 'tesoura' ") }