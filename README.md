# Aplicação de Login em React

Esta aplicação foi desenvolvida como parte de uma atividade somativa da disciplina de DevOps e Desenvolvimento Web. O objetivo é criar um componente de login simples, que valida as credenciais de um usuário e exibe mensagens adequadas conforme os resultados.

## Funcionalidade

A aplicação de login possui os seguintes requisitos:

1. **Campos de Entrada**:
   - **E-mail**: Um campo para o usuário inserir seu e-mail.
   - **Senha**: Um campo para o usuário inserir sua senha.
   
2. **Botão de Validação**:
   - Um botão de "Acessar" que, ao ser clicado, verifica as credenciais inseridas.
   
3. **Validação**:
   - Caso o e-mail inserido seja **`eduardo.lino@pucpr.br`** e a senha seja **`123456`**, será exibida a mensagem **"Acessado com sucesso!"**.
   - Caso contrário, a mensagem **"Usuário ou senha incorretos!"** será mostrada.

## Tecnologias Utilizadas

- **React**: Biblioteca JavaScript para a construção da interface de usuário.
- **Node.js**: Ambiente de execução para JavaScript no lado do servidor.
- **Docker**: Utilizado para containerizar a aplicação e facilitar o processo de deployment.

## Como Rodar a Aplicação

### 1. Clonar o Repositório

Primeiro, faça o clone deste repositório para sua máquina local:

```bash
git clone https://github.com/seu-usuario/login-app.git

cd login-app
```

### 2. Instalar Dependências

A aplicação é construída com React, e para rodá-la localmente, você precisa instalar as dependências. Para isso, use o `npm` (ou `yarn`, se preferir):

```bash
npm install
```

Este comando irá instalar todas as dependências listadas no arquivo `package.json`.

### 3. Rodar a Aplicação Localmente

Após instalar as dependências, você pode rodar a aplicação localmente com o seguinte comando:

```bash
npm start
```

Isso irá iniciar o servidor de desenvolvimento do React, e você poderá acessar a aplicação no seu navegador em:

```
http://localhost:3000
```

### 4. Rodar a Aplicação com Docker

Caso queira rodar a aplicação em um ambiente containerizado, siga os passos abaixo.

#### 4.1. Criar a Imagem Docker

Na raiz do seu projeto, execute o comando para criar a imagem Docker:

```bash
docker build -t login-app .
```

#### 4.2. Rodar o Container Docker

Após a construção da imagem, rode o container da aplicação com o seguinte comando:

```bash
docker run -p 8080:80 login-app
```

Agora, a aplicação estará rodando em `http://localhost:8080`. 

### 5. Arquivos Importantes

- **`Dockerfile`**: Contém a configuração para a criação da imagem Docker da aplicação. Utiliza dois estágios, um para a construção e outro para a produção.
- **`nginx.conf`**: Arquivo de configuração do Nginx utilizado para servir a aplicação React em produção.
- **`src/App.js`**: O código do componente React que contém o formulário de login e a lógica de validação.
- **`package.json`**: Contém as dependências do projeto e scripts de execução.

## Estrutura do Projeto

```
login-app/
│
├── build/                   # Arquivos gerados durante a build para produção
├── node_modules/            # Dependências do projeto
├── public/                  # Arquivos estáticos (como index.html)
├── src/                     # Código-fonte da aplicação React
│   └── App.js               # Componente principal da aplicação (Login)
├── Dockerfile               # Arquivo para criar a imagem Docker
├── nginx.conf               # Arquivo de configuração do Nginx
├── package.json             # Dependências do projeto
└── README.md                # Este arquivo
```

## Considerações Finais

Este projeto foi desenvolvido para praticar o uso de React, containerização com Docker e a lógica de validação de formulários. Ao seguir os passos acima, o projeto estará pronto para ser executado localmente ou em produção através do Docker.

---

**Autor**: Julia Padilha da Rosa

**Data de Criação**: 21/04/2025

---