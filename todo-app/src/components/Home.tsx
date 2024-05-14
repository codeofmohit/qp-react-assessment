import { useEffect } from "react";
import AddTasks from "./AddTasks";
import DisplayTasks from "./DisplayTasks";
import Navbar from "./Navbar";
import { useAppDispatch } from "../store/hooks";
import { checkLsForTasks } from "../store/slices/tasksSlice";

const Home = () => {
  const dispatch = useAppDispatch();

  // checking ls for tasks
  useEffect(() => {
    dispatch(checkLsForTasks());
  }, []);

  return (
    <div className="todo-app h-[110vh]">
      <div className="container w-max-[65.5rem] mx-auto py-4">
        <Navbar />
        <AddTasks />
        <DisplayTasks />
      </div>
    </div>
  );
};
export default Home;
