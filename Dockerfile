# Estágio de construção
FROM node:18-alpine as build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build

# Estágio de produção
FROM nginx:stable-alpine
# Copia o conteúdo da pasta build gerada no estágio de construção para o nginx
COPY --from=build /app/build /usr/share/nginx/html
# Substitui o arquivo de configuração do nginx
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
# Comando para rodar o nginx em primeiro plano
CMD ["nginx", "-g", "daemon off;"]