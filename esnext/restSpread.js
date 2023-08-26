// Rest || Spread 
// Examples ->

const sum1 = (...nums) => {
    let total = 0
    nums.forEach(n => total += n)
    return total
}

const result = sum1(10, 20, 500, 30, 40, 33, 47, 1000)
console.log(result)

//

const bot = {
    nome: 'Robô',
    codename: 12345,
    weapons: ['Gunshot', 'Sword']
}

const evilBot = {...bot, evil: true}
console.log(evilBot)

//

const group1 = ['Max Verstappen', 'Lewis Hamilton', 'Charles Leclerc']
const group2 = ['Sergio Perez', 'Carlos Sainz', 'Fernando Alonso']

const group = [...group1, ...group2, 'Alexander Albon', 'Esteban Ocon', 'Sebastian Vettel']
console.log(group)