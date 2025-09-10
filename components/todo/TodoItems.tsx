"use client";
import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { MoreVertical } from "lucide-react";
import { TodoItem } from "@/types/todo";
import { TodoAction } from "@/components/todo/TodoAction";
import { cn } from "@/lib/utils";
import { api } from "@/lib/axios";
import { TodoUpdateInput, TodoUpdateSchema } from "@/lib/validations/todo";
import { ZodError } from "zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";

type TodoItemsProps = {
  todos: TodoItem[];
};

export const TodoItems = ({ todos }: TodoItemsProps) => {
  const [actionType, setActionType] = useState<"edit" | "delete">("edit");
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedTodo, setSelectedTodo] = useState<TodoItem | null>(null);

  const queryClient = useQueryClient();

  // React Query Mutations
  const updateTodo = useMutation({
    mutationFn: async (todo: TodoUpdateInput & { id: string }) => {
      const res = await api.put(`/${todo.id}`, todo);
      return res.data;
    },
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["todos"] }),
  });

  const deleteTodo = useMutation({
    mutationFn: async (id: string) => {
      const res = await api.delete(`/${id}`);
      return res.data;
    },
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["todos"] }),
  });

  // Hanlders
  const handleCheckChange = async (todo: TodoItem) => {
    try {
      const validated = TodoUpdateSchema.parse({
        completed: !todo.completed,
      });
      await updateTodo.mutateAsync({ id: todo.id, ...validated });
    } catch (err) {
      console.error("Failed to update todo", err);
    }
  };

  const handleEdit = (todo: TodoItem) => {
    setSelectedTodo(todo);
    setActionType("edit");
    setOpenDialog(true);
  };

  const handleDelete = (todo: TodoItem) => {
    setSelectedTodo(todo);
    setActionType("delete");
    setOpenDialog(true);
  };

  const onUpdate = async (todo: TodoItem) => {
    try {
      const validated: TodoUpdateInput = TodoUpdateSchema.parse({
        title: todo.title,
        completed: todo.completed,
      });
      await updateTodo.mutateAsync({ id: todo.id, ...validated });
    } catch (e) {
      if (e instanceof ZodError) {
        console.error(e.issues[0].message);
      } else {
        console.error("Update failed", e);
      }
    }
  };

  const onDelete = async (id: string) => {
    await deleteTodo.mutateAsync(id);
  };

  return (
    <>
      {todos.map((todo) => (
        <div
          key={todo.id}
          className={cn(
            "flex items-center justify-between px-4 py-3 border-b transition-colors",
            todo.completed && "bg-muted/50"
          )}
        >
          <div className="flex items-center gap-3">
            <Checkbox
              id={`todo-${todo.id}`}
              checked={todo.completed}
              onCheckedChange={() => handleCheckChange(todo)}
              className="cursor-pointer"
            />
            <Label
              htmlFor={`todo-${todo.id}`}
              className={cn(
                "text-base",
                todo.completed && "line-through text-muted-foreground"
              )}
            >
              {todo.title}
            </Label>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <MoreVertical className="cursor-pointer" />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem
                className="text-blue-400 cursor-pointer focus:bg-sky-700"
                onSelect={() => handleEdit(todo)}
              >
                Edit
              </DropdownMenuItem>
              <DropdownMenuItem
                className="text-red-400 cursor-pointer focus:bg-rose-700"
                onSelect={() => handleDelete(todo)}
              >
                Delete
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      ))}
      <TodoAction
        actionType={actionType}
        selectedTodo={selectedTodo}
        open={!!openDialog}
        setOpen={setOpenDialog}
        onUpdate={(todo) => onUpdate(todo)}
        onDelete={(id) => onDelete(id)}
      />
    </>
  );
};
