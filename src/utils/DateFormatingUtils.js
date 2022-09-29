export const getShortFormattedDate = (date) => {
  const dateObject = new Date(date);
  const options = { day: "numeric", month: "short" };
  return new Intl.DateTimeFormat("en-US", options).format(dateObject);
};

export const getLongFormattedDate = (date) => {
  const dateObject = new Date(date);
  const options = {
    hour: "numeric",
    minute: "numeric",
    day: "numeric",
    month: "long",
  };
  const parts = new Intl.DateTimeFormat("en-US", options).formatToParts(
    dateObject
  );
  const dayName = parts.find((p) => p.type === "day").value;
  const monthName = parts.find((p) => p.type === "month").value;
  const hour = parts.find((p) => p.type === "hour").value;
  const minute = parts.find((p) => p.type === "minute").value;

  const now = new Date(Date.now());

  const DAYS_IN_MILLISECONDS = 1000 * 3600 * 24;

  const daysDifference = Math.round(
    (now.getTime() - dateObject.getTime()) / DAYS_IN_MILLISECONDS
  );

  const daysAgo = daysDifference > 1 ? `${daysDifference} days ago` : "Today";

  return `● ${daysAgo}, ${dayName} ${monthName} ● ${hour}:${minute}`;
};
