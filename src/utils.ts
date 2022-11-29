import { format as dateFnsFormat } from "date-fns";

export function formatDate(date: string, format = "dd/MM/yyyy") {
  const dateObj = new Date(date);
  const formatted = dateFnsFormat(dateObj, format);

  return formatted;
}
