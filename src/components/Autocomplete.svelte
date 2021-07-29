<script lang="ts">
  import { createEventDispatcher } from "svelte";

  import Search from "../icons/Search.svelte";
  import { studentsStore } from "../stores/studentsStore";

  const dispatch = createEventDispatcher();

  export let items = [];
  studentsStore.subscribe((students) => (items = students));
  let paramToSearch: string = "";
  let itemSelected: any;
  let onFocus: boolean;

  function onInputChange(ev: any) {
    paramToSearch = ev.target.value;
    if (itemSelected) {
      paramToSearch = "";
      itemSelected = undefined;
      onFocus = false;
    }
  }
  function setSelectedItem(item: any) {
    console.log(item);
    itemSelected = item;
    onFocus = false;
    dispatch("itemSelection", item);
  }

  $: filteredItems =
    items &&
    items
      .filter((item) =>
        item.name.toLowerCase().includes(paramToSearch.toLowerCase())
      )
      .slice(0, 5);

  $: canShowAutcomplete =
    (!itemSelected && paramToSearch.length >= 1) || onFocus;
</script>

<div class="flex w-80 p-1 pr-4 bg-white rounded-lg items-center">
  <input
    on:focus={() => (onFocus = true)}
    value={itemSelected?.name || ""}
    on:keydown={onInputChange}
    class="w-full p-4 outline-none"
    type="text"
    placeholder="Procure pelo nome do aluno aqui..."
  />
  <Search color="text-gray-300" />
  {#if canShowAutcomplete}
    <div
      class="absolute right-40 top-52 w-80 rounded-b-lg shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
      role="menu"
      aria-orientation="vertical"
      aria-labelledby="menu-button"
      tabindex="-1"
    >
      <div class="py-1" role="none">
        {#each filteredItems as item}
          <a
            on:click={() => setSelectedItem(item)}
            class="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-200 hover:cursor-pointer"
            role="menuitem"
            tabindex="-1"
            id="menu-item-0">{item.name}</a
          >
        {/each}
      </div>
    </div>
  {/if}
</div>
