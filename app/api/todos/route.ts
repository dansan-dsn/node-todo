import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

// GET all todos
export async function GET() {
  const todos = await prisma.todo.findMany({ orderBy: { createdAt: "desc" } });
  return NextResponse.json(todos);
}

// POST create todo
export async function POST(req: Request) {
  const { title } = await req.json();
  const todo = await prisma.todo.create({ data: { title } });
  return NextResponse.json(todo);
}
