<script lang="ts">
  import { navigate } from "svelte-navigator";

  import type { Student } from "../services/interfaces";
  import { studentsStore } from "../stores/studentsStore";
  import Button from "./Button.svelte";

  export let userId: string;
  let student: Student;
  studentsStore.subscribe(
    (students) =>
      (student = students && students.filter((st) => st.id === userId)[0])
  );
  function downloadClass() {
    window.print();
  }
</script>

<div class="fixed p-6 bg-white w-full z-10">
  <div class="container mx-auto flex justify-between items-center">
    <div>
      <h2 class="font-bold text-4xl outline-none placeholder-gray-200">
        {student?.name ?? ""}
      </h2>
      <p class="text-gray-400">
        {new Intl.DateTimeFormat("pt-br", {
          dateStyle: "full",
          timeStyle: "short",
        }).format(new Date())}
      </p>
    </div>
    <div class="flex gap-4 w-72">
      <Button secondary name="Voltar a home" on:click={() => navigate("/")} />
      <Button name="Baixar aula" on:click={downloadClass} />
    </div>
  </div>
</div>
