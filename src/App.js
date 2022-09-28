import "./index.css";
import { TaskList } from "./component/tasks/TaskList";

function App() {
  return (
    <div className="container">
      <aside className="bg-white rounded w-25 mh-100">
        <p className="font-bold uppercase p-6 border border-b-1 border-gray">
          Your tasks
        </p>
        <TaskList />
      </aside>
    </div>
  );
}

export default App;
