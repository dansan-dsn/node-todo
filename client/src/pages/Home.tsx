import TodoInput from "../components/TodosInput";
import Search from "../components/Search";

const Home = () => {
  return (
    <div>
      <div className="p-5 grid justify-center">
        <div>
          <h1 className="text-2xl capitalize text-center font-bold text-amber-700">
            Todo App
          </h1>
        </div>
      </div>
      <div>
        <TodoInput />
        <Search />
      </div>
    </div>
  );
};

export default Home;
