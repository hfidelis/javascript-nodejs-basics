const drivers = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
drivers.pop() // Remove o último elemento.
console.log(drivers)

drivers.push('Verstappen') // Adiciona para a última posição
console.log(drivers)

drivers.shift() // Remove o primeiro elemento
console.log(drivers)

drivers.unshift('Hamilton') // Adiciona na primeira posição
console.log(drivers)

// adicionando com splice
drivers.splice(2, 0, 'Bottas', 'Massa') // Após o 2° elemento do array (Não pela ordem de index), serão adicionados as duas strings passadas como param. , não será removido nenhum item pois o 2° param. foi preenchido com 0.
console.log(drivers)

// removendo com splice
drivers.splice(3, 1) // Após o 3° elemento do array, será removido 1 elemento.
console.log(drivers)

// SLICE
const someDrivers = drivers.slice(2) // Retorna um novo array, a partir do elemento do parâmetro passado
console.log(someDrivers)

// SLICE 2
const someDrivers2 = drivers.slice(1, 4) // Retorna do index[1] até o index[3], pois o 4 não será adicionado, seria necessário passar [i+1] para considerar o 4.
console.log(someDrivers2)