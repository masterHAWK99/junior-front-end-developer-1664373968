import "./index.css";
import { TaskList } from "./component/tasks/TaskList";
import { ReactComponent as CompassIcon } from "./assets/compass.svg";
import { BusinessContext } from "./component/businessContexts/BusinessContext";

function App() {
  return (
    <div className="flex mh-100 p-6">
      <aside className="bg-white rounded w-25">
        <p className="font-bold uppercase p-6 border border-b-1 border-gray">
          Your tasks
        </p>
        <TaskList />
      </aside>
      <main className="bg-white rounded w-75 ml-3 flex flex-col">
        <div className="border border-b-1 border-gray">
          <button className="font-bold uppercase py-6 mx-6 text-primary border border-b-2 border-primary flex align-items-center bg-white">
            <CompassIcon />
            <span className="ml-3">Business context</span>
          </button>
        </div>
        <div className="flex ml-1 h-100">
          <BusinessContext />
        </div>
      </main>
    </div>
  );
}

export default App;
