## exercicio 1

### a) 

 _VARCHAR_(255): no máximo 255 caracteres.
 _PRIMARY_ KEY: chave primária
 _VARCHAR_(6): no máximo 6 caracteres.
 _NOT NULL_: tem que conter algo, não pode ser nulo.
 _DATE_: variável do tipo data

### b)

_SHOW DATABASES_: mostra o database atual
_SHOW TABLES_: mostra todas as tabelas 

### C) 

_DESCRIBE_: mostra todas as coluna, os tipos das variáveis, se é nulo ou não e qual a chave primaria.

## exercicio 2

### a)

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "002", 
  "Gloria Pires",
  1200000,
  "1963-08-23", 
  "female"
);

### b)

Error Code: 1062. Duplicate entry '002' for key 'PRIMARY'.

Chave primaria 002 já foi cadastrada anteriormente.

### C)

Column count doesn't match value count at row.
A contagem de colunas não corresponde à contagem de valores na linha.

Estava assim (id, name, salary);
E para funcionar, ficou assim:(id, name, salary, birth_date, gender)

### d)

Error Code: 1364. Field 'name' doesn't have a default value.
O campo 'nome' não tem um valor padrão.

Foi incluso o name na variável que era not nulo.

### e)

Error Code: 1292. Incorrect date value: '1950' for column 'birth_date' at row 1.
Valor de data incorreto: '1950' para a coluna 'birth_date' na linha 1.

O formato de entrada do dado data está errado, foi necessário incluir as "".

### f)

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "006", 
  "Jackie Chan",
  4500000,
  1954-04-07, 
  "male"
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "007", 
  "Bruce Lee",
  8500000,
  1940-11-27, 
  "female"
);

## exercicio 3

### a)

SELECT * from Actor WHERE gender = "female";

### b)

SELECT salary from Actor WHERE name = "Tony Ramos";

### c)

SELECT * from Actor WHERE gender = "invalid"

Retornou null em todas as colunas, pois não foi encontrado o valor "invalid" para a variável "gender"

### d)

SELECT name, salary from Actor WHERE salary <= 500000;

### e)

Error Code: 1054. Unknown column 'nome' in 'field list'.
Coluna desconhecida 'nome' na 'lista de campos'.

SELECT id, nome(correto seria name) from Actor WHERE id = "002"

## exercicio 4

### a)

A query seleciona atores que os nome começando com letras "A" ou "J" cujos salários sejam maiores que 300000.

### b)

SELECT * FROM Actor
WHERE (name NOT LIKE "A%") AND salary > 300000;

### C)

SELECT * FROM Actor
WHERE (name LIKE "%G%" OR name LIKE "%g%");

### d)

SELECT * FROM Actor
WHERE ( (name LIKE "%A%" OR name LIKE "%a%" OR name LIKE "%G%" OR name LIKE "%g%") AND salary BETWEEN 350000 AND 900000);

## exercicio 5

### a)

CREATE TABLE Filmes (
    id VARCHAR(255) PRIMARY KEY,
    title VARCHAR (255) NOT NULL UNIQUE,
    synopsis TEXT NOT NULL,
    relese_Date DATE NOT NULL,
    rating INT NOT NULL
);

### b)

INSERT INTO Filmes (id, title, synopsis, relese_Date, rating)
VALUES(
  "001", 
  "Se eu fosse você",
  "Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos",
  "2006-01-06", 
  7
);

### c)

INSERT INTO Filmes (id, title, synopsis, relese_Date, rating)
VALUES(
  "002", 
  "Doce da mãe",
  "Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela",
  "2012-12-27", 
  10
);

### d)

INSERT INTO Filmes (id, title, synopsis, relese_Date, rating)
VALUES(
  "003", 
  "Dona Flor e Seus Dois Maridos",
  "Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.",
  "2017-11-02", 
  8
);

### e)

INSERT INTO Filmes (id, title, synopsis, relese_Date, rating) 
VALUES(
	"004",
    "Deus é Brasileiro",
    "Cansado da humanidade, Deus resolve tirar férias para descansar e procura alguém no Brasil capaz de substituí-lo. O borracheiro e pescador Taoca e a solitária Madá deverão guiá-lo até Quincas das Mulas, candidato de Deus a santo.",
    "2003-01-31",
    9
);

## Exercicio 6

### a)

SELECT id, title, rating FROM Filmes WHERE id="001";

### b)

SELECT * FROM Filmes WHERE title="Deus é Brasileiro";

### c)

SELECT id, title, synopsis, rating FROM Filmes WHERE rating >= 7;

## Exercicio

### a)

SELECT * FROM Filmes WHERE title LIKE "%vida%";

### b)

SELECT * FROM Filmes 
  WHERE (title LIKE "%vida%" OR synopsis LIKE "%vida%")

### c)

SELECT * FROM Filmes WHERE relese_Date < "2022-08-22";

### d)

SELECT * FROM Filmes 
  WHERE ( (relese_Date < "2022-08-22") AND (title LIKE "%vida%" OR synopsis LIKE "%vida%") AND (rating >= 7) );
