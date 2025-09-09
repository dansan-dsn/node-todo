"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FormEvent } from "react";
import { TodoItem } from "@/types/todo";

type TodoActonProps = {
  actionType: "edit" | "delete" | null;
  selectedTodo: TodoItem | null;
  open: boolean;
  setOpen: (value: boolean) => void;
  onUpdate?: (todo: TodoItem) => void;
  onDelete?: (id: string) => void;
};

export const TodoAction = ({
  actionType,
  selectedTodo,
  open,
  setOpen,
  onUpdate,
  onDelete,
}: TodoActonProps) => {
  if (!actionType) return null;

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (actionType === "edit") {
      const formData = new FormData(e.currentTarget);
      const title = formData.get("title") as string;
      if (title.trim() && onUpdate)
        onUpdate({ ...selectedTodo, title } as TodoItem);
    }

    if (actionType === "delete" && selectedTodo && onDelete)
      onDelete(String(selectedTodo.id));

    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent>
        <form onSubmit={handleSubmit}>
          <DialogHeader>
            <DialogTitle>
              {actionType === "edit"
                ? "Update Todo"
                : "Are you sure about deleting this?"}
            </DialogTitle>

            <DialogDescription>
              {actionType === "edit" ? (
                <Input
                  type="text"
                  defaultValue={selectedTodo?.title}
                  name="title"
                  className="mt-2"
                />
              ) : (
                <>This action cannot be undone.</>
              )}
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="mt-3">
            <DialogClose asChild>
              <Button
                variant="destructive"
                size="sm"
                className="cursor-pointer"
              >
                Cancel
              </Button>
            </DialogClose>
            <Button type="submit" size="sm" className="cursor-pointer">
              {actionType === "edit" ? "Update" : "Delete"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};
