export type taskType = {
  id: String;
  task: String;
  isCompleted: boolean;
} | null;

export type taskListType = taskType[] | null;
