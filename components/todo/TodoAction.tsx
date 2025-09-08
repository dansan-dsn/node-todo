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

type TodoActonProps = {
  actionType: "edit" | "delete" | null;
  open: boolean;
  setOpen: (value: null) => void;
};

export const TodoActon = ({ actionType, open, setOpen }: TodoActonProps) => {
  if (!actionType) return null;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
  };

  return (
    <Dialog open={open} onOpenChange={() => setOpen(null)}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            {actionType === "edit"
              ? "Update Your Todo"
              : "Are you sure about deleting this?"}
          </DialogTitle>

          <DialogDescription>
            {actionType === "edit" ? (
              <span onSubmit={handleSubmit}>
                <Input type="text" name="title" className="mt-2" />
              </span>
            ) : (
              <span>
                This action cannot be undone. This will permanently delete your
                todo and remove your data from our servers.
              </span>
            )}
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline" className="cursor-pointer">
              Cancel
            </Button>
          </DialogClose>
          <Button type="submit" className="cursor-pointer">
            {actionType === "edit" ? "Update" : "Delete"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
