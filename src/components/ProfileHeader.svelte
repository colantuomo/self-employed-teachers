<script lang="ts">
  import { navigate } from "svelte-navigator";
  import format from "date-fns/format";
  import html2canvas from "html2canvas";

  import type { Student } from "../services/interfaces";
  import { studentsStore } from "../stores/studentsStore";
  import Button from "./Button.svelte";
  import ptBR from "date-fns/locale/pt-BR";

  export let userId: string;
  let student: Student;
  let toDownload = { name: "", url: "" };

  studentsStore.subscribe(
    (students) =>
      (student = students && students.filter((st) => st.id === userId)[0])
  );

  function downloadClass() {
    html2canvas(document.querySelector("body")).then((canvas) => {
      const date = new Date();
      toDownload.name = `${student.name.toLowerCase()}-${format(
        date,
        "dd-MM-yyyy"
      )}`;
      toDownload.url = canvas.toDataURL("image/png");

      const aDownloadLink = document.createElement("a");
      aDownloadLink.download = `${toDownload.name}.png`;
      aDownloadLink.href = toDownload.url;
      aDownloadLink.click();
    });
  }
</script>

<div class="fixed p-6 bg-white w-full z-10">
  <div class="container mx-auto flex justify-between items-center">
    <div>
      <h2 class="font-bold text-4xl outline-none placeholder-gray-200">
        {student?.name ?? "--"}
      </h2>
      <p class="text-gray-400 capitalize">
        {format(new Date(), "eeee dd/MM - HH:mm", { locale: ptBR })}
      </p>
    </div>
    <div class="flex gap-4 w-72">
      <Button secondary name="Voltar a home" on:click={() => navigate("/")} />
      <Button name="Baixar aula" on:click={downloadClass} />
    </div>
  </div>
</div>
