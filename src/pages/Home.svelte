<script lang="ts">
  import { navigate } from "svelte-navigator";

  import NextClass from "../components/cards/NextClass.svelte";
  import Info from "../components/cards/Info.svelte";
  import { Classrooms, Students } from "../services";
  import type { Classroom, Student } from "../services/interfaces";
  import { userStore } from "../stores";
  import { studentsStore } from "../stores/studentsStore";

  let students: Student[] = [];
  let classrooms: Classroom[] = [];
  userStore.subscribe(async (user) => {
    if (!user) return;
    Classrooms.all(user.uid).then((docs) => (classrooms = docs));
    Students.all(user.uid);
  });
  studentsStore.subscribe((st) => {
    if (st) {
      students = st;
    }
  });
</script>

<div class="container mx-auto flex gap-5 p-4 w-full justify-around">
  <div class="flex flex-col gap-6 h-full w-full bg-gray-200 rounded-lg p-6">
    <h2 class="text-3xl font-bold mb-5">Próximas aulas</h2>
    {#each classrooms as classroom}
      <NextClass
        {...classroom}
        on:click={() => navigate(`classroom/${classroom.id}`)}
      />
    {/each}
  </div>
  <div class="flex flex-col gap-4">
    <Info
      studentsLenght={students.length}
      on:click={() => navigate(`students`)}
    />
    <div class="flex flex-col h-40 w-full bg-green-300 rounded-lg p-6 gap-6">
      <p class="text-4xl font-bold">0</p>
      <p class="text-xl">Aulas ministradas</p>
    </div>
    <div class="flex flex-col h-40 w-full bg-red-300 rounded-lg p-6 gap-6">
      <p class="text-4xl font-bold">0</p>
      <p class="text-xl">Aulas agendadas essa semana</p>
    </div>
  </div>
</div>
