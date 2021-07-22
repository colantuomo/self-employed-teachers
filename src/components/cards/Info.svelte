<script>
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  function click() {
    dispatch("click");
  }
</script>

<div
  on:click={click}
  class="flex flex-col h-40 w-72 bg-blue-400 rounded-lg p-6 gap-6 hover:drop-shadow-xl cursor-pointer transition duration-100 ease-in-out"
>
  <p class="text-4xl font-bold">0</p>
  <p class="text-xl">Alunos cadastrados</p>
</div>
