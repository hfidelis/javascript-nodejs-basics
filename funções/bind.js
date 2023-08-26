const pessoa = {
    frase: 'Olá, tudo bem?',
    falar() {
        console.log(this.frase)
    }
}

const retornaNome = function() {
    console.log(`Nome: ${this.nome} | Idade: ${this.idade}`)
}

const falar = pessoa.falar.bind(pessoa)
falar()

const heitor = retornaNome.bind({nome: 'Heitor', idade: 19})
heitor()