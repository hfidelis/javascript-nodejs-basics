const http = require('http')
const { get } = require('lodash')

const getTurma = letra => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
    return new Promise((resolve, reject) => {
        http.get(url, res => {
            let result = ''
    
            res.on('data', dados => {
                result += dados
            })
    
            res.on('end', () => {
                try {
                    resolve(JSON.parse(result))
                } catch(e) {
                    reject(e)
                }
            })
        })
    })
}

// Recurso do ES8 
// Obj: Simplificar o uso das promises, tentando deixar mais síncrono...
// 1° Passo: Criar uma função e marcar como async, para funcionar o await
let obterAlunos = async () => {
    const turmaA = await getTurma('A')
    const turmaB = await getTurma('B')
    const turmaC = await getTurma('C')
    return [].concat(turmaA, turmaB, turmaC)
} // Retorna um objeto AsyncFunction

obterAlunos().then(alunos => alunos.map(a => a.nome))
.then(nomes => console.log(nomes))