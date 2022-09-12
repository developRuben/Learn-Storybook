import React, { useEffect } from "react";

export type SingleTaskType = {
  id: string;
  title: string;
  state: string;
};
export type TaskType = {
  task: SingleTaskType;
  onArchiveTask?: (id?: string) => void;
  onPinTask?: (id?: string) => void;
};
const Task = (tasks: TaskType) => {
  // const { id, state, title } = tasks.task;

  const id = tasks.task.id;
  const state = tasks.task.state;
  const title = tasks.task.title;
  const onArchiveTask = tasks.onArchiveTask;
  const onPinTask = tasks.onPinTask;
  return (
    <div className={`list-item ${state}`}>
      <label
        htmlFor="checked"
        aria-label={`archiveTask-${id}`}
        className="checkbox"
      >
        <input
          type="checkbox"
          disabled={true}
          name="checked"
          id={`archiveTask-${id}`}
          checked={state === "TASK_ARCHIVED"}
        />
        <span
          className="checkbox-custom"
          onClick={() => {
            if (onArchiveTask !== undefined) {
              onArchiveTask(id);
            }
          }}
        />
      </label>

      <label htmlFor="title" aria-label={title} className="title">
        <input
          type="text"
          value={title}
          readOnly={true}
          name="title"
          placeholder="Input title"
        />
      </label>

      {state !== "TASK_ARCHIVED" && (
        <button
          className="pin-button"
          onClick={() => {
            if (onPinTask !== undefined) {
              onPinTask(id);
            }
          }}
          id={`pinTask-${id}`}
          aria-label={`pinTask-${id}`}
          key={`pinTask-${id}`}
        >
          <span className={`icon-star`} />
        </button>
      )}
    </div>
  );
};

export default Task;
