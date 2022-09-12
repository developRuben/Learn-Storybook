import { idText } from "typescript";

/* 

{ task: { id, title, state }, onArchiveTask, onPinTask }
*/
export type TaskType = {
  task: {
    id: string;
    title: string;
    state: string;
  };
  onArchiveTask?: () => {};
  onPinTask?: () => {};
};
const Task = (tasks: TaskType) => {
  return (
    <div className="list-item">
      <label htmlFor="title" aria-label={tasks.task.title}>
        <input
          type="text"
          value={tasks.task.title}
          readOnly={true}
          name="title"
        />
      </label>
    </div>
  );
};

export default Task;
