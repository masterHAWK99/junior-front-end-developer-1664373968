export const TaskItem = ({ title, icon }) => {
  return (
    <div className="mt-6 ml-6 flex">
      <img src={icon} alt="" />
      <p className="ml-3">{title}</p>
    </div>
  );
};
