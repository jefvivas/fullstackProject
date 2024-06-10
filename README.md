# Teste técnico desenvolvedor fullstack

A partir da pasta raíz do projeto, utilize do comando "docker compose up --build" para que levante containers para todo o projeto, no caso, backend, banco de dados( MongoDB) e frontend.

Caso queira realizar os testes sem a utilização do docker, basta na url de conexão com o banco retirar o "mongo" de "mongodb://mongo/clients" e colocar, por padrão "mongodb://127.0.0.1/clients".

Além disso, deverá utiliar os comandos "yarn start" e "yarn dev" nos diretórios do frontend e backend, respectivamente. Caso esteja rodando pelo docker, esse processo será automático.

## Requisitos

Tenha "Yarn" instalado na máquina.

Caso não utilize o Docker para testar, navegue até as pastas do frontend e backend, individualmente, e use o comando "yarn" para instalar as bibliotecas necessárias.

## Migrations

Foram feitos três scripts para preparação do banco de dados, sendo dois deles apenas para que funcionem como uma forma de teste e um deles é necessário para o bom funcionamento do projeto.

Esses scripts devem ser utilizados dentro do diretório do backend, caso esteja utilizando o Docker, utilize o terminal do backend dentro do Docker.

### `yarn insertTestData`

Esse script insere 5 usuários no banco, esses usuários serão marcados com a tag de teste.

### `yarn deleteTestData`

Esse script deleta os usuários marcados com a tag de teste.

### `yarn insertAdminUser`

Esse script é necessário para o bom funcionamento do programa. Como um meio de utilizar da preparação do banco de dados, como pedido na sessão extra do teste, desenvolvi esse script onde será inserido um usuário administrador. Esse usuário será utilizado para realizar login no sistema. Ele tem email "admin@admin.com" e senha "admin123"

## Funcionamento

O projeto é composto de um backend feito em NodeJS com a utilização de typescript, um banco de de dados MongoDB e um frontent em ReactJS utilizando também typescript.

O usuário deverá utilizar o usuário administrador gerado pela migration para fazer login no sistema, nele poderá ver a listagem de clientes e também criar um novo cliente.

A criação de clientes só será permitida diante de algumas validações, que ocorrem tanto no front quando no backend, tais quais nome com tamanho de 3 ou mais caracteres e um email de formato válido.

Todo cliente criado será criado com uma tag de "new_client", mas podemos alterar as tags, nome e email de todos os clientes na página que lista os clientes. Também podemos deletá-los definitivamente.

O email é único no sistema, não sendo possível ter um usuário com um email já utilizado por outro.

## Testes

Dentro de cada pasta, no caso back e frontend, existe um script `yarn test`, onde rodarão os testes feitos com a biblioteca "Jest". No back e frontend os testes cobrirão todos os arquivos das pastas de "Services" e "Utils".
