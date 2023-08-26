const objeto1 = Object.preventExtensions({
    name: 'Produto',
    value: 100,
    tag: 'Offer!'
})

objeto1.name = 'Tv' // Os valores podem ser alterados
delete objeto1.tag // Os atributos deletados...
objeto1.description = 'Sou um produto' // Porém não é possível adicionar novos atributos.
console.log(objeto1)
console.log(Object.isExtensible(objeto1)) // Não é extensível: False

const objeto2 = {
    name: 'Heitor',
    age: 18
}
Object.seal(objeto2) // Seal : Os atributos não podem ser adicionados nem deletados, apenas modificados.
objeto2.age = 19
delete objeto2.age
console.log(objeto2)

// Object.freeze : Atributos SELADOS e CONSTANTES...