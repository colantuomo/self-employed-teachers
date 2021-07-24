import { format, getDay } from "date-fns";
import { ptBR } from "date-fns/locale";

const TODAY_DATE = new Date();
const CURRENT_MONTH = TODAY_DATE.getMonth();
const CURRENT_DAY = TODAY_DATE.getDate();
const CURRENT_YEAR = TODAY_DATE.getFullYear();

function daysInMonth(month: number, year: number) {
  const TOTAL_MONTH_DAYS = 32;
  let days = [];
  const daysInMonth =
    TOTAL_MONTH_DAYS - new Date(year, month, TOTAL_MONTH_DAYS).getDate();
  for (let i = 0; i < daysInMonth; i++) {
    days.push(i);
  }
  days = days.slice(1, days.length);
  days.push(days[days.length - 1] + 1);
  return days;
}

function dayOfTheWeekName(
  day: number,
  month: number,
  type: "full" | "short" = "short"
) {
  const date = new Date(CURRENT_YEAR, month, day);
  const weekName = format(date, "eeee", {
    locale: ptBR,
  });
  return type === "short" ? weekName.substring(0, 3) : weekName;
}

function monthName(year: number, month: number, day: number = 1) {
  return Intl.DateTimeFormat("pt-BR", {
    month: "short",
  }).format(new Date(year, month, day));
}

export {
  daysInMonth,
  dayOfTheWeekName,
  monthName,
  TODAY_DATE,
  CURRENT_DAY,
  CURRENT_MONTH,
  CURRENT_YEAR,
};
