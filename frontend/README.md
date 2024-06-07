# Teste Frontend Junior - Tinnova

## Scripts disponíveis

Partindo da raíz do projeto, há dois scripts para serem utilizados.

### `npm start`

Onde você irá de fato iniciar o projeto, podendo utilizar o aplicativo criado.

### `npm test`

Onde irá rodar os testes unitários criados. Além de rodar os testes unitários para todas as funções criadas em arquivos ".ts", ele irá colher toda cobertura de testes e exibir na tela.

## Sobre o projeto

Embora não tenha sido pedido, todo projeto foi feito utilizando typescript, por questões de preferência pessoal.

Foi também feita a separação de vários componentes ou funções que foram utilizadas apenas uma vez no projeto. Mesmo podendo ter chamado direto nesse único local onde é usada, eu preferi fazer de maneira separada para melhorar a organização e facilitar na atomização dos testes.

## Soluções utilizadas

Cada input no formulário de criação de usuário tem uma função de validação do seu campo, essa função é utilizada para exibir que o campo é inválido ou não.

Há também uma função atrelada ao botão de cadastrar, onde fará com que ele fique desabilitado caso qualquer um dos quatro campos de inputs sejam inválidos.

Foi utilizado LocalStorage para persistir os dados. Criei um context para manter os usuários sincronizados entre todas as páginas, me permitindo atualizar facilmente os usuários da lista quando houver a inserção de um novo usuário.

Fiz também uma validação para que não permita inserir um usuário com email ou cpf já existente.

Há um timer no momento em que simula a inserção de um usuário no banco de dados para que possamos ver o spinner do botão, já que por estar utilizando localStorage, a inserção acontece quase que instantaneamente e poderia dificultar ver o spinner.



