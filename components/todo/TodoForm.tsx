"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const TodoForm = () => {
  return (
    <div className="mt-10 border rounded-md p-3">
      <form className="flex flex-row gap-3">
        <Input />
        <Button className="cursor-pointer">Add Todo</Button>
      </form>
    </div>
  );
};
