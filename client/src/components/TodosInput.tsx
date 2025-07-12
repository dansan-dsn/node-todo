import { useState } from "react";
import { TiMinus } from "react-icons/ti";
import { FaPlus } from "react-icons/fa6";
import { TodoInfo } from "../types/todo";
import { useTodoManagement } from "../hooks/useTodoManagement";

const Todo = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [formError, setFormError] = useState<null | string>(null);
  const [formData, setFormData] = useState<TodoInfo>({
    title: "",
    content: "",
    checked: false,
  });
  const { handleCreate, error } = useTodoManagement();

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (!formData.title.trim()) {
      return setFormError("Title Field is required");
    }

    if (!formData.content.trim()) {
      return setFormError("Content Field is required");
    }

    await handleCreate(formData);
  };

  return (
    <div>
      {formError && <p className="text-red-400 mx-5 md:mx-56">{formError}</p>}
      {error && <p className="text-red-500 mx-5 md:mx-56">{error}</p>}
      <form
        className="bg-neutral-700 p-5 mx-5 md:mx-20 lg:mx-56 cursor-pointer rounded"
        onSubmit={handleSubmit}
      >
        <label className=" justify-between flex cursor-pointer">
          Make Todos
          <span className="" onClick={handleToggle}>
            {isOpen ? (
              <TiMinus title="collapse" />
            ) : (
              <FaPlus title="Add Todo" />
            )}
          </span>
        </label>
        {isOpen && (
          <div className="flex flex-col justify-between mt-5 md:flex-row">
            <div className="mb-3">
              <input
                type="text"
                value={formData.title}
                name="title"
                onChange={handleChange}
                placeholder="Title"
                className="p-3 rounded outline-none p-holder"
              />
            </div>
            <div>
              <input
                type="text"
                value={formData.content}
                name="content"
                onChange={handleChange}
                placeholder="Content"
                className="p-3 rounded outline-none mb-3 p-holder"
              />
              <button type="submit" className="ml-3 btn btn-neutral">
                Add
              </button>
            </div>
          </div>
        )}
      </form>
    </div>
  );
};

export default Todo;
