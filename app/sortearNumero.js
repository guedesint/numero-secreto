const menorValor = 1;
const maiorValor = 1000;

const numeroSorteado = gerarNumeroAleatorio();

function gerarNumeroAleatorio() {
    return parseInt(Math.random() * maiorValor +1)
}

