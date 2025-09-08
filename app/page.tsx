"use client";
import { useState } from "react";
import { TodoForm } from "@/components/todo/TodoForm";
import { TodoItems } from "@/components/todo/TodoItems";
import { TodoItem } from "@/types/todo";

const TODOS: TodoItem[] = [
  {
    id: 1,
    title: "Learn Next.js",
    completed: false,
    createdAt: new Date().toISOString(),
  },
  {
    id: 2,
    title: "Build a Todo App",
    completed: true,
    createdAt: new Date().toISOString(),
  },
];

export default function Home() {
  const [todos, setTodos] = useState<TodoItem[]>([...TODOS]);

  return (
    <div className="max-w-2xl mx-auto my-10">
      <h2 className="text-3xl font-bold text-center">Todo App</h2>
      <TodoForm todos={todos} setTodos={setTodos} />
      {todos.length > 0 ? (
        <div className="mt-10 border rounded-md">
          <TodoItems todos={todos} setTodos={setTodos} />
        </div>
      ) : (
        <p className="text-center py-10">No Todos available...</p>
      )}
    </div>
  );
}
