import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { taskType } from "../types";
import { useAppDispatch } from "../store/hooks";
import { addTask } from "../store/slices/tasksSlice";

const AddTasks = () => {
  const dispatch = useAppDispatch();
  const [taskString, setTaskString] = useState<string>("");

  const formSubmitHandler = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    // creating new task object
    const taskObj: taskType = {
      id: uuidv4(),
      task: taskString,
      isCompleted: false,
    };
    // adding newly created taskObject to redux store
    dispatch(addTask(taskObj));
    // clearing input field
    setTaskString("");
  };

  return (
    <div className="add-task my-4 mx-auto text-center mt-10">
      <form onSubmit={formSubmitHandler}>
        <div className="filed">
          <input
            type="text"
            placeholder="add task to the list"
            value={taskString}
            onChange={(e) => {
              setTaskString(e.target.value);
            }}
            className="p-2 rounded border mr-2 w-1/2"
          />
          <button
            type="submit"
            className="text-white dark:text-slate-700 px-4 py-2 bg-slate-700 dark:bg-slate-300 rounded"
          >
            Add item
          </button>
        </div>
      </form>
    </div>
  );
};
export default AddTasks;
