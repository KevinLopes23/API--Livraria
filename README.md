# 📚 API Livraria

API para gerenciamento de livros e autores, permitindo cadastro, consulta, atualização e remoção de registros.

## 🚀 Tecnologias Utilizadas
- Node.js
- Express
- MongoDB (Mongoose)
- JavaScript (ES6+)

## 📂 Estrutura do Projeto
```
API--Livraria/
│-- src/
│   ├── controllers/
│   │   ├── AutorController.js
│   │   ├── LivroController.js
│   ├── models/
│   │   ├── Autor.js
│   │   ├── Livro.js
│   ├── routes/
│   │   ├── autoresRoutes.js
│   │   ├── livrosRoutes.js
│   ├── config/
│   │   ├── dbConfig.js
│   ├── app.js
│-- package.json
│-- README.md
```

## 🛠 Configuração e Instalação
1. **Clone o repositório**
   ```sh
   git clone https://github.com/seu-usuario/API--Livraria.git
   cd API--Livraria
   ```

2. **Instale as dependências**
   ```sh
   npm install
   ```

3. **Configure o banco de dados**
   - Crie um arquivo `.env` na raiz do projeto e adicione a URL do banco MongoDB:
   ```env
   MONGO_URI=mongodb://localhost:27017/livraria
   ```

4. **Inicie o servidor**
   ```sh
   npm start
   ```
   O servidor estará rodando em `http://localhost:3000`

## 📌 Rotas Disponíveis

### 📖 Livros
- **`GET /livros`** - Retorna todos os livros
- **`GET /livros/:id`** - Retorna um livro específico
- **`POST /livros`** - Cadastra um novo livro
- **`PUT /livros/:id`** - Atualiza um livro existente
- **`DELETE /livros/:id`** - Remove um livro

### ✍️ Autores
- **`GET /autores`** - Retorna todos os autores
- **`GET /autores/:id`** - Retorna um autor específico
- **`POST /autores`** - Cadastra um novo autor
- **`PUT /autores/:id`** - Atualiza um autor existente
- **`DELETE /autores/:id`** - Remove um autor

---
📌 *Desenvolvido por Kevin(https://github.com/KevinLopes23).*
