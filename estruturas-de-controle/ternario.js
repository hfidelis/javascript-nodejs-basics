let nota = 6;

const resultado = nota >= 7 ? 'APROVADO' : 'REPROVADO';

console.log(resultado);

///////////////////////////////////////////////////////////////

const result = nota => {
    return nota >= 7 ? 'Aprovado' : 'Reprovado';
};

console.log(result(8));