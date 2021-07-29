<script>
  import StudentCard from "../components/StudentCard.svelte";
  import { studentsStore } from "../stores/studentsStore";
  let students = [];
  studentsStore.subscribe((st) => {
    if (st) {
      students = st;
    }
  });
</script>

<div class="flex flex-col gap-2 items-center overflow-y-auto h-95v overflow-x-hidden">
  {#each students as student}
    <StudentCard
      {...student}
      createdAt={student.createdAt && student.createdAt.toDate()}
    />
  {/each}
</div>
