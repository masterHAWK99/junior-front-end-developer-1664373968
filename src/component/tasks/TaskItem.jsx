export const TaskItem = ({ onClick, title, icon }) => {
  return (
    <div className="mt-6 ml-6 flex" onClick={onClick}>
      <img src={icon} alt="" />
      <p className="ml-3">{title}</p>
    </div>
  );
};
