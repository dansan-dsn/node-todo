# Fullstack Todo App Roadmap

**Stack:** Next.js · TypeScript · Prisma · React Query · Zod

This guide will walk you step by step through building a fullstack Todo app with modern tools. Follow each phase in order and you won’t feel lost.

---

## Phase 1: Foundation (Next.js + TypeScript + Local State)

- Create a new Next.js project with TypeScript.
- Run the dev server and confirm the app runs locally.
- Build a simple Todo app using **local React state only**.
- Focus on:
  - Understanding Next.js project structure.
  - Using TypeScript with components.
  - Managing state with React hooks (`add`, `toggle`, `delete`).

✅ **Checkpoint:** A fully working Todo app with local state (no backend yet).

---

## Phase 2: Database with Prisma

- Set up Prisma in the project.
- Use SQLite for simplicity in development.
- Define a `Todo` model in Prisma schema.
- Run a migration to create the database table.
- Test Prisma queries in a small script or playground.

✅ **Checkpoint:** Database is ready and you can query todos.

---

## Phase 3: Backend with Next.js API Routes

- Create API endpoints for Todos:
  - Fetch all todos.
  - Create a new todo.
  - Update a todo (toggle completed).
  - Delete a todo.
- Connect these endpoints to Prisma.
- Test them with Postman, Thunder Client, or browser fetch requests.

✅ **Checkpoint:** API endpoints return real data from the database.

---

## Phase 4: Frontend Data Fetching with React Query

- Install and configure React Query.
- Replace local state with **server state**.
- Use React Query hooks to:
  - Fetch todos.
  - Add a todo.
  - Update a todo.
  - Delete a todo.
- Learn about caching, refetching, and handling loading states.

✅ **Checkpoint:** The frontend now relies on backend data via React Query.

---

## Phase 5: Input Validation with Zod

- Install Zod for schema validation.
- Define a schema for Todos (title required, completed optional).
- Apply Zod validation in API routes.
- Use the same schema in frontend forms to validate user input.

✅ **Checkpoint:** App now validates inputs on both client and server.

---

## Phase 6: Polish & Deploy

- Add loading and error UI states.
- Style the app with Tailwind CSS.
- Deploy the app to Vercel.
- Test the live app to confirm database + API + frontend all work correctly.

✅ **Checkpoint:** You now have a production-ready fullstack Todo app.

---

# Final Result

By completing this roadmap, you will:

- Understand Next.js (frontend + backend).
- Use Prisma for database management.
- Manage server state with React Query.
- Validate inputs with Zod.
- Write everything in TypeScript.
- Deploy a modern fullstack application.
