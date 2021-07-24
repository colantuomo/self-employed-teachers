<script lang="ts">
  export let secondary: boolean = false;
  export let name: string;
  export let disabled: boolean = false;
</script>

<button
  {disabled}
  on:click
  class="transform h-12 w-full rounded-lg font-bold active:scale-95 {secondary
    ? 'bg-gray-100 text-black hover:bg-gray-200'
    : 'bg-primary text-white hover:bg-primary-300'} {disabled
    ? 'opacity-30 cursor-not-allowed'
    : ''}"
>
  {name}</button
>
