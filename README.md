# Event Planner

Uma aplicação Full Stack para criação e gerenciamento de eventos com sistema de confirmação de presença (RSVP).

---

## 📌 Sobre o projeto

O Event Planner foi desenvolvido para permitir que usuários criem eventos, gerenciem convites e acompanhem confirmações de presença através de links exclusivos compartilháveis.

O sistema possui autenticação, dashboard de gerenciamento e um fluxo completo de RSVP para convidados.

---

## ✨ Funcionalidades

- Autenticação de usuários
- Criação de eventos
- Dashboard de eventos
- Geração de links exclusivos de convite
- Sistema RSVP
- Atualização automática de confirmação
- Contagem de participantes
- Rotas dinâmicas
- Validação de formulários
- Integração com banco de dados

---

## 🛠️ Tecnologias utilizadas

### Front-end
- Next.js
- React
- TypeScript
- Tailwind CSS
- shadcn/ui

### Back-end
- Next.js Server Actions
- Prisma ORM
- PostgreSQL

---

## 📂 Estrutura do projeto

```bash
app/
├── account/
├── api/
├── auth/
├── dashboard/
├── events/
├── invite/

components/
├── DashboardContent/
├── EventDetailsContent/
├── InviteRsvpContent/
└── ui/

lib/
├── actions/
├── auth/
├── prisma.ts
└── utils.ts

prisma/
└── schema.prisma
```

---

## 🔄 Fluxo do sistema

### Criação de evento
O usuário autenticado cria um evento preenchendo:
- título
- descrição
- localização
- data do evento

### Geração de convite
Após criar o evento, o sistema gera um link exclusivo utilizando token único.

Exemplo:
```bash
/invite/[token]
```

### RSVP
Os convidados podem:
- informar nome
- informar email
- escolher presença:
  - Going
  - Maybe
  - Not Going

As respostas são salvas e atualizadas automaticamente utilizando `upsert` do Prisma.

---

## 🗄️ Banco de dados

O projeto utiliza PostgreSQL com Prisma ORM.

### Principais entidades
- User
- Event
- EventInvite
- EventRsvp

---

## 📚 Conceitos praticados

- Server Components
- Server Actions
- Rotas dinâmicas
- Query Params
- Relacionamentos no banco
- Organização de arquitetura
- Autenticação
- Validação de formulários
- Full Stack com Next.js

---

## 🚀 Como executar o projeto

### Instalar dependências

```bash
npm install
```

### Configurar variáveis ambiente

Criar arquivo `.env`

```env
DATABASE_URL=""
```

### Executar migrations

```bash
npx prisma migrate dev
```

### Rodar o projeto

```bash
npm run dev
```

---

## 🎯 Objetivo do projeto

O principal objetivo desse projeto foi aprofundar conhecimentos em desenvolvimento Full Stack utilizando o ecossistema moderno do Next.js, trabalhando integração entre front-end, back-end e banco de dados em uma única aplicação.

---

## 👨‍💻 Autor

Desenvolvido por HYPER 🚀
