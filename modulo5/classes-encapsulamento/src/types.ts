// Exercicio 1

// a) Serve para quando a classe tiver alguma ação.
// para chama-lo precisa escrever construtor(parâmetros da classe){
//     this(para set)
// }.
//    b) Código não funciona
//    class UserAccount {
//     private cpf: string;
//     private name: string;
//     private age: number;
//     private balance: number = 0;
//     private transactions: Transaction[] = [];
//     constructor(
//        cpf: string,
//        name: string,
//        age: number,
//     ) {
//        console.log("Chamando o construtor da classe UserAccount")
//        this.cpf = cpf;
//        this.name = name;
//        this.age = age;
//     } 
//   }
// c) Usando o public get

//   Exercicio 2

//   a)
//   export class Transaction {
//     private date: string;
//     private value: number;
//     private description: string;
    
//     constructor(
//         date: string,
//         value: number,
//         description: string
//     ) {
//       this.date = date;
//       this.value = value;
//       this.description = description
//     }
//     public getDescription(): string {
//         return this.description
//       }
    
//       public getValue(): number {
//         return this.value
//       }
    
//       public getDate(): string {
//         return this.date
//       }
    
//     const transacao = new Transaction('depósito', 50, '05/09/2022');
//   }

//   Exercicio 3
    // a)
    // class Bank {
    //     private accounts: UserAccount[]
    //     private name: string
    //     private cpf: number
    //     private cidade: string
    //     constructor(
    //         accounts: UserAccount[],
    //         name: string,
    //         cpf: number,
    //         cidade: string,
    //         ) {
    //       this.accounts = accounts;
    //       this.name = name;
    //       this.cpf = cpf;
    //       this.cidade = cidade
    //     }
    // public getName(){
    //   return this.name
    //  }
    // public getCpf(){
    //   return this.cpf
    //  }
    // public getCidade(){
    //   return this.cidade
    // }
    // public setName(){
    //     return this.name
    // }
    // public setCpf(){
    //     return this.cpf
    // }
    // public setCidade(){
    //     return this.cidade
    // }

    // const user = new Bank()
    //   }