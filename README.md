# 📂 Visualizador de Perfil do GitHub

## 📖 Descrição
Este projeto é um visualizador de perfis do GitHub. Com ele, você pode pesquisar por um nome de usuário e ver informações detalhadas do perfil, incluindo avatar, nome, bio, número de seguidores e os 10 repositórios mais recentes.

## ✨ Funcionalidades
- 🔍 Pesquisar por um usuário do GitHub.
- 🖼️ Exibir informações do perfil (avatar, nome, bio, seguidores).
- 🕙 Listar os 10 últimos repositórios atualizados do usuário.
- 🎨 Interface responsiva.

## 💻 Tecnologias Utilizadas
- **HTML5** para a estrutura da página.
- **CSS3** para estilização, incluindo Flexbox, Grid e animações.
- **JavaScript (ES6+)** para a lógica da aplicação e manipulação do DOM.
- **GitHub API** para buscar os dados dos usuários e seus repositórios.

## 🚀 Como Executar
1. Clone este repositório:
   ```bash
   git clone https://github.com/seu-usuario/visualizador-perfil-github.git
   ```
2. Abra o arquivo `index.html` em seu navegador de preferência.

## 🔗 Endpoints da API Utilizados
- **Perfil do Usuário:** `GET /users/:username`
- **Repositórios:** `GET /users/:username/repos`
- **Query Params:** `per_page=10` e `sort=pushed` para obter os 10 repositórios com atividade mais recente.
---
*Projeto desenvolvido como parte do curso DevQuest 2.0.*