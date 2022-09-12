import React, { ReactNode } from "react";

import TaskList, { TaskListType } from "./TaskList";
import * as TaskStories from "./Task.stories";

export default {
  component: TaskList,
  title: "TaskList",
};

const Template = (args: TaskListType) => <TaskList {...args} />;

const defaultArgs: TaskListType = {
  tasks: [
    { ...TaskStories.taskDefault.task, id: "1", title: "Task 1" },
    { ...TaskStories.taskDefault.task, id: "2", title: "Task 2" },
    { ...TaskStories.taskDefault.task, id: "3", title: "Task 3" },
    { ...TaskStories.taskDefault.task, id: "4", title: "Task 4" },
    { ...TaskStories.taskDefault.task, id: "5", title: "Task 5" },
    { ...TaskStories.taskDefault.task, id: "6", title: "Task 6" },
  ],
};
export const Default = () => <TaskList {...defaultArgs} />;

const withPinnedTasksArgs: TaskListType = {
  // Shaping the stories through args composition.
  // Inherited data coming from the Default story.
  tasks: [
    ...defaultArgs.tasks,
    { id: "6", title: "Task 6 (pinned)", state: "TASK_PINNED" },
  ],
};
export const WithPinnedTasks = () => <TaskList {...withPinnedTasksArgs} />;

const loadingArgs: TaskListType = {
  tasks: [],
  loading: true,
};
export const Loading = <TaskList {...loadingArgs} />;

const emptyArgs: TaskListType = {
  // Shaping the stories through args composition.
  // Inherited data coming from the Loading story.
  ...loadingArgs,
  loading: false,
};
export const Empty = <TaskList {...emptyArgs} />;
