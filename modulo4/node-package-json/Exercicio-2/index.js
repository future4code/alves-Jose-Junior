const valor1 = Number(process.argv[2])
const valor2 = Number(process.argv[3])
const calculo = process.argv[4]

const operacao = (valor1, valor2, calculo) => {
switch(calculo){
    case "soma":
         return (valor1 + valor2)
    case "sub":
        return (valor1 - valor2)
    case "mult":
        return (valor1 * valor2)
    case "div":
        return (valor1 / valor2) 
}
}

const verifica = (valor1, valor2, calculo) => {
    if (valor1 && valor2 && calculo) {
       return console.log("Resposta:", operacao(valor1, valor2, calculo)) 
    } else {
        return "Você deve digitar dois valores"
    }
}

verifica(valor1, valor2, calculo)