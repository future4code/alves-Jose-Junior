
// EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
// Sorteia uma carta. Por exemplo, o rei de ouros
// imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
// imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)

// const carta = comprarCarta(); 
//    let primeiraCartaUsuario = carta.texto
//    let segundaCartaUsuario = carta.texto
//    let primeiraCartaComputador = carta.texto
//    let segundaCartaComputador = carta.texto

//    let pontosUsuario = (primeiraCartaUsuario + segundaCartaUsuario)
//    let pontoComputador = primeiraCartaComputador + segundaCartaComputador

//    console.log(`Cartas - Usuario ${primeiraCartaUsuario.texto} ${segundaCartaUsuario.texto} - ${pontosUsuario}`)
   //  console.log(carta.texto)
   //  console.log(carta.valor)  

 
console.log("♠ ♥ Boas Vindas Ao Jogo De Blackjack! ♦ ♣")

console.log("♠ ♥ Quer iniciar uma nova rodada? ♦ ♣")

if(confirm("Clicar em 'ok' para sim ou 'cancelar' para não")) {
	const carta = comprarCarta(); 
   //let carta1Usuario = carta.texto
  // let carta2Usuario = carta.texto
  
   console.log(`Cartas - Usuario  - ${carta.texto}`)
   console.log(`Carta - Usuario ${carta.texto}`)
   // o que fazer se o usuário clicar "ok"
} else {
	console.log("Acabou o jogo")
   // o que fazer se o usuário clicar "cancelar"
}
