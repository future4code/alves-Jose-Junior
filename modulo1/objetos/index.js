// 1.  Leia o código abaixo
    
//     ```jsx
//     const filme = {
//     	nome: "Auto da Compadecida", 
//     	ano: 2000, 
//     	elenco: [
//     		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
//     		"Virginia Cavendish"
//     		], 
//     	transmissoesHoje: [
//     		{canal: "Telecine", horario: "21h"}, 
//     		{canal: "Canal Brasil", horario: "19h"}, 
//     		{canal: "Globo", horario: "14h"}
//     		]
//     }
    
//     console.log(filme.elenco[0])
//     console.log(filme.elenco[filme.elenco.length - 1])
//     console.log(filme.transmissoesHoje[2])
//     ```
    
//     a) O que vai ser impresso no console?

//     Seria impresso: 
//     Matheus Nachtergaele,
//     Virginia Cavendish,
//     Globo 14h

// 2. Leia o código abaixo
    
//     ```jsx
//     const cachorro = {
//     	nome: "Juca", 
//     	idade: 3, 
//     	raca: "SRD"
//     }
    
//     const gato = {...cachorro, nome: "Juba"}
    
//     const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}
    
//     console.log(cachorro)
//     console.log(gato)
//     console.log(tartaruga)
//     ```
    
//     a) O que vai ser impresso no console?
 //    1. nome: "Juca", idade: 3, raca: "SRD"
//     2. nome: "Juba", igual o anterior
//     3. nome: "Jubo", igual o anterior
    
//     b) O que faz a sintaxe dos três pontos antes do nome de um objeto?
//      Ele faz uma cópia do objeto.

// 3. Leia o código abaixo
    
//     ```jsx
//     function minhaFuncao(objeto, propriedade) {
//     	return objeto[propriedade]
//     }
    
//     const pessoa = {
//       nome: "Caio", 
//       idade: 23, 
//       backender: false
//     }
    
//     console.log(minhaFuncao(pessoa, "backender"))
//     console.log(minhaFuncao(pessoa, "altura"))
//     ```
    
//     a) O que vai ser impresso no console?
    
//     b) Explique o valor impresso no console. Você sabe por que isso aconteceu?
    
    const cachorro = {
        nome: "Juca", 
        idade: 3, 
        raca: "SRD"
    }
    
     const gato = {...cachorro, nome: "Juba"}
    
     const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}
    
    console.log(cachorro)
    console.log(gato)
    console.log(tartaruga)
    