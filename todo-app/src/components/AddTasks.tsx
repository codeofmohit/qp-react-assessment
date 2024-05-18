import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { taskType } from "../types";
import { useAppDispatch } from "../store/hooks";
import { addTask } from "../store/slices/tasksSlice";
import { pg_addTask } from "../store/slices/paginationSlice";

const AddTasks = () => {
  const dispatch = useAppDispatch();
  const [taskString, setTaskString] = useState<string>("");

  const formSubmitHandler = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    // error handling
    if (!taskString || taskString === "") {
      window.alert("Invalid task! Enter valid task value.");
      return;
    }
    // creating new task object
    const taskObj: taskType = {
      id: uuidv4(),
      task: taskString,
      isCompleted: false,
    };
    // adding newly created taskObject to redux store
    dispatch(addTask(taskObj));
    dispatch(pg_addTask(taskObj));
    // clearing input field
    setTaskString("");
  };

  return (
    <div className="add-task my-2 md:my-4 mx-auto text-center mt-4 md:mt-10">
      <form onSubmit={formSubmitHandler}>
        <div className="filed">
          <input
            data-testid="taskInput"
            type="text"
            placeholder="add task to the list"
            value={taskString}
            onChange={(e) => {
              setTaskString(e.target.value);
            }}
            className="p-2 rounded border mr-2 w-1/2 dark:text-slate-300 dark:bg-slate-700"
          />
          <button
            type="submit"
            className="px-4 py-2 bg-slate-300 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded"
          >
            Add item
          </button>
        </div>
      </form>
    </div>
  );
};
export default AddTasks;
