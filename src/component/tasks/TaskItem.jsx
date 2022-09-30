export const TaskItem = ({ onClick, title, icon, active }) => {
  return (
    <div className="mt-6 flex">
      <img src={icon} alt="" />
      <button
        className={`btn ml-3 text-dark text-md ${active && "font-semibold"}`}
        onClick={onClick}
      >
        {title}
      </button>
    </div>
  );
};
