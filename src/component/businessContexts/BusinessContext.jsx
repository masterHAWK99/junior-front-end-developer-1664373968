import { tasksData } from "../data/tasksData";
import { ContextTab } from "./ContextTab";
import { ContextContent } from "./ContextContent";
import { TaskContext } from "../../context/TaskContext";
import { useContext, useEffect, useState } from "react";

export const BusinessContext = () => {
  const [contextId, setContextId] = useState(0);
  const [readContexts, setReadContexts] = useState([]);
  const [taskId, setTaskId] = useState(1);
  const taskContext = useContext(TaskContext);

  const task = tasksData.find((taskData) => taskData.id === taskId);
  const businessContext = task.businessContexts.find(
    ({ id }) => id === contextId && readContexts.includes(id)
  );

  useEffect(() => {
    setTaskId(taskContext.currentTask);
  }, [taskContext]);

  const handleMarkAsRead = (id) => {
    if (!readContexts.includes(id)) {
      setReadContexts([...readContexts, id]);
    }
  };

  const mapTabs = () => {
    return task.businessContexts.map((tab) => {
      return (
        <ContextTab
          key={tab.id}
          onClick={() => {
            setContextId(tab.id);
            handleMarkAsRead(tab.id);
          }}
          tabContent={tab}
          active={contextId === tab.id}
          read={readContexts.includes(tab.id)}
        />
      );
    });
  };
  return (
    <>
      <div className="bg-gray column-sm-4 flex flex-col">{mapTabs()}</div>
      {businessContext && (
        <div className="column-sm-8">
          <ContextContent tabContent={businessContext} />
        </div>
      )}
    </>
  );
};
