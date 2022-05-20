// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui
 let altura = prompt("Digite Altura")
 let largura = prompt("Digite a largura")
  let retangulo = altura * largura
  console.log(retangulo)
}

// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
const anoAtual= prompt("Digite o ano atual")
const anoNascimento = prompt("Digite o ano do seu nascimento")
 console.log(anoAtual - anoNascimento)
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
  const calculaIMC = peso /(altura * altura)
  return calculaIMC

}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
  const nome = prompt("Digite seu nome")
  const idade = prompt("Digite sua idade")
  const email = prompt("Digite seu email")
  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
  const cor = prompt("Digite sua cor favorita")
  const cor1 = prompt("Digite sua outra cor favorita")
  const cor2 = prompt("Digite sua outra cor favorita, diferente das respostas anteriores")
  const array = [cor, cor1, cor2]
  console.log(array)
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
  return (string.toUpperCase())

  
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
    return custo / valorIngresso
    
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
  return string1.length === string2.length
  
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
    return array[0]
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui 
  return array[array.length -1]
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
  const elemento1 = retornaPrimeiroElemento(array)
  const elemento2 = retornaUltimoElemento(array)

  array[0] = elemento2
  array[array.length - 1] = elemento1

   return array
}
// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
  return string1.toLowerCase() === string2.toLowerCase()
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui
  // const anoAtual = Number(prompt("Digite o ano atual"))
  // const anoNascimento = Number(prompt("Digite o ano de nascimento"))
  // const anoEmissao = Number(prompt("Digite o ano de emissão do documento"))

  // const idade = anoAtual - anoNascimento
  // const tempoCarteira = anoAtual - anoEmissao

  // const cond1 = idade <= 20 && tempoCarteira >= 5
  // const cond2 = idade > 20 && idade <= 50 && tempoCarteira >= 10
  // const cond3 = idade > 50 && tempoCarteira >= 15

  // console.log(cond1 || cond2 || cond3)

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui
  // const cond1 = ano % 400 === 0
  // const cond2 = (ano % 4 === 0) && (ano % 100 !== 0)
  // return cond1 || cond2

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui
//   const maiorDeIdade = prompt("Você tem mais de 18 anos?")
//   const ensinoMedio = prompt("Você possui ensino médio completo?")
//   const disponibilidade = prompt("Você possui disponibilidade exclusiva durante os horários do curso?")

//   console.log(maiorDeIdade === "sim" && ensinoMedio === "sim" && disponibilidade === "sim")
}