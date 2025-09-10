import { z } from "zod";

export const TodoSchema = z.object({
  id: z.uuid(),
  title: z.string().min(1, "Title is required"),
  completed: z.boolean().optional(),
  createAt: z.date(),
});

export const TodoCreateSchema = TodoSchema.omit({
  id: true,
  createAt: true,
});

export const TodoUpdateSchema = TodoCreateSchema.partial();

export type TodoInput = z.infer<typeof TodoSchema>;
export type TodoCreateInput = z.infer<typeof TodoCreateSchema>;
export type TodoUpdateInput = z.infer<typeof TodoUpdateSchema>;
