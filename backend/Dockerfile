# Usar uma imagem base do Node.js
FROM node:22

# Definir o diretório de trabalho no contêiner
WORKDIR /app

# Copiar o arquivo package.json e package-lock.json
COPY package*.json ./

# Instalar as dependências
RUN npm install

RUN npm install -g nodemon ts-node typescript

# Copiar o código do aplicativo
COPY . .

# Expor a porta que a aplicação vai rodar
EXPOSE 1111

# Comando para iniciar a aplicação
CMD ["yarn", "dev"]