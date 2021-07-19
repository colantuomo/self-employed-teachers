<script>
  import { auth } from "../../init-firebase";
  import { userStore } from "../stores";
  import Button from "./Button.svelte";
</script>

<div
  class="bg-white w-48 xl:w-60 h-95v rounded-lg items-center flex flex-col p-5 justify-between"
>
  <div class="flex flex-col gap-6 w-full items-center">
    <img
      alt={$userStore?.displayName}
      src={$userStore?.photoURL}
      class="inline-block h-24 w-24 rounded-full bg-gray-200"
    />
    <p class="font-bold">{$userStore?.displayName ?? ""}</p>
    <Button name="Novo aluno" />
    <Button
      secondary
      name="Calendário"
      on:click={() => console.log("new student")}
    />
    <Button secondary name="Home" on:click={() => console.log("new student")} />
  </div>
  <Button secondary name="Sair" on:click={() => auth.signOut()} />
</div>
