const valor = 'Global'

function contextoLexico() {
    console.log(valor)
}

function executarContexto() {
    const valor = 'Local'
    contextoLexico() // Independente de ser chamada em um bloco que contém a mesma constante com um valor diferente, a função se executa e se refere ao escopo onde foi escrita, que no caso a constante mais próxima era a de valor 'Global'.
}

executarContexto()