const soma = function (a, b) {
    return a + b
}

const potencia = (a, b) => a ** b

const showResults = function (a, b, operation) {
    console.log(operation(a, b))
}

showResults(10, 20, soma)

showResults(10, 20, function(a, b) {
    if (a>b) {
        return a - b
    } else {
        return b - a
    }
})

showResults(2, 4, potencia)

showResults(5, 4, (a, b) => a * b)