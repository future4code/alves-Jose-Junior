CREATE TABLE Actor (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR (255) NOT NULL,
    salary FLOAT NOT NULL,
    birth_date DATE NOT NULL,
    gender VARCHAR(6) NOT NULL
);
SHOW DATABASES;
SHOW TABLES;

DESCRIBE Actor;

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "001", 
  "Tony Ramos",
  400000,
  "1948-08-25", 
  "male"
);
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "002", 
  "Glória Pires",
  1200000,
  "1963-08-23", 
  "female"
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "002", 
  "Cleo Pires",
  1200000,
  "1983-08-15", 
  "female"
);
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "004",
  "Tarciso Meira",
  400000,
  "1949-04-18", 
  "male"
);
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "005", 
  "Juliana Paes",
  719333.33,
  "1979-03-26", 
  "female"
);
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "006", 
  "Jackie Chan",
  4500000,
  "1954-04-07", 
  "male"
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "007", 
  "Bruce Lee",
  8500000,
  "1940-11-27", 
  "male"
);
SELECT * from Actor WHERE gender = "female";

SELECT salary from Actor WHERE name = "Tony Ramos";

SELECT * from Actor WHERE gender = "invalid";

SELECT name, salary from Actor WHERE salary <= 500000;

SELECT id, name from Actor WHERE id = "002";

SELECT * FROM Actor
WHERE (name LIKE "A%" OR name LIKE "J%") AND salary > 300000;

SELECT * FROM Actor
WHERE (name NOT LIKE "A%") AND salary > 300000;

SELECT * FROM Actor
WHERE (name LIKE "%G%" OR name LIKE "%g%");

SELECT * FROM Actor
WHERE ( (name LIKE "%A%" OR name LIKE "%a%" OR name LIKE "%G%" OR name LIKE "%g%") AND salary BETWEEN 350000 AND 900000);

CREATE TABLE Filmes (
    id VARCHAR(255) PRIMARY KEY,
    title VARCHAR (255) NOT NULL UNIQUE,
    synopsis TEXT NOT NULL,
    relese_Date DATE NOT NULL,
    rating INT NOT NULL
);

INSERT INTO Filmes (id, title, synopsis, relese_Date, rating)
VALUES(
  "001", 
  "Se eu fosse você",
  "Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos",
  "2006-01-06", 
  7
);

INSERT INTO Filmes (id, title, synopsis, relese_Date, rating)
VALUES(
  "002", 
  "Doce da mãe",
  "Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela",
  "2012-12-27", 
  10
);

INSERT INTO Filmes (id, title, synopsis, relese_Date, rating)
VALUES(
  "003", 
  "Dona Flor e Seus Dois Maridos",
  "Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.",
  "2017-11-02", 
  8
);

INSERT INTO Filmes (id, title, synopsis, relese_Date, rating) 
VALUES(
	"004",
    "Deus é Brasileiro",
    "Cansado da humanidade, Deus resolve tirar férias para descansar e procura alguém no Brasil capaz de substituí-lo. O borracheiro e pescador Taoca e a solitária Madá deverão guiá-lo até Quincas das Mulas, candidato de Deus a santo.",
    "2003-01-31",
    9
);

SELECT id, title, rating FROM Filmes WHERE id="001";

SELECT * FROM Filmes WHERE title="Deus é Brasileiro";

SELECT id, title, synopsis, rating FROM Filmes WHERE rating >= 7;

SELECT * FROM Filmes WHERE title LIKE "%vida%";

SELECT * FROM Filmes 
  WHERE (title LIKE "%vida%" OR synopsis LIKE "%vida%");

SELECT * FROM Filmes WHERE relese_Date < "2022-08-22";

SELECT * FROM Filmes 
  WHERE ( (relese_Date < "2022-08-22") AND (title LIKE "%vida%" OR synopsis LIKE "%vida%") AND (rating >= 7) );