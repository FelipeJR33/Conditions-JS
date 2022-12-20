const aposentada = true;
const portadoraDeDoenca = false;
const totalDeRendimentos = 1000000; //emCentavos

if (aposentada || portadoraDeDoenca) {
    console.log("ISENTA")
} else if (totalDeRendimentos <= 2_855_970) {
    console.log("VAZA LEÃO. JÁ TÁ DIFÍCIL SEM VOCÊ")
} else { console.log("PEGA LEAO") }