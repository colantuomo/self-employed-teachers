<script lang="ts">
  export let name: string;
  export let profilePicture: string;
  export let createdAt: Date;
</script>

<div class="w-120 h-32 rounded-lg bg-gray-800 p-4 flex gap-6 text-white hover:bg-gray-900 hover:shadow-xl hover:cursor-pointer">
  {#if profilePicture}
    <img
      alt={name}
      src={profilePicture}
      class="inline-block h-24 w-24 rounded-full bg-gray-200 ring-white ring-4"
    />
  {:else}
    <div class="inline-block h-24 w-24 rounded-full bg-gray-200" />
  {/if}
  <div>
    <h2 class="capitalize font-bold text-1xl">{name}</h2>
    <p>
      {new Intl.DateTimeFormat("pt-br", {
        dateStyle: "medium",
        timeStyle: "short",
      }).format(createdAt)}
    </p>
  </div>
</div>
