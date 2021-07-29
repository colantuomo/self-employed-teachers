<script lang="ts">
  import { format } from "date-fns";
  import ptBR from "date-fns/locale/pt-BR";
  import { firebase } from "../../firebase";

  import { createEventDispatcher } from "svelte";
  import Clock from "../../icons/Clock.svelte";
  import { Classrooms } from "../../services";
  import type { Classroom, Student } from "../../services/interfaces";
  import { userStore } from "../../stores";

  import Autocomplete from "../Autocomplete.svelte";
  import Button from "../Button.svelte";
  import ContentToggle from "../ContentToggle.svelte";
  import BaseModal from "./BaseModal.svelte";

  const dispatch = createEventDispatcher();

  export let showModal: boolean = false;
  export let daySelected: Date;

  let form: { student: Student; date: Date } = {} as any;

  function onTimeSelected(event: any) {
    const time = event.target.value.split(":");
    const dateSelected = new Date(daySelected);
    dateSelected.setHours(time[0], time[1]);
    console.log(dateSelected);
    form.date = dateSelected;
  }

  function onItemSelected({ detail }: any) {
    form.student = detail as Student;
  }

  function closeModal() {
    form = {
      student: undefined,
      date: undefined,
    };
    dispatch("close");
  }

  async function scheduleAClass(classroom: { student: Student; date: Date }) {
    const classr: Classroom = {
      date: firebase.firestore.Timestamp.fromDate(classroom.date),
      studentId: classroom.student.id,
      studentName: classroom.student.name,
      teacherId: $userStore.uid,
    };
    await Classrooms.add(classr);
    closeModal();
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
              <Autocomplete on:itemSelection={onItemSelected} />
            </div>
            <div class="flex flex-col items-center gap-4">
              <div class="flex gap-6">
                <h2 class="text-3xl font-bold">
                  {form?.student ? form.student?.name : "--"}
                </h2>
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
              <Button on:click={() => scheduleAClass(form)} name="Confirmar" />
            </div>
          </div>
        </div>
      </ContentToggle>
    </div>
  </BaseModal>
{/if}
