import { useState } from "react";
import { TodoServices } from "../services/todoService";
import { TodoInfo } from "../types/todo";

export const useTodoManagement = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleCreate = async (todo: Partial<TodoInfo>) => {
    setLoading(true);
    setError(null);

    try {
      const response = await TodoServices.createTodo(todo);
      return response.data;
    } catch (err: any) {
      console.error(err.message);
      setError("Error creating todo");
    } finally {
      setLoading(false);
    }
  };

  const handleFetch = async (): Promise<TodoInfo[]> => {
    setLoading(true);
    setError(null);

    try {
      const response = await TodoServices.fetchTodos();
      return response.data;
    } catch (err: any) {
      console.error(err.message);
      setError("Error fetching todos");
      return [];
    } finally {
      setLoading(false);
    }
  };

  const handleFetchTodo = async (id: string | number) => {
    setLoading(true);
    setError(null);

    try {
      const response = await TodoServices.fetchTodo(id);
      return response.data;
    } catch (err: any) {
      console.error(err.message);
      setError("Error fetching id");
    } finally {
      setLoading(false);
    }
  };

  const handleUpdate = async (id: string | number, todo: Partial<TodoInfo>) => {
    setLoading(true);
    setError(null);

    try {
      const response = await TodoServices.updateTodos(id, todo);
      return response.data;
    } catch (err: any) {
      console.error(err.message);
      setError("Error updating todos");
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    error,
    handleCreate,
    handleFetch,
    handleFetchTodo,
    handleUpdate,
  };
};
