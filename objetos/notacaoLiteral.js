const a = 1
const b = 2
const c = 3

const objeto1 = {a: a, b: b, c:c}
const objeto2 = {a, b, c}
// Ambos são iguais, da forma do objeto2, automaticamente a constante é a chave e o seu valor, também é o valor na estrutura de dados, assim removendo a necessidade da duplicidade da declaração.
console.log(objeto1, objeto2)

// Atribuindo variáveis diretamente aos atributos ->
// 1°
const nome = 'nome'
const valor = 'Heitor'
const objeto3 = {}
objeto3[nome] = valor
console.log(objeto3)

// 2°
const objeto4 = {[nome] : valor}
console.log(objeto4)