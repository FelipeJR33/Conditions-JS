//renda mensal do aluno, em centavos.
const rendaMensalEmCentavos = 200000;

// Tempo decorrido de contrato. Se for maior que 60 meses, o aluno não deve mais nada.
const mesesDecorridos = 13;

// Soma das parcelas já pagas pelo aluno nos meses anteriores (em centavos). Se for igual a 18 mil reais, o aluno não deve pagar mais nada, pois já quitou a dívida.
const totalJaPagoPeloAluno = 500000000;

let motivo = ""

if (rendaMensalEmCentavos < 200000) { motivo = " Nenhum valor é devido pois a renda do estudante está abaixo do valor mínimo de R$ 2000 reais." }
else if (mesesDecorridos > 60) { motivo = " Nenhum valor é devido pois o prazo máximo para pagamento expirou" }
else { motivo = " Nenhum valor é devido pois a dívida já foi paga" }

if (rendaMensalEmCentavos < 200000 || mesesDecorridos > 60 || totalJaPagoPeloAluno >= 1800000) {
    console.log("O valor da parcela desse mês é R$ 0 reais." + motivo)
} else { console.log(`O valor da parcela desse mês é R$ ${rendaMensalEmCentavos * 0.0018} reais`) }
