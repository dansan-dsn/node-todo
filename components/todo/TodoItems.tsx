"use client";
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

type TodoItemsProps = {
  todos: TodoItem[];
};

export const TodoItems = ({ todos }: TodoItemsProps) => {
  return (
    <>
      {todos.map((todo) => (
        <div
          key={todo.id}
          className="flex flex-row justify-between py-5 px-4 border-b"
        >
          <div className="flex items-center gap-3">
            <Checkbox id={`todo-${todo.id}`} checked={todo.completed} />
            <Label htmlFor={`todo-${todo.id}`} className="text-lg font-medium">
              {todo.title}
            </Label>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <MoreVertical />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem className="text-blue-800">
                Edit
              </DropdownMenuItem>
              <DropdownMenuItem className="text-red-800">
                Delete
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      ))}
    </>
  );
};
