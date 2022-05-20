// Tente responder os exercícios dessa seção sem executar o código. Se ficar muito difícil, pode rodar no seu computador **para analisar e pensar sobre o resultado.** 

// 1.  Leia o código abaixo
    
    // const usuarios = [
    //   { nome: "Amanda Rangel", apelido: "Mandi" },
    //   { nome: "Laís Petra", apelido: "Laura" },
    //   { nome: "Letícia Chijo", apelido: "Chijo" }
    // ]
    
    // const novoArrayA = usuarios.map((item, index, array) => {
    //    console.log(item, index, array)
    // })
    
    
//     a) O que vai ser impresso no console?
        //R: Vai impresso o resultado de cada linha do objeto.
       //Exemplo: linha 1 - Nome Amanda Rangel, apelido mandi.   
    
// 2. Leia o código abaixo
    
//     jsx
    // const usuarios = [
    //   { nome: "Amanda Rangel", apelido: "Mandi" },
    //   { nome: "Laís Petra", apelido: "Laura" },
    //   { nome: "Letícia Chijo", apelido: "Chijo" },
    // ]
    
    // const novoArrayB = usuarios.map((item, index, array) => {
    //    return item.nome
    // })
    
    // console.log(novoArrayB)
    
    
// //     a) O que vai ser impresso no console?
        //R: Vai ser impresso somente os nomes.     
        //Exemplo: Amanda Rangel, Laís Petra, Leticia Chijo

// // 3. Leia o código abaixo
    
//     jsx
    // const usuarios = [
    //   { nome: "Amanda Rangel", apelido: "Mandi" },
    //   { nome: "Laís Petra", apelido: "Laura" },
    //   { nome: "Letícia Chijo", apelido: "Chijo" },
    // ]
    
    // const novoArrayC = usuarios.filter((item, index, array) => {
    //    return item.apelido !== "Chijo"
    // })
    
    // console.log(novoArrayC)
    
    
    // a) O que vai ser impresso no console?
    // R: Vai ser impresso nomes e apelidos, exceto a string que escrito Chijo.




    // 1. Dado o seguinte array de cachorrinhos que são clientes de um pet shop, realize 
    // as operações pedidas nos itens abaixo utilizando as funções de array **map** e **filter:**
    
    
    const pets = [
       { nome: "Lupin", raca: "Salsicha"},
       { nome: "Polly", raca: "Lhasa Apso"},
       { nome: "Madame", raca: "Poodle"},
       { nome: "Quentinho", raca: "Salsicha"},
       { nome: "Fluffy", raca: "Poodle"},
       { nome: "Caramelo", raca: "Vira-lata"},
    ]
    
    const nomePets = pets.map((item) => {
        return item.nome
    })

    console.log(nomePets)
   
    const racaPet = pets.filter((item) => {
        if(item.raca.toLocaleLowerCase() === "salsicha")
        return item
    })
    console.log(racaPet)
        
    const poodle = pets.filter((item) => {
        return (item.raca.toLocaleLowerCase() === "poodle")
    })
    
     const racaPoodles = pets.filter(poodle)
    
    const cupomPoodles = (item) => {
        return `Você ganhou um cupom de desconto de 10% para tosar o/a ${item.poodle}`
    }
    
    const descontoPoodles = racaPoodles.map(poodle)
    console.log(descontoPoodles)
    
    //     // item C
    //     [
    //       "Você ganhou um cupom de desconto de 10% para tosar o/a Madame!"
    //       "Você ganhou um cupom de desconto de 10% para tosar o/a Fluffy!"
    //     ]
    //     
        
    
    // a) Crie um novo array que contenha apenas o nome dos doguinhos
    
    // b) Crie um novo array apenas com os [cachorros salsicha](https://www.youtube.com/watch?v=YQ404vwjzus)
    
    // c) Crie um novo array que possuirá mensagens para enviar para todos os clientes que são poodles.
    //  A mensagem deve ser: "Você ganhou um cupom de desconto de 10% para tosar o/a `[NOME]`!"
    
    // - 💡  Dica
        
    //     <aside>
    //     ⭐ Você pode encadear o uso do map e do filter
        
    //     </aside>
        
    
// 2. Dado o seguinte array de produtos, realize as operações pedidas nos itens abaixo utilizando as funções de array **map** e **filter:**
    
    
    // const produtos = [
    //    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    //    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    //    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    //    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    //    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    //    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    //    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    //    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    //    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    //    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
    // ]
    
    
    // - ⭐  Resultados esperados em cada item
        
    //     
    //     // item A
    //     [
    //       "Alface Lavada", 
    //       "Guaraná 2l",
    //       "Veja Multiuso",
    //       "Dúzia de Banana", 
    //       "Leite", 
    //       "Cândida", 
    //       "Detergente Ypê", 
    //       "Vinho Tinto", 
    //       "Berinjela kg", 
    //       "Sabão em Pó"
    //     ]
        
    //     // item B
    //     [
    //        { nome: "Alface Lavada", preço: 2.38 },
    //        { nome: "Guaraná 2l", preço: 7.13 },
    //        { nome: "Veja Multiuso", preço: 11.97 },
    //        { nome: "Dúzia de Banana", preço: 5.42 },
    //        { nome: "Leite", preço: 2.84 },
    //        { nome: "Cândida", preço: 3.14 },
    //        { nome: "Detergente Ypê", preço: 2.09 },
    //        { nome: "Vinho Tinto", preço: 52.25 },
    //        { nome: "Berinjela kg", preço: 8.54 },
    //        { nome: "Sabão em Pó Ypê", preço: 10.26 }
    //     ]
        
    //     // item C
    //     [
    //        { nome: "Guaraná 2l", categoria: "Bebidas", preço: 7.8 },
    //        { nome: "Leite", categoria: "Bebidas", preço: 2.99 },
    //        { nome: "Vinho Tinto", categoria: "Bebidas", preço: 55 }
    //     ]
        
    //     // item D
    //     [
    //        { nome: "Detergente Ypê", categoria: "Limpeza", preço: 2.2 },
    //        { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preço: 10.80 }
    //     ]
        
    //     // item E
    //     [
    //       "Compre Detergente Ypê por R$2,20",
    //     	"Compre Sabão em Pó Ypê por R$10,80"
    //     ]
    //  
        
    
    // a) Crie um novo array que contenha apenas o nome de cada item
    
    // b) Crie um novo array que contenha um objeto com o nome e o preço de cada item, aplicando 5% de desconto em todos eles
    
    // c) Crie um novo array que contenha apenas os objetos da categoria Bebidas
    
    // d) Crie um novo array que contenha apenas os objetos cujo nome contenha a palavra "Ypê"
    
    // - 💡  Dica
        
    //     <aside>
    //     ⭐ Para te ajudar, você pode usar o método de stirngs chamado includes() que verifica se os caracteres 
    //     escolhidos fazem parte da sua string
        
    //     E caso não se lembre como fazer isso, não tenha medo de pesquisar no google!
        
    //     </aside>
        
    
    // e) Crie um novo array onde cada item é uma frase "Compre [NOME] por [PREÇO]". Esse array deve conter frases apenas
    //  dos itens cujo nome contenha a palavra "Ypê"
    
    // - 💡  Dica
        
    //     <aside>
    //     ⭐ Você pode encadear o uso do map e do filter
        
    //     </aside>

   