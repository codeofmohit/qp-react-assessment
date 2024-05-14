import { useState } from "react";
import { taskType } from "../types";
import { useAppDispatch } from "../store/hooks";
import {
  deleteTask,
  markTaskDone,
  updateTask,
} from "../store/slices/tasksSlice";
import {
  pg_deleteTask,
  pg_markTaskDone,
  pg_updateTask,
} from "../store/slices/paginationSlice";

const Task = ({ task }: { task: taskType }) => {
  const [markChecked, setMarkChecked] = useState<boolean>(false);
  const dispatch = useAppDispatch();

  // edit task handler
  const editHandler = () => {
    const updatedTask = window.prompt("Update the task : ", task?.task);
    const updateObj = {
      task: updatedTask,
      id: task?.id,
    };
    dispatch(updateTask(updateObj));
    dispatch(pg_updateTask(updateObj));
  };

  // delete task handler
  const deleteHandler = () => {
    dispatch(deleteTask({ id: task?.id }));
    dispatch(pg_deleteTask({ id: task?.id }));
  };

  if (!task) {
    return;
  }

  return (
    <div className="task text-center p-1 my-2 flex gap-4 justify-center items-center shadow">
      <p className={`${task.isCompleted ? "line-through" : ""} line-clamp-1`}>
        {task?.task}
      </p>
      <input
        type="checkbox"
        checked={task.isCompleted ? true : false}
        onChange={() => {
          setMarkChecked(!markChecked);
          const flag = !markChecked ? true : false;
          dispatch(markTaskDone({ id: task.id, flag }));
          dispatch(pg_markTaskDone({ id: task.id, flag }));
        }}
      />
      <button
        className=" dark:text-slate-800 bg-yellow-400 px-1 rounded"
        onClick={editHandler}
      >
        edit
      </button>
      <button
        className=" dark:text-slate-800 bg-red-400 px-2 rounded"
        onClick={deleteHandler}
      >
        delete
      </button>
    </div>
  );
};
export default Task;
