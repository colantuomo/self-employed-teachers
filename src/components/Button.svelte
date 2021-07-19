<script lang="ts">
  export let secondary: boolean = false;
  export let name: string;
</script>

<button
  on:click
  class="btn h-12 w-full rounded-lg font-bold {secondary
    ? 'bg-gray-100 text-black hover:bg-gray-200'
    : 'bg-primary text-white hover:bg-primary-300'}">{name}</button
>
