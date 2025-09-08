"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dispatch, FormEvent, SetStateAction, useState } from "react";
import { TodoItem } from "@/types/todo";

type TodoFormProp = {
  todos: TodoItem[];
  setTodos: Dispatch<SetStateAction<TodoItem[]>>;
};

export const TodoForm = ({ todos, setTodos }: TodoFormProp) => {
  const [title, setTitle] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!title.trim()) return setError("Todo Title is required");

    const newTodo: TodoItem = {
      id: Date.now().toString(),
      title,
      completed: false,
      createdAt: new Date().toISOString(),
    };

    setTodos((prev) => [...prev, newTodo]);

    setTitle("");
    setError("");
  };

  return (
    <div className="mt-10 border rounded-md p-3">
      <form className="flex flex-row gap-3" onSubmit={handleSubmit}>
        <Input
          value={title}
          type="text"
          placeholder="Add a new todo..."
          name="title"
          onChange={(e) => setTitle(e.target.value)}
        />
        <Button
          type="submit"
          className="cursor-pointer"
          disabled={!title.trim()}
        >
          Add Todo
        </Button>
      </form>
      {error && <p className="text-red-700">{error}</p>}
    </div>
  );
};
