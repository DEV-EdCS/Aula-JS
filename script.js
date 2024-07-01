// comentario

let nome = "Fulano"

console.log(nome)
console.log("Hello World")
console.log("Olá " + nome) //Olá Fulano

let num1 = 10
let num2 = 5

let resultado = num1 + num2
console.log(resultado) //15 //preferivél utilizar assim!
console.log(num1 + num2) //15
console.log(10 + 5) //15
console.log(10 - 5) //5
console.log(10 * 5) //50
console.log(10 / 5) //2
console.log(10 % 5) //0
console.log(10 ** 5) //100000

console.log(num1 == num2) //false
console.log(5 === '5') //false //compara VALOR E TIPO nesse caso false
console.log(5 == '5') //true

console.log(num1 != num2) // true
console.log(6 !== '7') // true

console.log(6 > 5) //true
console.log(4 < 3) //false
console.log(4 <= 4) //true
console.log(5 >= 8) //false

let idade = 33

if (idade >= 18 && idade <= 70) {
    console.log("VOTO OBRIGATORIO")
} else if (idade >= 16 || idade > 70) {
    console.log("VOTO OPCIONAL")
}
else {
    console.log("NAO VOTA")
}

let situacao = (idade >= 18 && idade <= 70) ? "VOTO OBRIGATORIO" : "NAO VOTA"

let cor_favorita = "azul"
switch (cor_favorita) {
    case "azul":
        console.log("A COR FAVORITA É AZUL")
    case "vermelho":
        console.log("A COR FAVORITA É VERMELHO")
        break
    default:
        console.log("COR INVALIDA")
}

for (let i = 0; i <= 10; i++) {
    console.log(i)
}

let contador = 0
while (contador < 10) {
    console.log(contador)
    contador++
}

//while(true){
// console.log('oi')
//}

do {
    console.log(contador)
    contador++
} while (contador < 10)

function soma(x, y) {
    let resultado = x + y
   // console.log(resultado)
   return resultado
}

//soma(2, 3)
//soma(-3, 50)

let valor = soma(2, 3)
let valor1 = soma(-3, 50)
let valor2 = soma(valor, valor1)

function ola() {
    console.log("OLA")
}

ola()

setInterval(ola, 5000) //Exemplo: usado para criar carrossel

const frutas = ['maçã', 'banana' , 'morango']
console.log(frutas [0])

for (let f = 0; f < 3; f++) {
    console.log(frutas[f]) 
}

for (let f = 0; f < frutas.length; f++) {
    console.log(frutas[f]) 
} //melhor forma de leitura de array

for (const f of frutas){
    console.log(f)
} //outra forma de leitura de array

frutas.forEach(function(f) {
    console.log(f)
})

frutas.push('Manga') //['maça', 'banana, 'morango', 'Manga']

frutas.forEach(function(f){
    console.log(f)
})

//debugger funcão para detectar erros

let x = 10
let y = 'a'
try {
    if(y == 0){
        throw RangeError('Valor zero não é permitido') //RangeError está fora da faixa
    } else if (typeof(y) == 'string' || typeof(x) == 'string') {
        throw TypeError('Valor do tipo string não é permitido')
    }
    console.log(x/y)
} catch (error) {
    console.error("Aconteceu um erro: " + error)
    console.error(`O erro ${error} aconteceu`)
}