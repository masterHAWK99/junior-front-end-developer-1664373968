import { tasksData } from "../data/tasksData";
import { ContextTab } from "./ContextTab";
import { ContextContent } from "./ContextContent";
import { TaskContext } from "../../context/TaskContext";
import { useContext, useEffect, useState } from "react";

export const BusinessContext = () => {
  const [taskId, setTaskId] = useState(1);
  const taskContext = useContext(TaskContext);

  useEffect(() => {
    setTaskId(taskContext.currentTask);
  }, [taskContext]);

  const task = tasksData.find((taskData) => taskData.id === taskId);

  const mapTabs = () => {
    return task.businessContexts.map((tab) => {
      return <ContextTab tabContent={tab} />;
    });
  };
  return (
    <>
      <div className="bg-gray w-25">{mapTabs()}</div>
      <div className="w-75">
        <ContextContent tabContent={tasksData[0].businessContexts[0]} />
      </div>
    </>
  );
};
