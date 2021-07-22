<script>
  import Sidemenu from "../components/Sidemenu.svelte";
</script>

<div class="flex justify-between">
  <div class="container mx-auto flex gap-5 p-4 w-full justify-around">
    <slot />
  </div>
  <div class="p-4">
    <Sidemenu />
  </div>
</div>
