# Desafio 2 Docker FullCycle
> Esse repositório contém o segundo desafio do módulo de docker do curso fullcycle onde é necessário fazer a comunicação entre alguns containers.

## Desafio 2 - Nginx com Node.js

Nesse desafio temos um container Node.js fazendo a inserção, cada vez que for acessado, de um nome na tabela people de um banco de dados (que subirá em um outro container) e tudo isso será acessado por meio do Nginx funcionando como proxy reverso. O retorno da aplicação ao acessar o endereço `localhost:8080/` deverá ser:

```ini
      <h1>Full Cycle Rocks!</h1>

      - Lista de nomes cadastrada no banco de dados.
```

* Para rodar as aplicações, basta executar o comando abaixo:

```bash
$ docker-compose up -d
