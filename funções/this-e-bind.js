/*
Primeiro modo de corrigir o escopo do this quando ele é invocado fora do alcance, nesse caso a função declarada está sendo invocada pelo método da função setInterval, então o this não está se referindo ao bloco de Pessoa(), assim sendo resolvido com a função bind() se referindo ao this.
*/

function Pessoa() {
    this.idade = 0
    
    setInterval(function() {
        this.idade++
        console.log(this.idade)
    }.bind(this), 1500)
    
}

/*
Já nesse exemplo, o escopo foi corrigido com uma alternativa diferenciada muito utilizada, que é instanciar o this em uma constante dentro do escopo da função, e assim passando a mesma para os atributos que forem declarados posteriormente em outro bloco, assim sendo referenciados ao escopo inicial.
*/

function Pessoa1() {
    this.idade = 0
    const self = this
    setInterval(function() {
        self.idade++
        console.log(self.idade)
    }, 1500)
    
}

/*
Nesse último exemplo, o problema é resolvido declarando uma arrow function, ao invés de uma função normal. Assim o escopo do this não é alterado, pois em arrow functions o this vai continuar sendo do bloco de onde ele foi declarada, ou seja na mesma área da função.
*/

function Pessoa2() {
    this.idade = 0

    setInterval(() => {
        this.idade++
        console.log(this.idade)
    }, 1000)

}

const pessoa = new Pessoa
const pessoa1 = new Pessoa1
const pessoa2 = new Pessoa2