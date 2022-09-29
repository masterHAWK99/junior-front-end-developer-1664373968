import { getShortFormattedDate } from "../../utils/DateFormatingUtils";

export const ContextTab = ({ tabContent }) => {
  const { title, content, author, created_at } = tabContent;

  return (
    <div className="bg-white border border-b-1 border-gray rounded p-3 m-3">
      <div className="flex align-items-center">
        <div className="text-sm uppercase bg-primary rounded-sm p-1 text-light-blue">
          New
        </div>
        <p className="text-sm text-light ml-3">
          {author} ● {getShortFormattedDate(created_at)}
        </p>
      </div>
      <p className="font-medium text-md">{title}</p>
      <p className="text-sm text-light">{content}</p>
    </div>
  );
};
