import { tasksData } from "../data/tasksData";
import { ContextTab } from "./ContextTab";
import { ContextContent } from "./ContextContent";

export const BusinessContext = () => {
  const mapTabs = () => {
    return tasksData[0].businessContexts.map((tab) => {
      return <ContextTab tabContent={tab} />;
    });
  };
  return (
    <>
      <div className="bg-gray w-25 p-3">{mapTabs()}</div>
      <div className="w-75">
        <ContextContent tabContent={tasksData[0].businessContexts[0]} />
      </div>
    </>
  );
};
