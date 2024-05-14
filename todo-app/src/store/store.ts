import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from "./slices/tasksSlice";
import paginateTasksReducer from "./slices/paginationSlice";

const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    paginatedTasks: paginateTasksReducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
