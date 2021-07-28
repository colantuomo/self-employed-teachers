<script>
  import { createEventDispatcher } from "svelte";
  import { fade } from "svelte/transition";

  const dispatch = createEventDispatcher();
  function click() {
    dispatch("click");
  }
</script>

<div
  transition:fade|local
  on:click={click}
  class="flex justify-between w-full h-14 bg-white rounded-lg p-6 items-center hover:drop-shadow-xl cursor-pointer transition duration-100 ease-in-out"
>
  <p class="font-bold">Paulo</p>
  <div class="flex gap-4">
    <p class="text-primary">20/07</p>
    <p class="font-bold">19:50</p>
  </div>
</div>
