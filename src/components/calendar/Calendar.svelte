<script lang="ts">
  import { createEventDispatcher } from "svelte";

  import type { Classroom } from "../../services/interfaces";
  import SideArrow from "../../icons/SideArrow.svelte";
  import { Classrooms } from "../../services";
  import { userStore } from "../../stores";
  import Button from "../Button.svelte";
  import Day from "./components/Day.svelte";
  import {
    daysInMonth,
    dayOfTheWeekName,
    monthName,
    TODAY_DATE,
    CURRENT_DAY,
    CURRENT_MONTH,
    CURRENT_YEAR,
  } from "./utils";

  let selectedMonth = TODAY_DATE.getMonth();
  let classrooms: Classroom[] = [];
  $: daysOfTheMonth = daysInMonth(
    selectedMonth,
    CURRENT_YEAR,
    classrooms as any
  );
  $: currentMonthName = monthName(CURRENT_YEAR, selectedMonth);
  $: isCurrentMonth = selectedMonth === CURRENT_MONTH;
  function canHighlighCurrentDay(day: number) {
    return isCurrentMonth && day === CURRENT_DAY;
  }
  function changeMonth(month: number) {
    const DECEMBER = 11;
    const JANUARY = 0;
    if (month < JANUARY) {
      month = DECEMBER;
    } else if (month > DECEMBER) {
      month = JANUARY;
    }
    selectedMonth = month;
  }

  function setCurrentMonth(month: number) {
    selectedMonth = month;
  }

  const dispatch = createEventDispatcher();
  function daySelected(day: number) {
    dispatch("daySelected", {
      date: new Date(CURRENT_YEAR, selectedMonth, day),
    });
  }

  function classroomCount(day: number) {
    let count = 0;
    classrooms.forEach((classroom) => {
      if (
        classroom.date.toDate().getDate() === day &&
        classroom.date.toDate().getMonth() === selectedMonth
      ) {
        count++;
      }
    });
    return count;
  }

  userStore.subscribe(async (user) => {
    if (!user) return;
    Classrooms.all(user.uid).then((docs) => (classrooms = docs));
  });
</script>

<div class="flex flex-col gap-6">
  <div class="flex gap-4 items-center text-center h-9">
    <div class="flex gap-4 items-center w-full">
      <button
        class="cursor-pointer hover:bg-gray-100 p-4 rounded-lg"
        on:click={() => changeMonth(--selectedMonth)}
      >
        <SideArrow left />
      </button>
      <h2 class="text-2xl capitalize w-44 select-none outline-none">
        {currentMonthName}
        {CURRENT_YEAR}
      </h2>
      <button
        class="cursor-pointer hover:bg-gray-100 p-4 rounded-lg"
        on:click={() => changeMonth(++selectedMonth)}
      >
        <SideArrow />
      </button>
    </div>
    <div class="w-40">
      <Button
        name="Mês atual"
        secondary
        on:click={() => setCurrentMonth(CURRENT_MONTH)}
      />
    </div>
  </div>
  <div class="flex flex-wrap gap-2 xl:gap-5">
    {#each daysOfTheMonth as day}
      <Day
        on:click={() => daySelected(day)}
        {day}
        dayOfWeek={`${dayOfTheWeekName(day, selectedMonth)}.`}
        highlighCurrentDay={canHighlighCurrentDay(day)}
        amountOfClasses={classroomCount(day)}
      />
    {/each}
  </div>
</div>
