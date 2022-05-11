//1.
// let array
// console.log('a. ', array) 

// a. undefined 

// // array = null
// // console.log('b. ', array)

// b. null

// // array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
// // console.log('c. ', array.length)

// c. 11

// let i = 0
// console.log('d. ', array[i])

// d. 3 

// array[i+1] = 19
// console.log('e. ', array)

// e. [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]

// const valor = array[i+6]
// console.log('f. ', valor)

//f. 6

//2.
// const frase = prompt("Digite uma frase")

// console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length)

// SUBI NUM ÔNIBUS EM MIRRICOS 27

// const usuario = prompt("Digite seu nome")
// const email = prompt("Digite seu e-mail")

// console.log(`O e-mail ${email} foi cadastrado com sucesso. Seja bem vinda(o), ${usuario}`)

const comidasArrays = ["arroz", "feijão", "macarrão", "banana", "frango"]
console.log(comidasArrays)


console.log(`Essas são as minhas comidas preferidas: \n ${comidasArrays[0]} \n ${comidasArrays[1]} \n ${comidasArrays[2]} \n ${comidasArrays[3]} \n ${comidasArrays[4]}`)

let perguntaUsuario = prompt("Qual sua comida favorita?")
comidasArrays[1] = perguntaUsuario
console.log(`Essas são as minhas comidas preferidas: \n${[comidasArrays[1]]}`)