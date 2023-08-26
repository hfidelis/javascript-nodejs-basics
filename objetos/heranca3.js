const father = {
    name: 'Estevao',
    hairColor: 'black'
}

const son1 = Object.create(father) // define que o protótipo é o parâmetro
son1.name = 'Heitor'
console.log(son1) // os atributos do protótipo não são mostrados, mas podem ser acessados.
console.log(son1.hairColor)

//
// Passando o protótipo, e um parâmetro que representa os atributos desse novo objeto.
const son2 = Object.create(father, {
    name: {value: 'Heitor2', writable: false, enumerable: true} // Não pode ser sobrescrito, e Pode ser listado.
})
console.log(son2.name)
son2.name = 'Fulano'
console.log(son2.name)
console.log(Object.keys(son2), Object.keys(son1))