let nome 
let idade

console.log(typeof nome, idade)

// Foi impresso no console **undefined** por não atribuir valor as variáveis //

nome = prompt ("Qual seu nome")
idade = prompt ("Qual sua idade")
console.log(typeof nome, idade)

// Foi impresso no console **object e null** diferente da última vez que foi *undefined*//

console.log("Olá", nome, "você tem", idade, "anos")

