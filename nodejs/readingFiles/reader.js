const fs = require('fs');

// __dirname -> diretório atual
const path = __dirname + '/arquivo.json'

// sincrono - Trava requisições etc, menos interessante...
const content = fs.readFileSync(path, 'utf-8')
console.log(content)

// assincrona, depois do callback carregar o arquivo, o comando é executado.
fs.readFile(path, 'utf-8', (err, conteudo) => {
    const config = JSON.parse(conteudo) // transformando o retorno JSON em OBJETO
    console.log(`assíncrona -> ${config.db.host}:${config.db.port}`)
})

// síncrono diretamente usando o REQUIRE sem precisar do parse.
const config = require('./arquivo.json')
console.log(config.db)

// leitura de pastas
fs.readdir(__dirname, (err, arquivos) => {
    console.log('Conteúdo')
    console.log(arquivos)
})