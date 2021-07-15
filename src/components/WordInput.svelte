<script lang="ts">
  interface EventParams {
    id: string;
    original: string;
    meaning: string;
  }
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher<{ onEdit: EventParams }>();
  export let id: string = "";
  export let original: string = "";
  export let meaning: string = "";

  $: canDispatchEvent = original && meaning;
  $: canRemoveOpacity = original || meaning;

  function clearInputs() {
    original = "";
    meaning = "";
    id = "";
  }

  function onBlur() {
    if (canDispatchEvent) {
      dispatch("onEdit", {
        id,
        original,
        meaning,
      });
      clearInputs();
    }
  }
</script>

<div
  class="flex gap-2 bg-white rounded-lg p-1 w-full items-center {!canRemoveOpacity
    ? 'opacity-40'
    : ''}"
>
  <input
    on:blur={onBlur}
    bind:value={original}
    class="h-10 w-full pl-3 text-gray-400 outline-none text-lg"
  />
  |
  <input
    on:blur={onBlur}
    bind:value={meaning}
    class="h-10 w-full pl-3 text-gray-400 outline-none text-lg"
  />
</div>
