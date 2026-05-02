# 🧪 Banco API Test

![Node.js](https://img.shields.io/badge/Node.js-18+-green)
![Mocha](https://img.shields.io/badge/Test-Mocha-blue)
![Chai](https://img.shields.io/badge/Assertion-Chai-yellow)
![Supertest](https://img.shields.io/badge/API-Supertest-orange)
![Status](https://img.shields.io/badge/status-em%20desenvolvimento-lightgrey)

---

## 📌 Sobre o Projeto
Este projeto tem como objetivo a automação de testes de API REST para a aplicação:

🔗 https://github.com/julioodelimas/banco-api

Ele foi desenvolvido utilizando JavaScript com foco em validação de endpoints, regras de negócio e confiabilidade da API.

---

## 🎯 Objetivo
Colaborar com a qualidade da API através de testes automatizados, cobrindo:

- Validação de status HTTP
- Estrutura de resposta
- Regras de negócio
- Testes positivos e negativos

---

## 🚀 Tecnologias Utilizadas

- Node.js
- Mocha
- Chai
- Supertest
- Mochawesome

---

## 📁 Estrutura do Projeto

```text
banco-api-test/
│
├── test/                # Casos de teste
├── mochawesome/         # Relatórios gerados
├── node_modules/
├── .env
├── package.json
└── README.md
```

---

## ⚙️ Setup do Projeto

### 1. Clone o repositório
```bash
git clone https://github.com/kasesantos/banco-api-test.git
cd banco-api-test
```

### 2. Instale as dependências
```bash
npm install
```

---

## 🔐 Variáveis de Ambiente

Crie um arquivo `.env` na raiz do projeto:

```env
BASE_URL=http://localhost:3000
```

> A API precisa estar em execução para os testes funcionarem.

---

## ▶️ Executando os Testes

```bash
npm test
```

---

## 📊 Relatórios de Teste

O projeto utiliza **Mochawesome** para geração de relatórios HTML.

Após rodar os testes:

```text
/mochawesome/mochawesome.html
```

Abra esse arquivo no navegador para visualizar os resultados.

---

## 🧪 Exemplo de Teste

```javascript
const request = require('supertest');
const expect = require('chai').expect;

describe('GET /contas', () => {
  it('deve listar contas com sucesso', async () => {
    const response = await request(process.env.BASE_URL)
      .get('/contas');

    expect(response.status).to.equal(200);
    expect(response.body).to.be.an('array');
  });
});
```

---

## 📈 Boas Práticas Aplicadas

- Separação de responsabilidades
- Uso de variáveis de ambiente
- Testes independentes
- Clareza nos asserts
- Relatórios automatizados

---

## 🔗 Documentação das Bibliotecas

- Mocha → https://mochajs.org/
- Chai → https://www.chaijs.com/
- Supertest → https://github.com/ladjs/supertest
- Mochawesome → https://github.com/adamgruber/mochawesome

---

## 🤝 Contribuição

Contribuições são bem-vindas! Sinta-se livre para abrir PRs ou issues.
