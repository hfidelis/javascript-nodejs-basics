const pessoa1 = {
    nome: 'Heitor',
    idade: 19,
    endereco: {
        rua: 'Felipe Camarão',
        numero: 44,
        cidade: 'Jaboatão',
    }
}

const pessoa2 = {
    nome: 'Fulano',
    idade: 12,
    endereco: {
        rua: 'Alberto Barreiro',
        numero: 55,
        cidade: 'Recife',
    }
}

const pessoa3 = {
    nome: 'Ciclano',
    idade: 34,
    endereco: {
        rua: 'Moisés Augusto',
        numero: 135,
        cidade: 'Paulista',
    }
}

const getData = (pessoa) => {
    const {nome, idade, endereco: {rua: rua, cidade: cidade}} = pessoa
    return console.log(`O indivíduo ${nome.toUpperCase()} tem ${idade} anos. Mora na cidade de ${cidade.toUpperCase()} na rua ${rua.toUpperCase()}`)
}

getData(pessoa1)
getData(pessoa2)
getData(pessoa3)