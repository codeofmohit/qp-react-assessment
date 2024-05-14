export type taskType = {
  id: string | null;
  task: string;
  isCompleted: boolean;
} | null;

export type taskListType = taskType[] | null;
