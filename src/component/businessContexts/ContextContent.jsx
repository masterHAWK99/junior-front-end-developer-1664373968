import { getLongFormattedDate } from "../../utils/DateFormatingUtils";

export const ContextContent = ({ tabContent }) => {
  const { title, content, author, created_at } = tabContent;

  return (
    <div className="p-6">
      <p className="font-semibold text-lg text-dark">{title}</p>
      <div className="flex align-items-center">
        <p className="font-medium text-dark">{author}</p>
        <p className="text-sm ml-1 text-light">
          {getLongFormattedDate(created_at)}
        </p>
      </div>
      <p className="text-sm font-medium text-light">{content}</p>
    </div>
  );
};
