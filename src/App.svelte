<script lang="ts">
  import { Router, Route } from "svelte-navigator";
  import Home from "./pages/Home.svelte";
  import Tailwind from "./utils/Tailwind.svelte";
</script>

<div class="fixed p-6 bg-white w-full z-10">
  <div class="container mx-auto flex justify-between items-center">
    <div>
      <input
        class="font-bold text-4xl outline-none capitalize"
        placeholder="John Snow"
      />
      <p class="text-gray-400">
        {new Intl.DateTimeFormat("pt-br", {
          dateStyle: "full",
          timeStyle: "short",
        }).format(new Date())}
      </p>
    </div>
    <button
      class="btn h-12 w-56 rounded-lg hover:bg-primary-300 bg-primary text-white font-bold"
      >Voltar a home</button
    >
  </div>
</div>
<main class="container mx-auto pt-20 px-6">
  <Router>
    <Route path="/" component={Home} />
  </Router>
</main>

<Tailwind />
