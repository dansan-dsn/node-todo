"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FormEvent, useState } from "react";
import { TodoCreateSchema, TodoCreateInput } from "@/lib/validations/todo";
import { ZodError } from "zod";
import { useQueryMutation } from "@/context/useMutation";

export const TodoForm = () => {
  const [title, setTitle] = useState("");
  const [error, setError] = useState("");
  const { createTodo } = useQueryMutation();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const parsed: TodoCreateInput = TodoCreateSchema.parse({ title });
      await createTodo.mutateAsync({ title: parsed.title });

      setTitle("");
      setError("");
    } catch (err) {
      if (err instanceof ZodError) setError(err.issues[0].message);
      else {
        setError("Something went wrong, try again");
        console.log("Creation Error", err);
      }
    }
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
          size="sm"
          className="cursor-pointer"
          disabled={!title.trim()}
        >
          Add
        </Button>
      </form>
      {error && <p className="text-red-700">{error}</p>}
    </div>
  );
};
