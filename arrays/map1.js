const nums = [1, 2, 3, 4, 5]

const toMoney = n => `R$ ${parseFloat(n).toFixed(2).replace('.', ',')}`

const sumTen = n => n + 10

// map retorna um novo array, com os elementos mapeados pela função callback passada.

const doubleNums = nums.map(function(number) {
    return number * 2
})

const moneyNums = nums.map(toMoney)

const numsplusTen = nums.map(sumTen)

// É possível aplicar o map em cima de outro array gerado pelo map.
const moneyPlusTen = nums.map(sumTen).map(toMoney)

console.log(`Map Double -> ${doubleNums}`)
console.log(`Map $$ -> ${moneyNums}`)
console.log(`Map + 10 -> ${numsplusTen}`)
console.log(`Map + 10 & $$ -> ${moneyPlusTen}`)