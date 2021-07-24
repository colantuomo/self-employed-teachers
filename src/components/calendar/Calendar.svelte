<script lang="ts">
  import SideArrow from "../../icons/SideArrow.svelte";
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
  $: daysOfTheMonth = daysInMonth(selectedMonth, CURRENT_YEAR);
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
</script>

<div class="flex flex-col gap-6">
  <div class="flex gap-4 items-center text-center h-9">
    <div class="flex gap-4 items-center w-full">
      <button
        class="cursor-pointer hover:bg-gray-100 p-4 rounded-lg"
        on:click={() => changeMonth(--selectedMonth)}
      >
        <SideArrow isRightSide={false} />
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
        {day}
        dayOfWeek={`${dayOfTheWeekName(day, selectedMonth)}.`}
        highlighCurrentDay={canHighlighCurrentDay(day)}
      />
    {/each}
  </div>
</div>
