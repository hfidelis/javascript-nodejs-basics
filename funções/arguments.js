const somaInfinita = function () {
    let resultado = 0
    for (let arg in arguments) {
        resultado += arguments[arg]
    }
    return resultado
}

console.log(somaInfinita(700, 70, 7, 23))