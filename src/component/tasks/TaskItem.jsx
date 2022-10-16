import completedIcon from "../../assets/completed.svg";
import activeIcon from "../../assets/active.svg";
import blockedIcon from "../../assets/blocked.svg";

export const TaskItem = ({ onClick, title, status }) => {
  const isActive = status === "active";
  const isBlocked = status === "blocked";

  const getIconByStatus = () => {
    if (isActive) {
      return activeIcon;
    }
    if (isBlocked) {
      return blockedIcon;
    }

    return completedIcon;
  };

  return (
    <div className="mt-6 flex">
      <img src={getIconByStatus()} alt="" />
      <button
        className={`btn btn-empty ml-3 ${
          isBlocked ? "text-gray-light" : "text-dark"
        } text-md ${isActive ? "font-semibold" : "font-medium"}`}
        onClick={onClick}
      >
        {title}
      </button>
    </div>
  );
};
