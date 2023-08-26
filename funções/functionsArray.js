const somar = function(num1 = 0, num2 = 0) {
    return num1 + num2
}

const subtrair = function(num1 = 0, num2 = 0) {
    if (num2 > num1) {
        return num2 - num1
    } else {
        return num1 - num2
    }
}

const multiplicar = function(num1 = 0, num2 = 0) {
    return num1 * num2
}

const potencializar = function(num1 = 0, num2 = 0) {
    return num1 ** num2
}

const mathOps = [somar, subtrair, multiplicar, potencializar]

for (let i = 0; i < mathOps.length ; i++) {
    console.log(mathOps[i](5, 10))
}