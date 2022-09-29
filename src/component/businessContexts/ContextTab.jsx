import { getShortFormattedDate } from "../../utils/DateFormatingUtils";

export const ContextTab = ({ onClick, tabContent, active, read }) => {
  const { title, content, author, created_at } = tabContent;

  return (
    <div
      className={`${
        !read && "bg-white"
      } border border-b-1 border-gray rounded p-3 m-3 ${
        active && "shadow-xl bg-white"
      }`}
    >
      <div className="flex align-items-center">
        {!read && (
          <div className="text-sm uppercase bg-primary rounded-sm p-1 text-light-blue">
            New
          </div>
        )}
        <p className="text-sm text-light ml-3">
          {author} ● {getShortFormattedDate(created_at)}
        </p>
      </div>
      <p className="font-medium text-md" onClick={onClick}>
        {title}
      </p>
      <p className="text-sm text-light">{content}</p>
    </div>
  );
};
