<script lang="ts">
  import { format } from "date-fns";
  import ptBR from "date-fns/locale/pt-BR";

  import { createEventDispatcher } from "svelte";
  import Clock from "../../icons/Clock.svelte";
  import Edit from "../../icons/Edit.svelte";
import Autocomplete from "../Autocomplete.svelte";
  import Button from "../Button.svelte";

  import ContentToggle from "../ContentToggle.svelte";
  import BaseModal from "./BaseModal.svelte";

  const dispatch = createEventDispatcher();

  export let showModal: boolean = false;
  export let daySelected: Date;

  function onTimeSelected(event: any) {
    console.log("time", event.target.value);
  }

  function closeModal() {
    dispatch("close");
  }
</script>

{#if showModal}
  <BaseModal on:click={closeModal}>
    <div class="flex flex-col bg-gray-100 w-full h-80v rounded-lg">
      <ContentToggle>
        <div slot="slot1" class="flex gap-2 w-full justify-around">
          <div class="w-full flex flex-col gap-4">
            <button
              class="flex justify-between bg-white w-60 p-3 rounded-lg hover:bg-primary-300 transform ease-in duration-100 hover:text-white"
            >
              <p>Paulo</p>
              <div class="flex gap-2 items-center">
                <Clock />
                <p class="font-bold">16:30</p>
              </div>
            </button>
          </div>
          <div class="w-full flex justify-between">
            <h2>Paulo</h2>
            {daySelected.getDate()}
          </div>
        </div>
        <div slot="slot2" class="flex flex-col h-full justify-between">
          <div class="flex flex-col items-center gap-8">
            <div>
              <Autocomplete/>
            </div>
            <div class="flex flex-col items-center gap-4">
              <div class="flex gap-6">
                <h2 class="text-3xl font-bold">Joao Carlos</h2>
                <h2 class="text-3xl">
                  {format(daySelected, "dd/MM", { locale: ptBR })}
                </h2>
              </div>
              <div class="flex flex-col items-center gap-4">
                <p class="text-2xl">Selecione o horario da aula:</p>
                <input
                  on:change={onTimeSelected}
                  class="p-4 bg-transparent text-5xl outline-none"
                  type="time"
                />
              </div>
            </div>
          </div>
          <div class="flex gap-4 w-full justify-end">
            <div class="w-1/2 flex gap-2">
              <Button secondary name="Cancelar" />
              <Button name="Confirmar" />
            </div>
          </div>
        </div>
      </ContentToggle>
    </div>
  </BaseModal>
{/if}
