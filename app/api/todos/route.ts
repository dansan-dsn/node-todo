import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import { TodoCreateSchema, TodoCreateInput } from "@/lib/validations/todo";
import { ZodError } from "zod";

// GET all todos
export async function GET() {
  const todos = await prisma.todo.findMany({ orderBy: { createdAt: "desc" } });
  return NextResponse.json(todos);
}

// POST create todo
export async function POST(req: Request) {
  try {
    const body = await req.json();
    const data: TodoCreateInput = TodoCreateSchema.parse(body);

    const todo = await prisma.todo.create({ data });

    return NextResponse.json(todo);
  } catch (err) {
    if (err instanceof ZodError) {
      return NextResponse.json({ error: err.message }, { status: 400 });
    }
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
