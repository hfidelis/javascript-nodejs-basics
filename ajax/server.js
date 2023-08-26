const bodyParser = require('body-parser');

const express = require('express')
const app = express()

// Determina que os arquivos na pasta atual são estáticos, para servi-los ao server.
app.use(express.static('.'))
// Config do Body Parser
app.use(bodyParser.urlencoded({ extended: true })) // Transformar dados em OBJ.
app.use(bodyParser.json())

// multer para upload de arquivos (frescura...)
const multer = require('multer')

const storage = multer.diskStorage({
    destination: function(req, file, callback) {
        callback(null, './upload')
    },
    filename: function (req, file, callback) {
        callback(null, `${Date.now}_${file.originalname}`)
    }
})

const upload = multer({storage}).single('arquivo')

app.post('/upload', (req, res) => {
    upload(req, res, err => {
        if (err) {
            return res.end('Ocorre um erro.')
        }

        res.end('Concluído com sucesso.')
    })
})
// Body Parser (linha 8) necessário para essa função, que vai receber dados do form do usuário
app.post('/formulario', (req, res) => {
    res.send({
        ...req.body,
        id: 1
    })
})

app.get('/parOuImpar', (req, res) => {
    // formas de pegar dados para o front
    // req.body
    // req.query
    // req.params
    const par = parseInt(req.query.numero) % 2 === 0
    res.send({
        resultado: par ? 'par' : 'impar'
    })
})

app.listen(8080, () => console.log('Executando...'))