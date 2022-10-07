export const TaskItem = ({ onClick, title, icon, active }) => {
  return (
    <div className="mt-6 flex">
      <img src={icon} alt="" />
      <button
        className={`btn btn-empty ml-3 text-dark text-md ${
          active ? "font-semibold" : "font-medium"
        }`}
        onClick={onClick}
      >
        {title}
      </button>
    </div>
  );
};
