const axios = require('axios')

const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'

const chineses = f => f.pais === 'China'
const mulheres = f => f.genero === 'F'
const menorSalario = (func, funcAtual) => {
    return func.salario < funcAtual.salario ? func : funcAtual
}

axios.get(url).then(res => {
    const funcionarios = res.data
    console.log(funcionarios)

    // Mulher chinesa com menor salário

    const funcChinesa = funcionarios.filter(chineses).filter(mulheres).reduce(menorSalario)

    console.log(funcChinesa )
})