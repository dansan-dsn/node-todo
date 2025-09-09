import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

// PUT update todo
export async function PUT(
  req: Request,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params; // await the params
  const { title, completed } = await req.json();

  const updatedTodo = await prisma.todo.update({
    where: { id },
    data: {
      ...(title !== undefined && { title }),
      ...(completed !== undefined && { completed }),
    },
  });

  return NextResponse.json(updatedTodo);
}

// DELETE todo
export async function DELETE(
  req: Request,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params; // await the params
  await prisma.todo.delete({ where: { id } });
  return NextResponse.json({ success: true });
}
