# Usar uma imagem base do Node.js
FROM node:22

# Definir o diretório de trabalho no contêiner
WORKDIR /app

# Copiar o arquivo package.json e package-lock.json
COPY package*.json ./

# Instalar as dependências
RUN npm install

# Copiar o código do aplicativo
COPY . .

# Build do aplicativo
RUN npm run build

# Expor a porta que a aplicação vai rodar
EXPOSE 3000

# Comando para iniciar a aplicação
CMD ["yarn", "start"]