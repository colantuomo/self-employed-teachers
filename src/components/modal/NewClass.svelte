<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import Button from "../Button.svelte";
  import BaseModal from "./BaseModal.svelte";

  export let showModal: boolean = false;
  export let daySelected: Date;

  const dispatch = createEventDispatcher();
  function closeModal() {
    dispatch("close");
  }
</script>

{#if showModal}
  <BaseModal>
    <div class="flex flex-col">
      <h2>Dia selecionado {daySelected}</h2>
      <Button name="Fechar" on:click={closeModal} />
    </div>
  </BaseModal>
{/if}
