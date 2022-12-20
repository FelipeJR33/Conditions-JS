//valor do produto comprado.
const valorDoProduto = 50000;

//quantidade de parcelas
const quantidadeDoParcelamento = 10;

//valor pago
const valorPago = 300;

const valorDaParcela = valorDoProduto * 0.01 / quantidadeDoParcelamento
const parcelasPagas = valorPago / valorDaParcela

console.log(`Restam ${quantidadeDoParcelamento - parcelasPagas} parcelas de R$${valorDaParcela}`)