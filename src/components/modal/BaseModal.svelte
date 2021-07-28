<div
  class="overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none justify-center items-center flex"
>
  <div
    class="border-0 rounded-lg shadow-lg relative flex flex-col w-120 bg-white outline-none focus:outline-none"
  >
    <div class="flex flex-col justify-around items-center px-6 pb-6 gap-2">
      <button on:click class="flex justify-end w-full pt-4 hover:text-red-500">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-10 w-10"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
      <slot />
    </div>
  </div>
</div>
<div class="opacity-25 fixed inset-0 z-40 bg-black" />
