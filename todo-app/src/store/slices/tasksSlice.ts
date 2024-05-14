import { createSlice } from "@reduxjs/toolkit";
import { taskListType } from "../../types";
import {
  addToLs,
  clearLs,
  deleteItemInLs,
  loadFromLs,
  updateItemTextLs,
  updateMarkDoneLs,
} from "../../utils/localStorageHelper";

const initialState: taskListType = [];

const tasks = createSlice({
  name: "tasks",
  initialState: initialState,
  reducers: {
    checkLsForTasks: () => {
      const list = loadFromLs();
      if (list && list.length > 0) {
        return [...list];
      }
    },
    addTask: (state, action) => {
      state.push(action.payload);
      // adding to ls
      addToLs(action.payload);
    },
    markTaskDone: (state, action) => {
      const { id, flag } = action.payload;
      const taskToUpdate = state.find((each) => {
        return each && each.id === id;
      });
      if (taskToUpdate) {
        taskToUpdate.isCompleted = flag;
        // updating item in ls
        updateMarkDoneLs(id, flag);
      }
    },
    updateTask: (state, action) => {
      const { task, id } = action.payload;
      const taskToUpdate = state.find((each) => {
        return each && each.id === id;
      });
      if (taskToUpdate) {
        taskToUpdate.task = task;
        // updating item in ls
        updateItemTextLs(id, task);
      }
    },
    deleteTask: (state, action) => {
      const { id } = action.payload;
      const taskToDelete: any = state.find((each) => {
        return each && each.id === id;
      });
      const indexOfToBeDeletedItem = state.indexOf(taskToDelete);
      state.splice(indexOfToBeDeletedItem, 1);
      // deleting item in ls
      deleteItemInLs(id);
    },
    clearList: (state) => {
      state.length = 0;
      // clearing localStorage
      clearLs();
    },
  },
});

export default tasks.reducer;
export const {
  addTask,
  updateTask,
  deleteTask,
  clearList,
  checkLsForTasks,
  markTaskDone,
} = tasks.actions;
