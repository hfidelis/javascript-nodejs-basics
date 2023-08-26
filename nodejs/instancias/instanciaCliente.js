const contadorA = require('./instanciaUnica')
const contadorB = require('./instanciaUnica')

const contadorC = require('./instanciaNova')()
const contadorD = require('./instanciaNova')()

contadorA.inc()
contadorA.inc()

console.log(contadorA.valor, contadorB.valor)

contadorC.inc()
contadorC.inc()
// Função factory, C e D retornam objetos independentes. Enquanto A e B que são instâncias únicas, apontam para o mesmo objeto.
console.log(contadorC.valor, contadorD.valor)