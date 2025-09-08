"use client";
import { useState } from "react";
import { TodoForm } from "@/components/todo/TodoForm";
import { TodoItems } from "@/components/todo/TodoItems";
import { TodoItem } from "@/types/todo";

export default function Home() {
  const [todos, setTodos] = useState<TodoItem[]>([]);

  return (
    <div className="max-w-2xl mx-auto my-10">
      <h2 className="text-3xl font-bold text-center">Todo App</h2>
      <TodoForm todos={todos} setTodos={setTodos} />
      {todos.length > 0 ? (
        <div className="mt-10 border-t">
          <TodoItems todos={todos} setTodos={setTodos} />
        </div>
      ) : (
        <p className="text-center py-10">No Todos available...</p>
      )}
    </div>
  );
}
