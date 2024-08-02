# Clarkeenergia

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.0.4.
## Tecnologias Utilizadas

- Angular 18.0.4
- Node v21.6.1
- HTML5
- CSS3
- TypeScript
- RxJS
- Jasmine (para testes unitários)
- Karma

## Como Rodar o Projeto

### Pré-requisitos

- Node.js (v21.6.1)
- Angular CLI

### Passos para Rodar o Projeto Localmente

1. Clone o repositório:

    ```bash
    git@github.com:asfuture/Desafio-Clarke-Energia-Fullstack.git

    ```

2. Instale as dependências:

    ```bash
    npm install
    ```

3. Rode a aplicação:

    ```bash
    ng serve
    ```

4. Acesse a aplicação no navegador:

    ```
    http://localhost:4200
    ```

### Executando Testes

Para executar os testes unitários, utilize o comando:

```bash
ng test
```
## Utilizando Firebase
### Passos para Hospedar Projeto no Firebase
### Pré-requisitos
- Conta no Firebase
- Firebase CLI

1. Para instalar o Firebase CLI, utilize o comando:
  
  ```bash
  npm install -g firebase-tools
  ```

2. Faça login no Firebase CLI:

  ```bash
  firebase login
  ```

3. Inicialize o projeto Firebase no diretório do projeto: 

  ```bash
  firebase init
  ```

- Selecione "Hosting"
- Escolha o projeto no Firebase
- Configure o diretório público como "dist/nome-do-seu-projeto"
- Configure como um aplicativo de página única (single-page app)

3. Construa a aplicação para produção:

```bash
ng build --prod
```

4. Faça o deploy da aplicação:

```bash
firebase deploy
```
