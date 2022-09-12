import React from "react";
import Task, { TaskType } from "./Task";

export default { component: Task, title: "Task" };

const Template = (tasks: TaskType) => <Task {...tasks} />;

const taskDefault: TaskType = {
  task: { id: "1", state: "TASK_INBOX", title: "TEST TASK" },
};
export const Default = () => <Task {...taskDefault} />;

const taskPinned: TaskType = {
  ...taskDefault,
  task: {
    ...taskDefault.task,
    state: "TASK_PINNED",
  },
};
export const Pinned = () => <Task {...taskPinned} />;

const taskArchived: TaskType = {
  ...taskDefault,
  task: {
    ...taskDefault.task,
    state: "TASK_ARCHIVED",
  },
};

export const Archived = () => <Task {...taskArchived} />;
