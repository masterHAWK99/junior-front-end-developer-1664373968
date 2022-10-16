import { tasksData } from "../data/tasksData";
import { TaskItem } from "./TaskItem";
import { useContext } from "react";
import { TaskContext } from "../../context/TaskContext";

export const TaskList = () => {
  const { setCurrentTask } = useContext(TaskContext);

  const mapTasks = () => {
    return tasksData.map((task) => {
      return (
        <TaskItem
          key={task.id}
          onClick={() => setCurrentTask(task.id)}
          title={task.title}
          status={task.status}
        />
      );
    });
  };

  return <div className="m-6">{mapTasks()}</div>;
};
