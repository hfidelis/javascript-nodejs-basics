const carrinho = [
    '{"nome": "Banana", "preco": 3.45}',
    '{"nome": "Café", "preco": 5.50}',
    '{"nome": "Caderno", "preco": 45.22}',
    '{"nome": "Xícara", "preco": 8.20}'
]

// constante função para transformar JSON em objeto.
const toObject = json => JSON.parse(json)
// constante função para retornar apenas o preço.
const onlyPrice = produto => produto.preco

// Array apenas com os preços.
const result = carrinho.map(toObject).map(onlyPrice)
console.log(result)