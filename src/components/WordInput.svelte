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
  let element: HTMLInputElement;

  $: canDispatchEvent = original && meaning;
  $: canRemoveOpacity = original || meaning;

  function clearInputs() {
    original = "";
    meaning = "";
    id = "";
  }

  function dispatchEvent() {
    dispatch("onEdit", {
      id,
      original,
      meaning,
    });
    clearInputs();
  }

  function onKeyDown(event: KeyboardEvent) {
    if (event.key === "Enter" && canDispatchEvent) {
      dispatchEvent();
      element.focus();
    }
  }

  function init(el: HTMLInputElement) {
    element = el;
  }
</script>

<div
  on:keydown={onKeyDown}
  class="flex gap-2 bg-white rounded-lg p-1 w-full items-center {!canRemoveOpacity
    ? 'opacity-40'
    : ''}"
>
  <input
    use:init
    bind:value={original}
    class="h-10 w-full pl-3 text-gray-400 outline-none text-lg"
  />
  |
  <input
    bind:value={meaning}
    class="h-10 w-full pl-3 text-gray-400 outline-none text-lg"
  />
</div>
