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
import { TodoActon } from "@/components/todo/TodoAction";

type TodoItemsProps = {
  todos: TodoItem[];
  setTodos: Dispatch<SetStateAction<TodoItem[]>>;
};

export const TodoItems = ({ todos, setTodos }: TodoItemsProps) => {
  const [openDialog, setOpenDialog] = useState<"edit" | "delete" | null>(null);

  const handleCheckChange = (todo: TodoItem) => {
    setTodos((prev) =>
      prev.map((t) =>
        t.id === todo.id ? { ...t, completed: !todo.completed } : t
      )
    );
  };

  const handleEdit = (todo: TodoItem) => {
    console.log(todo.id);
    setOpenDialog("edit");
  };

  const handleDelete = (todo: TodoItem) => {
    setOpenDialog("delete");
  };

  return (
    <>
      {todos.map((todo) => (
        <div
          key={todo.id}
          className="flex flex-row justify-between py-5 px-4 border-b"
        >
          <div className="flex items-center gap-3">
            <Checkbox
              id={`todo-${todo.id}`}
              checked={todo.completed}
              onCheckedChange={() => handleCheckChange(todo)}
              className="cursor-pointer"
            />
            <Label htmlFor={`todo-${todo.id}`} className="text-lg font-medium">
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
      <TodoActon
        actionType={openDialog}
        open={!!openDialog}
        setOpen={setOpenDialog}
      />
    </>
  );
};
