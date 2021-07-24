<script lang="ts">
  import { createEventDispatcher } from "svelte";
  export let day: number;
  export let dayOfWeek: string;
  export let highlighCurrentDay: boolean;
</script>

<div
  on:click
  class="transition duration-100 ease-out hover:scale-105 active:scale-100 select-none lg:h-24 lg:w-24 p-2 border-t-2 xl:h-44 xl:w-36 border-black cursor-pointer {highlighCurrentDay
    ? 'bg-red-200 border-red-400 hover:bg-red-300 text-black'
    : 'hover:bg-gray-100'}"
>
  <p class="text-lg font-bold">{day}</p>
  <p>
    {dayOfWeek}
  </p>
</div>
