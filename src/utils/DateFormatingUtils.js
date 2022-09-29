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

  return `● ${dayName} ${monthName} ● ${hour}:${minute}`;
};
