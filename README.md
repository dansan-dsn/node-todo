# Fullstack Todo App

This is a **fullstack Todo app** built with:

- [Next.js](https://nextjs.org) (frontend + API routes)
- [TypeScript](https://www.typescriptlang.org)
- [Prisma](https://www.prisma.io) (database ORM)
- [React Query](https://tanstack.com/query/latest) (server state management)
- [Zod](https://zod.dev) (input validation)
- [Shadcn UI](https://ui.shadcn.com/) (Tailwind-based components)
- [Bun](https://bun.sh/) (runtime & package manager)

This project demonstrates a modern, type-safe fullstack application with a Todo list.

---

## 🚀 Getting Started

1. **Install dependencies**

```bash
bun install
```

2. **Run the development server**

```bash
bun dev
```

3. **Open the app in your browser**

[http://localhost:3000](http://localhost:3000)

4. **Edit the app**  
   Start editing `app/page.tsx` or the components inside `components/` — the page auto-updates as you save.

---

## 🗂 Project Structure

```
my-todo/
├── app/                  # Next.js App Router pages
│   ├── page.tsx          # Home page with Todo list UI
│   └── api/todos/        # API routes for CRUD operations
├── components/           # UI components (Shadcn UI)
├── lib/
│   ├── prisma.ts         # Prisma client setup
│   └── validation.ts     # Zod schemas
├── prisma/
│   ├── schema.prisma     # Database schema
│   └── migrations/       # Prisma migration history
├── styles/               # Tailwind CSS or global styles
├── package.json
├── tsconfig.json
├── tailwind.config.js
└── README.md
```

---

## 🛠 Key Features

- **Todo CRUD operations**
- **Database integration** with Prisma
- **Server state management** using React Query
- **Input validation** with Zod (frontend + backend)
- **Styled UI components** using Shadcn UI + Tailwind
- **TypeScript** ensures type safety throughout the app

---

## 🎨 Fonts

The project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to optimize and load the [Geist](https://vercel.com/font) font family from Vercel.

---

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs) – guides and API references
- [React Query Documentation](https://tanstack.com/query/latest) – learn how to manage server state
- [Prisma Documentation](https://www.prisma.io/docs/) – database modeling and queries
- [Zod Documentation](https://zod.dev) – schema validation
- [Shadcn UI Documentation](https://ui.shadcn.com/) – pre-built UI components

---

## 🚀 Deployment

You can deploy the app easily using [Vercel](https://vercel.com/new):

1. Push your project to GitHub.
2. Connect the repository to Vercel.
3. Vercel will build and deploy your app automatically.

See [Next.js deployment guide](https://nextjs.org/docs/app/building-your-application/deploying) for details.

---

## ✅ Development Checklist

- [x] Run `bun install` to install dependencies
- [x] Run `bun dev` to start the development server
- [x] Implement basic Todo CRUD with local state
- [x] Set up Prisma and configure the database
- [x] Create Next.js API routes for todos
- [x] Integrate React Query for fetching and mutating todos
- [x] Add Zod validation for inputs
- [x] Use Shadcn UI components for styling
- [x] Add loading/error states with React Query
- [ ] Test and deploy the app to Vercel

---

This README provides a **full roadmap** to build and run your Todo app while learning modern fullstack tools.
