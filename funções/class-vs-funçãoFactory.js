class Pessoa {
    constructor(nome) {
        this.nome = nome
    }

    falar() {
        console.log(`Meu nome é ${this.nome}`)
    }
}

const pessoa1 = new Pessoa('Heitor')
pessoa1.falar()


// vantagem de criar com função factory é que o objeto não utiliza o atributo this, diminuindo os conflitos existentes
const criarPessoa = nome => {
    return {
        falar: () => console.log(`Meu nome é ${nome}`)
    }
}

const pessoa2 = criarPessoa('Heitor2')
pessoa2.falar()