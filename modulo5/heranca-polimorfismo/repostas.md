# Herança

## Exercício 1

a) Não é possivel acessar por motivo de ser private.

b)Vai aparece apenas uma vez porque.


## Exercício 2
```
 class Customer extends User {
  public purchaseTotal: number = 0;
  private creditCard: string;

  constructor(
    id: string,
    email: string,
    name: string,
    password: string,
    creditCard: string
  ) {
    super(id, email, name, password);
    console.log("Chamando o construtor da classe Customer");
    this.creditCard = creditCard;
  }

  public getCreditCard(): string {
    return this.creditCard;
  }
}

const newCustomer = new Customer("1", "robinaldo@labenu.com.br", "robinaldo", "010101", "55020502050454045")
```

a) É impressa apenas uma vez.

B) É impressa apenas uma vez. Tem haver com herança do Customer; é mais ou menos isso :)

## Exercicio 3

console.log(newCustomer.getId())
console.log(newCustomer.getEmail())
console.log(newCustomer.getName())
console.log(newCustomer.purchaseTotal)
console.log(newCustomer.getCreditCard())

a) Não é possível imprimir o password, devido ser privado.


## Exercicio 4

public introduceYourself(): string {
    return 'Olá, Bom dia!'
}
console.log(newCustomer.introduceYourself())


## Exercício 5

public introduceYourself(): string {
return `Olá, sou ${this.name}. Bom dia!`
}

# Polimorfismo

## Exercício 1

a)
```
const client: Client = {
  name: "Robinaldo",
  registrationNumber: 1,
  consumedEnergy: 100,

  calculateBill: () => {
    return 2;
  }
}
```

## Exercício 2

a)Não é possível criar uma instância de uma classe abstrata.

b)para conseguir criar uma instância precisamos declarar uma classe filha e criar uma instância dela.

## Exercício 3

```
export class Residence extends Place {
    constructor(
        protected residentsQuantity: number,
        // Refere-se ao número de moradores da casa

        cep: string
    ) {
        super(cep);
    }

    public getResidentsQuantity(): number {
        return this.residentsQuantity;
    }

}

export class Commerce extends Place {
    constructor(
        protected floorsQuantity: number,
        // Refere-se à quantidade de andares do lugar

        cep: string
    ) {
        super(cep);
    }

    public getFloorsQuantity(): number {
        return this.floorsQuantity;
    }

}

export class Industry extends Place {
    constructor(
        protected machinesQuantity: number,
        // Refere-se à quantidade de máquinas do local 

        cep: string
    ) {
        super(cep);
    }

    public getMachinesQuantity(): number {
        return this.machinesQuantity;
    }

}
```

## Exercício 4

```
class ResidentialClient extends Residence implements Client {
    constructor(
        public name: string,
        public registrationNumber: number,
        public consumedEnergy: number,
        private cpf: string,
        public cep: string,
        public residentsQuantity: number
    ) {
        super(residentsQuantity, cep)
    }

    public getCpf(): string {
        return this.cpf;
    }

    public calculateBill(): number {
        return this.consumedEnergy * 0.75;
    }

}
```
a) A classe ResidentialClient é filha de Residence, ela herda todos os atributos e métodos da classe Residence.


## Exercício 5
```
class CommercialClient extends Commerce implements Client {
    constructor(
        public name: string,
        public registrationNumber: number,
        public consumedEnergy: number,
        private cnpj: string,
        public cep: string,
        public floorsQuantity: number
    ) {
        super(floorsQuantity, cep)
    }

    public getCnpj(): string {
        return this.cnpj;
    }

    public calculateBill(): number {
        return this.consumedEnergy * 0.55;
    }
}
```
a) a semelhança é que herda todos os atributos e métodos da classe Commerce, assim como, a classe ResidentialClient herda todos os atributos e métodos da classe Residence.

b)Um é residentsQuantity e outro é floorsQuantity.


## Exercício 6
```
class IndustrialClient extends Industry implements Client {
    constructor(
        public name: string,
        public registrationNumber: number,
        public consumedEnergy: number,
        private industryNumber: string,
        public cep: string,
        public machinesQuantity: number
    ) {
        super(machinesQuantity, cep)
    }

    public getIndustryNumber(): string {
        return this.industryNumber;
    }

    public calculateBill(): number {
        return this.consumedEnergy * 0.45 + this.machinesQuantity * 100;
    }

}
```
a)IndustrialClient é filha de Industry.

b)A classe IndustrialClient implementa a interface Client, para que possa ser usada como um cliente.

c)É necessário somente a consulta dos dados sem a necessidade de setar nunhum valor.
