import { createSlice } from "@reduxjs/toolkit";
import { taskListType } from "../../types";

const initialState: taskListType = [];

const tasks = createSlice({
  name: "tasks",
  initialState: initialState,
  reducers: {
    addTask: (state, action) => {
      state.push(action.payload);
    },
    updateTask: (state, action) => {
      const { task, id } = action.payload;
      const taskToUpdate = state.find((each) => {
        return each && each.id === id;
      });
      if (taskToUpdate) {
        taskToUpdate.task = task;
      }
    },
    deleteTask: (state, action) => {
      const { id } = action.payload;
      const taskToDelete: any = state.find((each) => {
        return each && each.id === id;
      });
      const indexOfToBeDeletedItem = state.indexOf(taskToDelete);
      state.splice(indexOfToBeDeletedItem, 1);
    },
    clearList: (state) => {
      state.length = 0;
    },
  },
});

export default tasks.reducer;
export const { addTask, updateTask, deleteTask, clearList } = tasks.actions;
