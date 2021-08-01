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

  function guidGenerator() {
    var S4 = function () {
      return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    };
    return S4() + S4() + "-" + S4() + "-" + S4();
  }

  function dispatchEvent() {
    dispatch("onEdit", {
      id: id ? id : guidGenerator(),
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

  function onBlur() {
    console.log("blur!");
    if (canDispatchEvent) {
      dispatchEvent();
    }
  }

  function init(el: HTMLInputElement) {
    element = el;
  }
</script>

<div
  on:keydown={onKeyDown}
  class="flex gap-2 bg-white rounded-lg p-1 w-full items-center {!canDispatchEvent && canRemoveOpacity
    ? 'border-2 border-red-500'
    : ''} {!canRemoveOpacity ? 'opacity-40' : ''}"
>
  <input
    use:init
    bind:value={original}
    class="h-10 w-full pl-3 text-gray-400 outline-none xl:text-lg md:text-base"
  />
  |
  <input
    bind:value={meaning}
    class="h-10 w-full pl-3 text-gray-400 outline-none xl:text-lg md:text-base"
  />
</div>
