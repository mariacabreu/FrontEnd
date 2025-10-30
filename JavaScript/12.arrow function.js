const soma = (a, b) => a + b
const somar = soma(5, 3)
console.log(`A soma é: ${somar}`)

const sub = (a, b) => {
    return a - b
}
const subtrair = sub(10, 4)
console.log(`A subtração é: ${subtrair}`)

const mult = (a, b) => a * b
const multiplicar = mult(6, 7)
console.log(`A multiplicação é: ${multiplicar}`)

const div = (a, b) => {
        if (b == 0) {
            return ("Divisão por zero não é permitida.")
        } else {
            return a / b
        }
}
const dividir = div(50, 0)
console.log(`A divisão é: ${dividir}`)