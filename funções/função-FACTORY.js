const criarPessoa = function (nome, idade, cidade) {
    return {
        nome: nome,
        idade: idade,
        cidade: cidade
    }
}

const criarPessoa2 = (nome, idade, cidade) => {
    return {
        nome: nome,
        idade: idade,
        cidade: cidade
    }
}

const pessoa1 = criarPessoa('Heitor', 19, 'Jaboatão')
const pessoa2 = criarPessoa2('Heitorzinho', 15, 'Jaboatão')
console.log(pessoa1)
console.log(pessoa2)