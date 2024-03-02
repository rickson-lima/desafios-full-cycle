# Desafio: Utilizar o Nginx como proxy reverso para um servidor em Node.js

### Neste desafio os seguintes requisitos foram cumpridos:

1. Subir um container do MySQL com uma tabela 'people'
2. Conectar um servidor em Node.js com o container do MySQL
3. Inserir um registro na tabela people toda vez que o servidor for iniciado
4. Listar os nomes cadastrados na tabela people abaixo do título "Full Cycle Rocks!"
5. Usar um container do Nginx para fazer proxy reverso ao acesso do servidor em Node.js

### Executando a solução

> Clone este repositório

```
git clone https://github.com/rickson-lima/desafios-full-cycle.git
```

> Mude o seu diretório para a pasta do projeto

```
cd desafios-full-cycle/docker/node-nginx
```

> Suba os containers

```
docker compose up -d --build

```
