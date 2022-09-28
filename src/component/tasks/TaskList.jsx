import { tasksData } from "../data/tasksData";
import { TaskItem } from "./TaskItem";
import completedIcon from "../../assets/completed.svg";
import activeIcon from "../../assets/active.svg";
import blockedIcon from "../../assets/blocked.svg";

export const TaskList = () => {
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
        <TaskItem title={task.title} icon={getIconByStatus(task.status)} />
      );
    });
  };

  return <>{mapTasks()}</>;
};
