import { format } from "date-fns";

export const formatDate = (dateStr) => {
  const timeZone = "Asia/Dhaka";
  const date = new Date(dateStr);
  return format(date, "EEE, dd MMM yyyy", { timeZone });
};
