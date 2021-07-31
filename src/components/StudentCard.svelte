<script lang="ts">
  import format from "date-fns/format";

  import { fade } from "svelte/transition";
  import Trash from "../icons/Trash.svelte";

  import { Students } from "../services";
  export let id: string;
  export let name: string;
  export let profilePicture: string;
  export let createdAt: Date;
  function remove() {
    Students.remove(id);
  }
</script>

<div
  transition:fade|local
  class="justify-between w-44 h-72 rounded-lg bg-gray-800 p-4 flex flex-col gap-4 text-white"
>
  <div class="flex flex-col gap-4 items-center text-center">
    {#if profilePicture}
      <img
        alt={name}
        src={profilePicture}
        class="inline-block h-20 w-20 rounded-full bg-gray-200 ring-white ring-4"
      />
    {:else}
      <div class="inline-block h-20 w-20 rounded-full bg-gray-200" />
    {/if}
    <div>
      <h2 class="capitalize font-bold text-1xl">{name}</h2>
      <p>
        {format(createdAt, "dd/MM")}
      </p>
    </div>
  </div>
  <button
    on:click={remove}
    class="flex flex-col items-center rounded-lg p-4 hover:bg-gray-700 w-full"
  >
    <Trash />
  </button>
</div>
