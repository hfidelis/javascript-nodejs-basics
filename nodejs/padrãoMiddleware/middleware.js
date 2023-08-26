// padrão middleware (chain of responsability)
// contexto -> carrega os dados de um passo para o outro na cadeia de responsabilidades.
const passo1 = (contexto, next) => {
    contexto.valor1 = 'mid1'
    next()
}

const passo2 = (contexto, next) => {
    contexto.valor2 = 'mid2'
    next()
}

const passo3 = contexto => contexto.valor3 = 'mid3'

function exec(contexto, ...middlewares) {
    const execPasso = indice => {
        middlewares && indice < middlewares.length &&
            middlewares[indice](contexto, () => execPasso(indice +1))
    }
    execPasso(0)
}

const ctx = {}
// Se o passo3 for o primeiro da ordem, não iria executar as próximas funções. Pois é uma função onde não foi chamado o next para ser executado, como as outras.
exec(ctx, passo1, passo2, passo3)
console.log(ctx)