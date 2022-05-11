/* 1.
    a. false
    b. true
    c. boolean
   2.
    O prombt sempre vai ser uma string, sendo assim será necessário converter a variável para um tipo númerico usando parsenInt. */

/*  1. Faça um programa que:
    
a) Pergunte a idade do usuário
b) Pergunte a idade do seu melhor amigo ou da sua melhor amiga
c) **Imprima na console** a seguinte mensagem: "Sua idade é maior do que a do seu melhor amigo?", seguido pela resposta (`true` ou `false`)
d) **Imprima na console** a diferença de idade (não tem problema se sair um número negativo)
 */  
    const idadeDoUsuario = Number(prompt("Qual sua idade"))
    const idadeMelhorAmigo = Number(prompt("Qual a idade de seu melhor amigo"))
    
    const resultado =  idadeDoUsuario > idadeMelhorAmigo
    console.log("Sua idade é maior do que a do seu melhor amigo?", resultado)

    const resultado2 = idadeDoUsuario - idadeMelhorAmigo

    console.log(resultado2)

/* 2.Faça um programa que:
    
a) Peça ao usuário que insira um número **par**
b) Imprima na console **o resto da divisão** desse número por 2.
c) Teste o programa com diversos números pares. Você notou um padrão? Escreva em um comentário de código.
d) O que acontece se o usuário inserir um número ímpar? Escreva em um comentário de código
*/

    let numeroPar = Number(prompt("Insira um número par"))
    console.log(numeroPar % 2)
    
// O resultado sempre é o mesmo, isso ocorre porque o resto de divisão de um número par dividido por 2 sempre será 0(zero)
// O resultado sempre é o mesmo, isso ocorreo porque o resto de divisão de um número ímpar dividido por 2 sempre será 1(um)


/*3. Faça um programa que pergunte ao usuário sua idade em anos. Depois, imprima no console 
    
a) A idade do usuário em meses
b) A idade do usuário em dias
c) A idade do usuário em horas */

    const idadeEmAnos = Number(prompt("Qual sua idade em anos"))
    
    
    console.log(idadeEmAnos * 12); console.log("meses")

    console.log(idadeEmAnos * 365); console.log("dias")

    console.log(idadeEmAnos * 8760); console.log("horas")

/*4.Faça um programa que pergunte ao usuário dois números. 
Em seguida, faça as operações e imprima no console as seguintes
mensagens seguidas pelo true ou false:
    O primeiro numero é maior que segundo? true
    O primeiro numero é igual ao segundo? false
    O primeiro numero é divisível pelo segundo? true
    O segundo numero é divisível pelo primeiro? true
    
 obs: O true ou false vai depender dos números inseridos e do resultado das operações.*/

 const numero1 = Number(prompt("Digite um número"))
 const numero2 = Number(prompt("Digite outro número"))

 const resposta = numero1 > numero2
 console.log("O primeiro numero é maior que segundo?", resposta)

 const resposta2 = numero1 === numero2
 console.log(" O primeiro numero é igual ao segundo?", resposta2)

 const resposta3 = (numero1 % numero2) === 0
 console.log("O primeiro numero é divisível pelo segundo?", resposta3)

 const reposta4 = (numero2 % numero1) !== 0
 console.log("O segundo numero é divisível pelo primeiro?", reposta4)

