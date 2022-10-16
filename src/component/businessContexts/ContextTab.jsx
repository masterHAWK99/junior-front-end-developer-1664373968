import { getShortFormattedDate } from "../../utils/DateFormatingUtils";

export const ContextTab = ({ onClick, tabContent, active, read }) => {
  const { title, content, author, created_at } = tabContent;

  let containerClassNameWhenNew = !read && "shadow-sm btn-light";
  let containerClassNameWhenActive = active && "shadow-xl btn-light";
  let containerClassNameWhenAny = !active && read ? "btn-empty" : "";
  let titleClassNameWhenNew = !read
    ? "font-bold text-primary"
    : "font-medium text-dark";

  return (
    <button
      className={`btn border border-b-1 border-gray rounded px-5 py-3h m-2 flex flex-col ${containerClassNameWhenNew} ${containerClassNameWhenActive} ${containerClassNameWhenAny}`}
      onClick={onClick}
    >
      <div className="flex align-items-center">
        {!read && (
          <div className="text-sm uppercase font-semibold bg-primary rounded-sm px-3 py-1 text-light-blue mr-3">
            New
          </div>
        )}
        <p className="text-sm text-light font-medium">
          {author} ● {getShortFormattedDate(created_at)}
        </p>
      </div>
      <p className={`text-md mt-2 ${titleClassNameWhenNew}`}>{title}</p>
      <p className="text-left text-sm text-light mt-2 module line-clamp font-medium">
        {content}
      </p>
    </button>
  );
};
