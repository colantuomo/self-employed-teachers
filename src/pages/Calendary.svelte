<script lang="ts">
  const TODAY_DATE = new Date();
  const CURRENT_MONTH = TODAY_DATE.getMonth();
  const CURRENT_DAY = TODAY_DATE.getDate();
  const CURRENT_YEAR = TODAY_DATE.getFullYear();
  let selectionMonth = TODAY_DATE.getMonth();
  function daysInMonth(month: number, year: number) {
    let days = [];
    const daysInMonth = 32 - new Date(year, month, 32).getDate();
    for (let i = 0; i < daysInMonth; i++) {
      days.push(i);
    }
    days = days.slice(1, days.length);
    days.push(days[days.length - 1] + 1);
    return days;
  }
  $: daysOfTheMonth = daysInMonth(selectionMonth, CURRENT_YEAR);
  $: currentMonthName = Intl.DateTimeFormat("pt-BR", {
    month: "short",
  }).format(new Date(CURRENT_YEAR, selectionMonth, 1));
  $: isCurrentMonth = selectionMonth === CURRENT_MONTH;
  function canHighlighCurrentDay(day: number) {
    return isCurrentMonth && day === CURRENT_DAY;
  }
  function changeMonth(month: number) {
    if (month < 0) {
      month = 11;
    } else if (month > 11) {
      month = 0;
    }
    selectionMonth = month;
  }
</script>

<div class="p-6 rounded-lg w-full bg-white h-95v">
  <div class="flex flex-col gap-6">
    <div class="flex gap-4 items-center text-center h-9">
      <div
        class="cursor-pointer"
        on:click={() => changeMonth(--selectionMonth)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </div>
      <h2 class="text-2xl capitalize w-44 select-none outline-none">
        {currentMonthName}
        {CURRENT_YEAR}
      </h2>
      <div
        class="cursor-pointer"
        on:click={() => changeMonth(++selectionMonth)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M9 5l7 7-7 7"
          />
        </svg>
      </div>
    </div>
    <div class="flex flex-wrap gap-2 xl:gap-5">
      {#each daysOfTheMonth as day}
        <div
          class="select-none lg:h-24 lg:w-24 p-2 border-t-2 xl:h-44 xl:w-36 border-black cursor-pointer hover:bg-gray-100 {canHighlighCurrentDay(
            day
          )
            ? 'bg-red-200 border-red-400'
            : ''}"
        >
          <p class="text-lg font-bold">{day}</p>
        </div>
      {/each}
    </div>
  </div>
</div>
