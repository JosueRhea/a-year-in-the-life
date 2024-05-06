import {
  eachDayOfInterval,
  getYear,
  eachMonthOfInterval,
  format,
} from "date-fns";

export type MonthWithDays = {
  month: string;
  days: string[];
};

export function getMonthsWithDays(): MonthWithDays[] {
  const year = getYear(new Date());
  const startDate = new Date(year, 0, 1);
  const endDate = new Date(year, 11, 31);
  const months = eachMonthOfInterval({ start: startDate, end: endDate });
  return months.map((month) => {
    const days = eachDayOfInterval({
      start: new Date(getYear(month), month.getMonth(), 1),
      end: new Date(getYear(month), month.getMonth() + 1, 0),
    });

    // format month to "MMMM"
    // format day to "d"

    return {
      month: format(month, "MMMM"),
      days: days.map((day) => format(day, "d")),
    };
  });
}
