import { useEffect, useState } from "react";
import { MdEdit, MdDelete } from "react-icons/md";
import { TodoInfo } from "../types/todo";
import { useTodoManagement } from "../hooks/useTodoManagement";

const TodoLayout = () => {
  const [data, setData] = useState<TodoInfo[]>([]);
  const { handleFetch } = useTodoManagement();

  useEffect(() => {
    const fetchTodos = async () => {
      const todos = await handleFetch();
      setData(todos);
    };

    fetchTodos();
  }, []);

  const toggleChecked = (id?: string | number) => {
    const updateCheck = data.map((todo) =>
      todo.id === id ? { ...todo, checked: !todo.checked } : todo
    );

    setData(updateCheck);
  };

  return (
    <>
      <div className="mt-10">
        <h2 className="text-center text-xl font-extrabold text-amber-900">
          Your Todos
        </h2>
        {data.map((todo: TodoInfo) => {
          return (
            <div
              className="bg-zinc-800 p-5 mx-5 md:mx-20 lg:mx-32 rounded mb-3"
              key={todo.id}
            >
              <div className="flex justify-between">
                <div>
                  <input
                    type="checkbox"
                    checked={todo.checked}
                    className="mr-3 rounded-lg"
                    onChange={() => toggleChecked(todo.id)}
                  />
                  <span>{todo.title}</span>
                </div>
                <span className="">{todo.content}</span>
                <div className="flex gap-3 ">
                  <MdEdit
                    className="text-blue-600 cursor-pointer w-6 h-6 "
                    title="edit"
                  />
                  <MdDelete
                    className="text-rose-800 cursor-pointer w-6 h-6"
                    title="delete"
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default TodoLayout;
