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

{#each students as student}
  <StudentCard
    {...student}
    createdAt={student.createdAt && student.createdAt.toDate()}
  />
{/each}
