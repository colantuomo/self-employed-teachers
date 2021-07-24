<script lang="ts">
  import Calendar from "../components/calendar/Calendar.svelte";
  import NewClass from "../components/modal/NewClass.svelte";

  let showModal: boolean;
  let selectedDay: Date;

  function onDaySelected({ detail }) {
    selectedDay = detail.date;
    showModal = true;
  }
</script>

<NewClass
  daySelected={selectedDay}
  {showModal}
  on:close={() => (showModal = !showModal)}
/>
<div class="p-6 rounded-lg w-full bg-white h-95v">
  <Calendar on:daySelected={onDaySelected} />
</div>
