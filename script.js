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

for (let i = 0; i <= 10; i++){
    console.log(i)
}

let contador = 0
while(contado < 10){
    console.log(contador)
    contador++
}

//while(true){
 // console.log('oi')
//}