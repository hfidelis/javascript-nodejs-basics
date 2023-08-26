const pessoa = {
    nome: 'Heitor',
    idade: 19,
    curso: 'ADS IFPE',
    endereco: {
        rua: 'Felipe Camarão',
        numero: 44,
        cidade: 'Jaboatão',
        uf: 'PE',
    },
    dados: {
        peso: 60,
        altura: '1.70',
    }
}

const {nome, endereco: {cidade, uf}, dados: {peso, altura}} = pessoa // Forma mais prática de declarar atributos

console.log(`${nome} pesa ${peso}kg e tem ${altura}cm de altura. Ele mora na cidade de ${cidade} do estado de ${uf}`)