import { getShortFormattedDate } from "../../utils/DateFormatingUtils";

export const ContextTab = ({ onClick, tabContent, active, read }) => {
  const { title, content, author, created_at } = tabContent;

  let containerClassNameWhenNew = !read && "shadow-sm bg-white";
  let containerClassNameWhenActive = active && "shadow-xl bg-white";
  let titleClassNameWhenNew = !read
    ? "font-bold text-primary"
    : "font-medium text-dark";

  return (
    <div
      className={`border border-b-1 border-gray rounded px-5 py-3h m-2 ${containerClassNameWhenNew} ${containerClassNameWhenActive}`}
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
      <button
        className={`btn text-md mt-2 ${titleClassNameWhenNew}`}
        onClick={onClick}
      >
        {title}
      </button>
      <p className="text-sm text-light mt-2">{content}</p>
    </div>
  );
};
