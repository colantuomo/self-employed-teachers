<script lang="ts">
  import { fade } from "svelte/transition";
  import format from "date-fns/format";
  import type { Classroom } from "../../../services/interfaces";
  import Clock from "../../../icons/Clock.svelte";
  import Trash from "../../../icons/Trash.svelte";
  import { onMount } from "svelte";
  import { userStore } from "../../../stores";
  import { Classrooms } from "../../../services";

  export let classrooms: Classroom[] = [];
  export let date: Date;

  async function deleteClass(id: string) {
    await Classrooms.remove(id);
    filterByDate($userStore.uid, date);
  }
  function filterByDate(id: string, date: Date) {
    Classrooms.byDate($userStore?.uid, date).then(
      (classrms) => (classrooms = classrms)
    );
  }

  onMount(() => {
    userStore.subscribe((user) => {
      if (user) {
        filterByDate(user.uid, date);
      }
    });
  });
</script>

<div>
  {#each classrooms as classroom}
    <div transition:fade|local class="flex gap-4 items-center">
      <div class="flex justify-between bg-white w-80 p-3 rounded-lg">
        <p>{classroom.studentName}</p>
        <div class="flex gap-2 items-center">
          <Clock />
          <p class="font-bold">
            {format(classroom.date.toDate(), "H:mm")}
          </p>
        </div>
      </div>
      <button
        on:click={() => deleteClass(classroom.id)}
        class="p-4 hover:rounded-lg hover:text-red-500 hover:bg-gray-200  active:scale-95"
      >
        <Trash />
      </button>
    </div>
  {/each}
</div>
