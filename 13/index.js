//tipo de pagamento (dinheiro, credito, debito, cheque).
const tipoDePagamento = "cheque";

//valor da mercadoria (centavos)
const valorDoProduto = 13000;

let valorComDesconto = 2

if (tipoDePagamento === "credito") {
    valorComDesconto = (valorDoProduto * 0.0095).toFixed(2)
} else if (tipoDePagamento === "cheque") {
    valorComDesconto = (valorDoProduto * 0.0097).toFixed(2)
} else {
    valorComDesconto = (valorDoProduto * 0.009).toFixed(2)
}

console.log(`Valor a ser pago: R$${valorComDesconto}`)