import { useAppDispatch, useAppSelector } from "../store/hooks";
import Task from "./Task";
import { taskType } from "../types";
import { clearList } from "../store/slices/tasksSlice";
import PaginatedItems from "./PaginatedItems";

const DisplayTasks = () => {
  const tasks = useAppSelector((state) => state.tasks);
  const paginatedTasks = useAppSelector((state) => state.paginatedTasks);
  const dispatch = useAppDispatch();

  // clear all tasks handler
  const clearAllTasksHandler = () => {
    dispatch(clearList());
  };

  return (
    <div className="task-list text-center border p-2 md:p-4 rounded w-full md:w-3/4 mx-auto mt-4  md:mt-10">
      <h1 className="font-medium text-xl my-2">Task List</h1>
      <hr className="mb-4" />
      {(tasks?.length === 0 || !tasks) && (
        <p>List is empty! add some items...</p>
      )}
      {tasks?.length > 0 && (
        <>
          {
            <div className="list-container max-h-[50vh] overflow-y-scroll border p-2 rounded">
              {paginatedTasks.length > 0
                ? paginatedTasks.map((each: taskType) => {
                    if (each) {
                      return <Task key={each.id} task={each} />;
                    }
                  })
                : tasks.map((each: taskType) => {
                    if (each) {
                      return <Task key={each.id} task={each} />;
                    }
                  })}
            </div>
          }
          {tasks.length > 10 && (
            <div className="pagination px-4 rounded bg-slate-300 dark:bg-slate-700 text-slate-700 dark:text-slate-300 mt-4 shadow cursor-pointer flex gap-2 justify-center items-center">
              <PaginatedItems itemsPerPage={10} />
            </div>
          )}
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
