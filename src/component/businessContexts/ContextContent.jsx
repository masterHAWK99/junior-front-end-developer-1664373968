import { getLongFormattedDate } from "../../utils/DateFormatingUtils";

export const ContextContent = ({ tabContent }) => {
  const { title, content, author, created_at } = tabContent;

  return (
    <div className="p-6">
      <p className="font-semibold text-xl">{title}</p>
      <div className="flex align-items-center">
        <p className="font-medium">{author}</p>
        <p className="text-sm ml-1">{getLongFormattedDate(created_at)}</p>
      </div>
      <p className="text-sm font-medium text-light">{content}</p>
    </div>
  );
};
