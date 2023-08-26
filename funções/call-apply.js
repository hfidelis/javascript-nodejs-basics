function getPreco(imposto = 0, moeda = 'R$') {
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

const produto1 = {
    nome: 'Computador',
    preco: 5000,
    desc: 0.50,
    getPreco
}

// Aqui a função foi instanciada dentro do objeto produto1, assim referindo se a função do escopo exterior, virando um método do próprio objeto, sendo assim, pode ser chamada normalmente.
console.log(produto1.getPreco())
console.log(produto1.getPreco(0.50, '$'))


// Aqui declaramos um objeto sem o método da função dentro dele, sendo necessário fazer a chamada de outro modo.
const carro = {
    nome: 'Carro',
    preco: 40000,
    desc: 0.10
}

// Método call é passado um objeto para a função se referir, e os parâmetros podem ser passados após ele separados por vírgulas.
console.log(getPreco.call(carro))
console.log(getPreco.call(carro, 0.20, '$'))

// Método Apply é o mesmo do call, porém primeiro é passado o objeto de retorno, e os parâmetros são passados em um array.
console.log(getPreco.apply(carro, [0.50, 'E$']))