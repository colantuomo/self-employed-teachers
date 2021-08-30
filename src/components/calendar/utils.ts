import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { TOTAL_MONTH_DAYS } from "./constants";
import type { CalendarDay } from "./interfaces";

const getWeeksInMonth = (year: number, month: number): Array<Array<CalendarDay>> => {
  const days: Array<CalendarDay> = [];
  const baseDate: Date = new Date(year, month, TOTAL_MONTH_DAYS);
  const daysInMonth: number = TOTAL_MONTH_DAYS - baseDate.getDate();
  const weeks: Array<Array<CalendarDay>> = [];

  for (let i = 0; i < daysInMonth; i++) {
    const indexDate = new Date(year, month, i + 1);
    const day = buildDay(indexDate);

    days.push(day);
  }

  handleWeeks(weeks, days);

  return weeks;
}

const buildDay = (date: Date): CalendarDay => {
  const dayNumber = date.getDate();
  const dayOfWeek = getDayOfWeekName(date);
  const monthName = getMonthName(date);

  return {
    dayNumber,
    dayOfWeek,
    monthName,
    fullDate: date,
  }
}

const getDayOfWeekName = (date: Date, type: "full" | "short" = "short") => {
  const weekName = format(date, "eeee", {
    locale: ptBR,
  });

  return type === "short" ? weekName.substring(0, 3) : weekName;
}

const getMonthName = (date: Date) => {
  return Intl.DateTimeFormat("pt-BR", {
    month: "short",
  }).format(date);
}

const handleWeeks = (weeks: Array<Array<CalendarDay>>, days: Array<CalendarDay>) => {
  const firstWeek = days.slice(0, 7);
  const secondWeek = days.slice(7, 14);
  const thirdWeek = days.slice(14, 21);
  const fourthWeek = days.slice(21, 28);
  const fifthWeek = days.slice(28);

  weeks.push(
    firstWeek,
    secondWeek,
    thirdWeek,
    fourthWeek,
    fifthWeek,
  );

  return weeks;
}

export {
  getWeeksInMonth,
  getMonthName,
};
