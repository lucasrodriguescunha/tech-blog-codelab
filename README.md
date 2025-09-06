# Tech Blog CodeLab
Um projeto de blog técnico desenvolvido com Next.js para aprendizado e experimentação com tecnologias modernas de desenvolvimento web.

## 🚀 Tecnologias

- **Next.js 15** - Framework React com App Router
- **React 19** - Biblioteca para interfaces de usuário
- **TypeScript** - Tipagem estática para JavaScript
- **Tailwind CSS** - Framework CSS utilitário
- **Jest** - Testes unitários
- **Testing Library** - Utilitários para testes de componentes
- **Cypress** - Testes end-to-end
- **ESLint** - Linter para qualidade de código

## 📋 Pré-requisitos

- Node.js 20+
- npm ou yarn

## 🛠️ Instalação e uso

```bash
# Clone o repositório
git clone https://github.com/lucasrodriguescunha/tech-blog-codelab.git

# Entre no diretório
cd tech-blog-codelab

# Instale as dependências
npm install

# Execute em desenvolvimento
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000) para ver o resultado.

## 📝 Scripts disponíveis

```bash
npm run dev              # Servidor de desenvolvimento (com Turbopack)
npm run build            # Build para produção  
npm start                # Servidor de produção
npm test                 # Executar testes unitários
npm run lint             # Verificar código com ESLint
npm run cypress:open     # Abrir Cypress interativo

```

## 📁 Estrutura do projeto

```
├── app/                # Páginas e layouts (App Router)
│   ├── globals.css     # Estilos globais
│   ├── layout.tsx      # Layout principal
│   └── page.tsx        # Página inicial
├── components/         # Componentes React reutilizáveis
│   ├── ArticleList/    # Listagem de artigos
│   ├── CardArticle/    # Card individual de artigo
│   ├── ContactForm/    # Formulário de contato
│   ├── Container/      # Container principal
│   ├── HeroBanner/     # Banner hero da página
│   └── SectionTitle/   # Títulos de seção
├── public/             # Arquivos estáticos (imagens, ícones)
├── __tests__/          # Testes unitários dos componentes
├── cypress/            # Testes end-to-end
│   ├── e2e/            # Specs de testes E2E
│   ├── fixtures/       # Dados de teste
│   └── support/        # Comandos e configurações
├── coverage/           # Relatórios de cobertura de testes
└── cypress.config.ts   # Configuração do Cypress
```

## 🧪 Testes

### Testes Unitários
Os testes unitários estão localizados na pasta `__tests__/` e cobrem todos os componentes principais:

- **ArticleList** - Testagem da listagem de artigos
- **CardArticle** - Testagem dos cards de artigo
- **ContactForm** - Testagem do formulário de contato
- **Container** - Testagem do container principal
- **HeroBanner** - Testagem do banner hero
- **SectionTitle** - Testagem dos títulos de seção

### Testes E2E
Os testes end-to-end estão na pasta `cypress/e2e/` e incluem:

- **app.cy.ts** - Testes gerais da aplicação
- **articles.cy.ts** - Testes específicos da seção de artigos
- **contact.cy.ts** - Testes do formulário de contato
- **hero-banner.cy.ts** - Testes do banner principal

## 🎯 Funcionalidades

- **Hero Banner** - Seção de destaque principal
- **Lista de Artigos** - Exibição de artigos recomendados
- **Formulário de Contato** - Formulário para contato com visitantes
- **Design Responsivo** - Adaptável para diferentes dispositivos
- **Performance Otimizada** - Utilizando Turbopack para desenvolvimento

## 📈 Cobertura de Testes

O projeto mantém uma cobertura de testes abrangente, com relatórios disponíveis na pasta `coverage/` após executar `npm run test:coverage`.

## 🚀 Deploy

Para fazer o deploy da aplicação:

```bash
# Build da aplicação
npm run build

# Iniciar servidor de produção
npm start
```

---

Desenvolvido com ❤️ por [Lucas Rodrigues Cunha](https://github.com/lucasrodriguescunha)
