//Vetor de números
const numeros = [1, 2, 3, 4, 5]

//Crie uma nova lista com os números com o valor dobrado do vetor "numeros"
//Mostre apenas numeros pares
//Apresente a soma de todos os valores

const numerosDobrados = numeros.map(n => n * 2);
console.log(`Números dobrados: ${numerosDobrados}`);
const numerosPares = numeros.filter(n => n % 2 === 0);
console.log(`Números pares: ${numerosPares}`);
const somaNumeros = numeros.reduce((soma, n) => soma + n, 0);
console.log(`Soma de todos os números: ${somaNumeros}`);