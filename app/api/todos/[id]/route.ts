import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import { TodoUpdateSchema, TodoUpdateInput } from "@/lib/validations/todo";
import { ZodError } from "zod";

// PUT update todo
export async function PUT(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const body = await req.json();
    const data: TodoUpdateInput = TodoUpdateSchema.parse(body);

    const updatedTodo = await prisma.todo.update({
      where: { id },
      data,
    });

    return NextResponse.json(updatedTodo);
  } catch (e) {
    if (e instanceof ZodError) {
      return NextResponse.json({ error: e.issues[0].message }, { status: 400 });
    }
    return NextResponse.json(
      { error: "Failed to update todo" },
      { status: 500 }
    );
  }
}

// DELETE todo
export async function DELETE(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  await prisma.todo.delete({ where: { id } });
  return NextResponse.json({ success: true });
}
