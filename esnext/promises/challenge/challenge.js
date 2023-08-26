const fs = require('fs')
const path = require('path')

function lerArquivo(caminhoArquivo) {
    return new Promise(resolve => {
        fs.readFile(caminhoArquivo, function(_, conteudo) {
            resolve(conteudo.toString())
        })
        console.log('Depois de ler')
    })
}

const caminho = path.join(__dirname, 'dados.txt')

lerArquivo(caminho).then(conteudo => conteudo.split('\n'))
                   .then(resultado => console.log(resultado[1]))

