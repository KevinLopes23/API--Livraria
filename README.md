<div align="center">

# 📚 API Livraria

**API de livraria com Node.js, Express e MongoDB (Mongoose).**

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)

</div>

## 💡 Sobre

Projeto de estudo de um curso de Node.js: uma API para o catálogo de uma livraria, com modelo de livro no Mongoose (título, editora, preço e páginas) e conexão ao MongoDB configurada por variável de ambiente. Por enquanto a única rota de dados exposta é a listagem de livros.

## ✨ Funcionalidades

- Listagem de livros salvos no MongoDB
- Modelo `Livro` com Mongoose
- Configuração da conexão via `.env` (dotenv)

## 🛠️ Tecnologias

- Node.js (ES Modules)
- Express
- MongoDB + Mongoose
- dotenv, nodemon

## 📌 Endpoints

| Método | Rota | Descrição |
|--------|------|-----------|
| `GET` | `/` | Rota de boas-vindas |
| `GET` | `/livros` | Lista todos os livros |

## 🚀 Como rodar

Requer Node.js e uma instância do MongoDB (local ou Atlas).

1. Crie um arquivo `.env` na raiz:

```env
DB_CONNECTION_STRING=
```

2. Rode:

```bash
git clone https://github.com/KevinLopes23/API--Livraria.git
cd API--Livraria
npm install
npm run dev
```

A API sobe em `http://localhost:3000`.

## 📄 Licença

Distribuído sob a licença MIT. Veja [LICENSE](LICENSE).

## 👤 Autor

Feito por [Kevin Lopes](https://github.com/KevinLopes23)
