import { getLongFormattedDate } from "../../utils/DateFormatingUtils";
import profile from "../../assets/profile.png";

export const ContextContent = ({ tabContent }) => {
  const { title, content, author, created_at } = tabContent;

  return (
    <div className="p-8">
      <p className="font-semibold text-lg text-dark">{title}</p>
      <div className="flex mt-3">
        <div>
          <img
            className="rounded-full border border-1 avatar"
            src={profile}
            alt="profile"
          />
        </div>
        <div className="ml-3h">
          <div className="flex align-items-center">
            <p className="font-medium text-dark">{author}</p>
            <p className="text-sm ml-1 text-light font-medium">
              {getLongFormattedDate(created_at)}
            </p>
          </div>
          <p className="text-sm font-medium text-light">{content}</p>
        </div>
      </div>
    </div>
  );
};
