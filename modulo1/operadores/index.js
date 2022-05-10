/* 1.
    a. false
    b. true
    c. boolean
   2.
    O prombt sempre vai ser uma string, sendo assim será necessário converter a variável para um tipo númerico usando parsenInt. */
    
    const idadeDoUsuario = Number(prompt("Qual sua idade"))
    const idadeMelhorAmigo = Number(prompt("Qual a idade de seu melhor amigo"))
    
    const resultado =  idadeDoUsuario > idadeMelhorAmigo
    console.log("Sua idade é maior do que a do seu melhor amigo?", resultado)

    const resultado2 = idadeDoUsuario - idadeMelhorAmigo

    console.log(resultado2)

    let numeroPar = Number(prompt("Insira um número par"))
    console.log(numeroPar % 2)
    
    // O resultado sempre é o mesmo, isso ocorre porque o resto de divisão de um número par dividido por 2 sempre será 0(zero)
    // O resultado sempre é o mesmo, isso ocorreo porque o resto de divisão de um número ímpar dividido por 2 sempre será 1(um)



    


