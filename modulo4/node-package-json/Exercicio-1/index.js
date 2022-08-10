// Exercício 
// a) É o comando process.argv[]

// b) 
// c)
const nome = process.argv[2]
const idade = Number(process.argv[3])


const usuario = (nome, idade) => {
    if (nome && idade) {
        return (
            console.log(`Olá ${nome}, você tem ${idade} anos, Em sete anos você terá ${idade + 7}`)
        )
    } else {
        return "Você deve digitar dois valores: Nome e Idade"
    }
}

usuario(nome, idade)
// console.log("Olá mundo")