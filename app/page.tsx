"use client";
import { TodoForm } from "@/components/todo/TodoForm";
import { TodoItems } from "@/components/todo/TodoItems";
import { api } from "@/lib/axios";
import { useQuery } from "@tanstack/react-query";

export default function Home() {
  const { data: todos, isLoading } = useQuery({
    queryKey: ["todos"],
    queryFn: async () => {
      const res = await api.get("/");
      return res.data;
    },
  });

  return (
    <div className="max-w-2xl mx-auto my-10">
      <h2 className="text-3xl font-bold text-center">Todo App</h2>
      <TodoForm />
      {isLoading ? (
        <p className="text-center py-10">Loading todos...</p>
      ) : todos.length > 0 ? (
        <div className="mt-10 border-t">
          <TodoItems todos={todos} />
        </div>
      ) : (
        <p className="text-center py-10">No Todos available...</p>
      )}
    </div>
  );
}
