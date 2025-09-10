import { useMutation, useQueryClient } from "@tanstack/react-query";
import { TodoCreateInput, TodoUpdateInput } from "@/lib/validations/todo";
import { api } from "@/lib/axios";
import { TodoItem } from "@/types/todo";

export const useQueryMutation = () => {
  const todoKey = ["todos"];
  const queryClient = useQueryClient();

  const createTodo = useMutation({
    mutationFn: async (input: TodoCreateInput) => {
      const res = await api.post("/", input);
      return res.data;
    },
    onMutate: (data) => {
      const temp: TodoItem = {
        ...data,
        id: Date.now().toString(),
        completed: false,
        createdAt: new Date().toDateString(),
      };
      queryClient.setQueryData<TodoItem[]>(["todos"], (prev) =>
        prev ? [...prev, temp] : [temp]
      );
    },
  });

  const updateTodo = useMutation({
    mutationFn: async (todo: TodoUpdateInput & { id: string }) => {
      const res = await api.put(`/${todo.id}`, todo);
      return res.data;
    },
    onMutate: ({ id, completed, title }) => {
      queryClient.setQueryData<TodoItem[]>(
        todoKey,
        (prev) =>
          prev?.map((t) =>
            t.id === id
              ? { ...t, completed: completed ?? false, title: title ?? t.title }
              : t
          ) ?? []
      );
    },
  });

  const deleteTodo = useMutation({
    mutationFn: async (id: string) => {
      const res = await api.delete(`/${id}`);
      return res.data;
    },
    onMutate: (id) => {
      queryClient.setQueryData<TodoItem[]>(
        todoKey,
        (prev) => prev?.filter((t) => t.id !== id) ?? []
      );
    },
  });

  return {
    createTodo,
    updateTodo,
    deleteTodo,
  };
};
