"use client";
import { useState, useEffect } from "react";
import { TodoForm } from "@/components/todo/TodoForm";
import { TodoItems } from "@/components/todo/TodoItems";
import { TodoItem } from "@/types/todo";
import { api } from "@/lib/axios";

export default function Home() {
  const [todos, setTodos] = useState<TodoItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const res = await api.get<TodoItem[]>("/");
        setTodos(res.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchTodos();
  }, []);

  return (
    <div className="max-w-2xl mx-auto my-10">
      <h2 className="text-3xl font-bold text-center">Todo App</h2>
      <TodoForm setTodos={setTodos} />
      {loading ? (
        <p className="text-center py-10">Loading todos...</p>
      ) : todos.length > 0 ? (
        <div className="mt-10 border-t">
          <TodoItems todos={todos} setTodos={setTodos} />
        </div>
      ) : (
        <p className="text-center py-10">No Todos available...</p>
      )}
    </div>
  );
}
