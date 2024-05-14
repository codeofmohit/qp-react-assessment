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
  },
});

export default tasks.reducer;
export const { addTask } = tasks.actions;
