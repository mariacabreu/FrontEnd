const usuarios = [
    { nome: 'Diego', idade: 23},
    { nome: 'Gabriel', idade: 15},
    { nome: 'Lucas', idade: 30}
];

// Funções lambda (arrow functions)
console.log(`Percorrendo vetor: `)
usuarios.forEach((u) => 
    console.log(`Nome: ${u.nome} - Idade: ${u.idade}`)
)

console.log(`\nFiltrando usuários menor que 18 anos: `)
const menorIdade = usuarios.filter((u) => u.idade < 18);
menorIdade.forEach((u) => 
    console.log(`Nome: ${u.nome} - Idade: ${u.idade}`)
)

console.log(`\nRetornando apenas os nomes da lista: `)
const listaNomes = usuarios.map(u => u.nome);
listaNomes.forEach((nome, index) => 
    console.log(`${++index}º Nome: ${nome}`)
)

console.log(`\nEncontrar um usuário na lista: `)
const usuarioEncontrado = usuarios.find(u => u.nome === 'Lucas');
console.log(usuarioEncontrado);
console.log(`Nome: ${usuarioEncontrado.nome} - Idade: ${usuarioEncontrado.idade}`);

console.log(`\nSomando todas as idades da lista: `)
const somaIdades = usuarios.reduce((soma, u) => soma + u.idade, 0);
console.log(`Soma das idades: ${somaIdades}`);

