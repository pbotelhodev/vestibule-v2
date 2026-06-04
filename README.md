# 🧱 Smarttex — Template Técnico Oficial

Este repositório representa o **template base oficial da Smarttex** para desenvolvimento de:

- Landing pages (frontend only)
- Sistemas web sob demanda
- Aplicações fullstack
- Plataformas SaaS multi-tenant

O objetivo deste template é garantir:

- Padronização estrutural
- Rapidez na inicialização de projetos
- Redução de débito técnico
- Escalabilidade futura
- Independência tecnológica

---

# 🚀 Stack Tecnológica Oficial

## Frontend

- React
- Vite 8
- Tailwind CSS (via `@tailwindcss/vite`)
- JavaScript (sem TypeScript)
- Fetch API
- Estrutura modular por pastas

## Backend

- Node.js
- Express
- CORS
- Dotenv
- Nodemon (dev)
- Nanoid (geração de IDs)

## Banco de Dados

- PostgreSQL (desenvolvimento local)
- Produção: banco remoto definido por ambiente

---

# 📁 Estrutura do Projeto (Monorepo)

template/
│
├── front/
│ ├── vite.config.js
│ ├── package.json
│ ├── index.html
│ └── src/
│ ├── assets/
│ ├── components/
│ ├── pages/
│ ├── layouts/
│ ├── hooks/
│ ├── services/
│ ├── utils/
│ ├── styles/
│ │ └── global.css
│ ├── App.jsx
│ └── main.jsx
│
├── backend/
│ ├── package.json
│ └── src/
│ ├── config/
│ ├── db/
│ ├── middlewares/
│ ├── routes/
│ ├── controllers/
│ ├── services/
│ ├── utils/
│ │ └── id.js
│ ├── app.js
│ └── server.js
│
└── package.json (raiz)

---

# 🔧 Execução do Projeto

## Rodar Fullstack (Frontend + Backend)

npm run dev

Frontend: http://localhost:5173  
Backend: http://localhost:3000

---

## Rodar Apenas Frontend (Landing Page)

npm run dev:front

Deploy recomendado: Netlify

---

## Rodar Apenas Backend

npm run dev:back

---

# 🔌 Comunicação Frontend ↔ Backend

## Proxy Vite (vite.config.js)

server: {
proxy: {
'/api': 'http://localhost:3000',
},
}

## Endpoint padrão

GET /api/health

## Camada HTTP Padronizada

Arquivo: src/services/http.js

Toda requisição frontend deve passar por esta camada.

---

# 🧬 Geração de Identificadores

Utiliza:
nanoid

Localização:
backend/src/utils/id.js

Toda geração de ID deve passar por este utilitário.

---

# 🎨 Tailwind CSS

Instalado via:
npm install tailwindcss @tailwindcss/vite

Configuração no vite.config.js:

import tailwindcss from '@tailwindcss/vite'

plugins: [
react(),
tailwindcss(),
]

Importação centralizada:

src/styles/global.css

Conteúdo:

@import "tailwindcss";

A aplicação deve possuir apenas um ponto de entrada CSS.

---

# 🧩 Modos de Uso

## 1️⃣ Landing Page

Utiliza apenas:
front/

Backend não é necessário.

---

## 2️⃣ Aplicação Fullstack

Utiliza:
front/ + backend/

Backend pode ser hospedado em PaaS temporário ou servidor próprio.

Banco remoto obrigatório em produção.

---

## 3️⃣ SaaS Multi-Tenant

Requer ativação adicional:

- Middleware tenant_id
- Controle de planos
- Feature flags
- Limites por plano

A base estrutural já suporta essa expansão.

---

# 🔐 Boas Práticas Institucionais

- Não duplicar CSS entrypoints
- Não realizar chamadas diretas ao backend fora da camada services
- Não gerar ID manualmente fora do util institucional
- Não misturar lógica de domínio dentro de componentes de UI
- Não alterar estrutura base sem registrar decisão
- Versionar qualquer alteração estrutural
- Utilizar commits padronizados (feat:, fix:, chore:, wip:)

---

# 📌 Observação Final

Este template representa a base técnica institucional da Smarttex.

Qualquer evolução estrutural deve:

1. Ser testada
2. Ser versionada
3. Ser documentada
4. Atualizar este README

Este arquivo deve acompanhar todos os novos projetos criados a partir deste template.
