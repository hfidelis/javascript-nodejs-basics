const obj = {
    a: 1,
    b: 2,
    c: 3,
    somar() {
        return a + b + c
    }
}
console.log(JSON.stringify(obj))

console.log(JSON.parse('{"nome": "Heitor", "idade": 19, "curso": "ADS", "linguagens": {"frontend": ["Angular", "React"], "backend": ["Ruby", "Python"]}}'))
/* console.log(JSON.parse("{'nome': 'Heitor', 'idade': 19, 'curso': 'ADS'}"))
A linha acima irá gerar erro, pois para transformar uma string JSON em objeto, é necessário que os atributos estejam cercados por
aspas duplas, e as asplas simples no exterior do 'objeto', caso contrário não será reconhecido.
*/