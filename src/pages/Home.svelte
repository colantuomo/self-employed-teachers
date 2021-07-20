<script lang="ts">
  import Sidemenu from "../components/Sidemenu.svelte";
  import StudentCard from "../components/StudentCard.svelte";
  import { Students } from "../services";
  import { userStore } from "../stores";
  import { studentsStore } from "../stores/studentsStore";
  let students = [];
  userStore.subscribe(async (user) => {
    if (!user) return;
    Students.all(user.uid);
  });
  studentsStore.subscribe((st) => {
    if (st) {
      console.log(st);
      students = st;
    }
  });
</script>

<div class="flex justify-between">
  <div class="container mx-auto flex flex-col gap-5 p-6 items-center">
    {#if !students.length}
      <div
        class="text-gray-400 select-none text-center flex flex-col gap-2 items-center pt-36"
      >
        <div
          class="ring-4 ring-gray-300 rounded-full mb-10 w-32 h-32 flex items-center pl-6"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-20 w-20 text-gray-300"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
            />
          </svg>
        </div>
        <p>Você pode adicionar novos alunos clicando em <b>Novo Aluno</b></p>
      </div>
    {/if}
    {#each students as item}
      <StudentCard {...item} createdAt={item.createdAt.toDate()} />
    {/each}
  </div>
  <div class="p-4">
    <Sidemenu />
  </div>
</div>
