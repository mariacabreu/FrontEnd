const listaNomes = ['Ana', 'Bia', 'Carlos', 'Daniel'];

console.log(`\nExibindo todos os elementos da lista:`);
console.log(listaNomes);

console.log(`\nExibindo o primeiro elemento da lista:`);
console.log(listaNomes[0]);

console.log(`\nAdicionando um elemento no vetor:`);
listaNomes.push('Eduardo');
console.log(listaNomes);

console.log(`\nRemovendo o primeiro elemento do vetor:`);
listaNomes.shift();
console.log(listaNomes);

console.log(`\nRemovendo o último elemento do vetor:`);
listaNomes.pop();
console.log(listaNomes);