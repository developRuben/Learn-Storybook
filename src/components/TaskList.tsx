import React from "react";
import Task, { SingleTaskType } from "./Task";

export type TaskListType = {
  loading?: boolean;
  tasks: SingleTaskType[];
  onPinTask?: () => void;
  onArchiveTask?: () => void;
};
const TaskList = (taskListArgs: TaskListType) => {
  const events = {
    onPinTask: taskListArgs.onPinTask,
    onArchiveTask: taskListArgs.onArchiveTask,
  };

  const LoadingRow = (
    <div className="loading-item">
      <span className="glow-checkbox" />
      <span className="glow-text">
        <span>Loading</span> <span>cool</span> <span>state</span>
      </span>
    </div>
  );
  if (taskListArgs.loading !== undefined && taskListArgs.loading) {
    return (
      <div className="list-items" data-testid="loading" key={"loading"}>
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
      </div>
    );
  }
  if (taskListArgs.tasks.length === 0) {
    return (
      <div className="list-items" key={"empty"} data-testid="empty">
        <div className="wrapper-message">
          <span className="icon-check" />
          <p className="title-message">You have no tasks</p>
          <p className="subtitle-message">Sit back and relax</p>
        </div>
      </div>
    );
  }

  const tasksInOrder = [
    ...taskListArgs.tasks.filter((t) => t.state === "TASK_PINNED"),
    ...taskListArgs.tasks.filter((t) => t.state !== "TASK_PINNED"),
  ];
  return (
    <div className="list-items">
      {tasksInOrder.map((task) => (
        <Task key={task.id} task={task} {...events} />
      ))}
    </div>
  );
};

export default TaskList;
