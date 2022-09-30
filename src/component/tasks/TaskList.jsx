import { tasksData } from "../data/tasksData";
import { TaskItem } from "./TaskItem";
import completedIcon from "../../assets/completed.svg";
import activeIcon from "../../assets/active.svg";
import blockedIcon from "../../assets/blocked.svg";
import { useContext } from "react";
import { TaskContext } from "../../context/TaskContext";

export const TaskList = () => {
  const { setCurrentTask } = useContext(TaskContext);

  const getIconByStatus = (status) => {
    if (status === "completed") {
      return completedIcon;
    }
    if (status === "active") {
      return activeIcon;
    }
    if (status === "blocked") {
      return blockedIcon;
    }
  };

  const mapTasks = () => {
    return tasksData.map((task) => {
      return (
        <TaskItem
          key={task.id}
          onClick={() => setCurrentTask(task.id)}
          title={task.title}
          icon={getIconByStatus(task.status)}
        />
      );
    });
  };

  return <div className="m-6">{mapTasks()}</div>;
};
