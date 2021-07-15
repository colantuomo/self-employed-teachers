<script lang="ts">
  import { wordsItems } from "../stores/localStore";
  import type { WordsItems, Words } from "../stores/localStore";
  import WordInput from "./WordInput.svelte";

  export let panelName: keyof WordsItems;
  export let wordsItem: Words[] = [];

  function onEdit({ detail }) {
    wordsItems.update((items) => {
      if (!detail.id) {
        detail.id = Math.random();
        items[panelName] = [...items[panelName], detail];
      }
      return items;
    });
  }
</script>

<div class="flex flex-col sm:w-full lg:w-w-49-percent">
  <h2 class="pb-4 capitalize outline-none font-bold">{panelName}</h2>
  <div class="flex flex-col gap-4 h-96 bg-gray-200 rounded-lg p-5 px-5 w-full">
    {#each wordsItem as item}
      <WordInput
        on:onEdit={onEdit}
        id={item.id}
        original={item.original}
        meaning={item.meaning}
      />
    {/each}
    <WordInput on:onEdit={onEdit} />
  </div>
</div>

<style>
</style>
