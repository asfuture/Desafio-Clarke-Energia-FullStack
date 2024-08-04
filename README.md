### Desafio Clarke Energia - Escolha de Fornecedor de Energia

Bem-vindo ao Desafio Clarke Energia! Esta aplicação web é projetada para o mercado livre de energia sustentável, onde você pode encontrar o fornecedor ideal para atender à sua demanda mensal de consumo. Ao informar seu consumo mensal de energia, você poderá escolher entre diversos fornecedores com base em suas necessidades, garantindo que encontre a opção mais adequada para você.

## Requisitos de Produto:
- O usuário deverá informar a sua consumo mensal de energia, exemplo: 30000 kWh (um número fictício > 0)
- Ao informar o consumo, o sistema deverá mostrar quais fornecedores poderiam atender a necessidade do cliente
- Cada fornecedor deve ter as seguintes informações: nome, logo, estado de origem, custo por kWh, limite mínimo de kWh, número total de clientes e avaliação média dos clientes
- Um fornecedor só pode atender um cliente caso o consumo mensal de energia deste seja maior do que o lmite mínimo de kWh do fornecedor

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
  docker run -p 8080:80 clarkeenergia
  ```

3. Acessar a Aplicação 

 - Abra um navegador web e acesse a URL http://localhost:8080 para ver a aplicação em execução.

