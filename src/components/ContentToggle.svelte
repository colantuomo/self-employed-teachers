<script lang="ts">
  import Button from "./Button.svelte";

  let state: "slot1" | "slot2" = "slot2";
  $: isClassrooms = state === "slot1" ? true : false;

  function setScreenState(screen: "slot1" | "slot2") {
    state = screen;
  }
</script>

<div class="flex w-full">
  <div class="w-4/5 {isClassrooms ? 'brightness-75' : ''}">
    <Button
      square
      name="Aulas agendadas"
      on:click={() => setScreenState("slot1")}
    />
  </div>
  <div class="w-4/5 {!isClassrooms ? 'brightness-75' : ''}">
    <Button square name="Agendar" on:click={() => setScreenState("slot2")} />
  </div>
</div>
<div class="p-6 h-full w-full">
  {#if state === "slot1"}
    <slot name="slot1" />
  {/if}
  {#if state === "slot2"}
    <slot name="slot2" />
  {/if}
</div>
