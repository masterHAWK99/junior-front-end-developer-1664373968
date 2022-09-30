import { getShortFormattedDate } from "../../utils/DateFormatingUtils";

export const ContextTab = ({ onClick, tabContent, active, read }) => {
  const { title, content, author, created_at } = tabContent;

  let containerClassNameWhenNew = !read && "bg-white";
  let containerClassNameWhenActive = active && "shadow-xl bg-white";

  return (
    <div
      className={`border border-b-1 border-gray rounded p-3 m-3 ${containerClassNameWhenNew} ${containerClassNameWhenActive}`}
    >
      <div className="flex align-items-center">
        {!read && (
          <div className="text-sm uppercase font-semibold bg-primary rounded-sm px-3 py-1 text-light-blue mr-3">
            New
          </div>
        )}
        <p className="text-sm text-light">
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
