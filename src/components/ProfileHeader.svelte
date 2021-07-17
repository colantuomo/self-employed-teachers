<script lang="ts">
  import { navigate } from "svelte-navigator";
</script>

<div class="fixed p-6 bg-white w-full z-10">
  <div class="container mx-auto flex justify-between items-center">
    <div>
      <input
        class="font-bold text-4xl outline-none placeholder-gray-200"
        placeholder="Insert the name here..."
      />
      <p class="text-gray-400">
        {new Intl.DateTimeFormat("pt-br", {
          dateStyle: "full",
          timeStyle: "short",
        }).format(new Date())}
      </p>
    </div>
    <button
      on:click={() => navigate("login")}
      class="btn h-12 w-56 rounded-lg hover:bg-primary-300 bg-primary text-white font-bold"
      >Voltar a home</button
    >
  </div>
</div>
