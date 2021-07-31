<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import { format } from "date-fns";
  import ptBR from "date-fns/locale/pt-BR";
  import { fade } from "svelte/transition";

  import type { Classroom } from "../../services/interfaces";

  export let classroom: Classroom;

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
  <p class="font-bold">{classroom.studentName}</p>
  <div class="flex gap-4">
    <p class="text-primary">
      {classroom.date
        ? format(classroom.date.toDate(), "ccc dd/MM", { locale: ptBR })
        : "--"}
    </p>
    <p class="text-primary font-bold">
      {classroom.date ? format(classroom.date.toDate(), "H:mm") : "--"}
    </p>
  </div>
</div>
