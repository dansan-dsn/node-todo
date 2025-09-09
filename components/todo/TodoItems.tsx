"use client";
import { Dispatch, SetStateAction, useState } from "react";
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

type TodoItemsProps = {
  todos: TodoItem[];
  setTodos: Dispatch<SetStateAction<TodoItem[]>>;
};

export const TodoItems = ({ todos, setTodos }: TodoItemsProps) => {
  const [actionType, setActionType] = useState<"edit" | "delete">("edit");
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedTodo, setSelectedTodo] = useState<TodoItem | null>(null);

  const sortedTodos = [...todos].sort(
    (a, b) =>
      new Date(b.createdAt ?? 0).getTime() -
      new Date(a.createdAt ?? 0).getTime()
  );

  const handleCheckChange = async (todo: TodoItem) => {
    const updated = { ...todo, completed: !todo.completed };
    setTodos((prev) => prev.map((t) => (t.id === todo.id ? updated : t)));

    try {
      await api.put(`/${todo.id}`, {
        completed: !todo.completed,
      });
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
    setTodos((prev) => prev.map((t) => (t.id === todo.id ? todo : t)));
    await api.put(`/${todo.id}`, {
      title: todo.title,
      completed: todo.completed,
    });
  };

  const onDelete = async (id: string) => {
    setTodos((prev) => prev.filter((t) => t.id !== id));
    await api.delete(`/${id}`);
  };

  return (
    <>
      {sortedTodos.map((todo) => (
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
