import { useAppDispatch, useAppSelector } from "../store/hooks";
import Task from "./Task";
import { taskType } from "../types";
import { clearList } from "../store/slices/tasksSlice";

const DisplayTasks = () => {
  const tasks = useAppSelector((state) => state.tasks);

  const dispatch = useAppDispatch();

  // clear all tasks handler
  const clearAllTasksHandler = () => {
    dispatch(clearList());
  };

  return (
    <div className="task-list text-center border p-4 rounded w-3/4 mx-auto mt-10">
      <h1 className="font-medium text-xl my-2">Task List</h1>
      <hr className="mb-4" />
      {(tasks?.length === 0 || !tasks) && (
        <p>List is empty! add some items...</p>
      )}
      {tasks?.length > 0 && (
        <>
          {tasks.map((each: taskType) => {
            if (each) {
              return <Task key={each.id} task={each} />;
            }
          })}
          <div
            className="clearTasksBtn px-4 py-2 rounded bg-slate-300 dark:bg-slate-700 text-slate-700 dark:text-slate-300 mt-4 shadow cursor-pointer"
            onClick={clearAllTasksHandler}
          >
            clear all tasks
          </div>
        </>
      )}
    </div>
  );
};
export default DisplayTasks;
