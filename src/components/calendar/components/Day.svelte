<script lang="ts">
  export let day: number;
  export let dayOfWeek: string;
  export let highlighCurrentDay: boolean;
  export let amountOfClasses: number = 0;

  function colorBasedOnClassesAmount(amount: number) {
    console.log(amount, day);
    if (amount === 0) return "";
    if (amount <= 3) {
      return "bg-blue-100 hover:bg-blue-300";
    }
    if (amount > 3 && amount <= 6) {
      return "bg-green-100 hover:bg-green-300";
    }
    if (amount > 6) {
      return "bg-red-100 hover:bg-red-300";
    }
  }
</script>

<div
  on:click
  class="transition duration-100 ease-out hover:scale-105 active:scale-100 select-none lg:h-24 lg:w-24 p-2 border-t-2 xl:h-44 xl:w-36 border-black cursor-pointer {highlighCurrentDay
    ? 'bg-red-200 border-red-400 hover:bg-red-300 text-black'
    : 'hover:bg-gray-100'} {colorBasedOnClassesAmount(amountOfClasses)}"
>
  <p class="text-lg font-bold">{day}</p>
  <p>
    {dayOfWeek}
  </p>
</div>
