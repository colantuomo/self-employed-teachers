import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { TOTAL_MONTH_DAYS } from "./constants";
import type { CalendarDay } from "./interfaces";

const getDaysInMonth = (year: number, month: number): Array<CalendarDay> => {
  const result: Array<CalendarDay> = [];
  const baseDate: Date = new Date(year, month, TOTAL_MONTH_DAYS);
  const daysInMonth: number = TOTAL_MONTH_DAYS - baseDate.getDate();

  for (let i = 0; i < daysInMonth; i++) {
    const indexDate = new Date(year, month, i + 1);
    const day = buildDay(indexDate);

    result.push(day);
  }

  return result;
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

export {
  getDaysInMonth,
  getMonthName,
};
