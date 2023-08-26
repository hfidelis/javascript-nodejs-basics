const pessoa1 = {
    nome: 'Heitor',
    idade: 19,
    curso: 'ADS IFPE',
    cidade: 'Jaboatão'
}

const pessoa2 = {
    nome: 'Fulano',
    idade: 11,
    curso: 'NUTRI IFPE',
    cidade: 'Recife'
}

const pessoa3 = {
    nome: 'Ciclano',
    idade: 16,
    curso: 'ESCOLA',
    cidade: 'Paulista'
}

const pessoas = [pessoa1, pessoa2, pessoa3]

const showAtributos = function(lista) {
    for (let i = 0; i < lista.length ; i++) {
        const {nome, idade, curso, cidade} = lista[i]
        console.log(nome, idade, curso, cidade)
    }
}

showAtributos(pessoas)