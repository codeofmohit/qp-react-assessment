import AddTasks from "./AddTasks";
import DisplayTasks from "./DisplayTasks";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <div className="todo-app">
      <div className="container w-max-[65.5rem] mx-auto py-4">
        <Navbar />
        <AddTasks />
        <DisplayTasks />
      </div>
    </div>
  );
};
export default Home;
