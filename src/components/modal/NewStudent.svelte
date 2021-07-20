<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import { Students } from "../../services";
  import type { Student } from "../../services/interfaces";
  import { userStore } from "../../stores";
  import Button from "../Button.svelte";

  export let showModal: boolean;
  const dispatch = createEventDispatcher();
  let avatar: string | ArrayBuffer;
  let form: Student = {
    name: "",
    email: "",
    hourValue: undefined,
    profilePicture: "",
  };
  $: isFormValid =
    form.name && form.email && form.email.includes("@") && form.hourValue;

  function closeModal() {
    dispatch("close");
  }

  function addProfilePicture(ev: any) {
    const image = ev.target.files[0];
    if (!image) return;
    let reader = new FileReader();
    reader.readAsDataURL(image);
    reader.onload = (e) => {
      avatar = e.target.result;
      form.profilePicture = avatar as string;
    };
  }

  function clearForm() {
    form = {
      name: "",
      email: "",
      hourValue: undefined,
      profilePicture: "",
    };
    avatar = "";
  }

  function createUser() {
    form.teacherId = $userStore?.uid;
    Students.add(form);
    clearForm();
    closeModal();
  }

  // export const moneyMask = (ev: any) => {
  //   let value = ev.target.value;
  //   value = value.replace(".", "").replace(",", "").replace(/\D/g, "");
  //   const options = { minimumFractionDigits: 2 };
  //   const result = new Intl.NumberFormat("pt-BR", options).format(
  //     parseFloat(value) / 100
  //   );
  //   console.log(result);
  //   hourValue = "R$ " + result;
  // };
</script>

{#if showModal}
  <div
    class="overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none justify-center items-center flex"
  >
    <div
      class="border-0 rounded-lg shadow-lg relative flex flex-col w-120 bg-white outline-none focus:outline-none pt-6"
    >
      <div class="flex justify-around items-center p-6">
        <div class="flex flex-col gap-6">
          <input
            bind:value={form.name}
            class="bg-gray-50 rounded-3xl h-16 pl-6 w-80 outline-none"
            placeholder="Nome"
          />
          <input
            bind:value={form.email}
            type="email"
            class="bg-gray-50 rounded-3xl h-16 pl-6 w-80 outline-none"
            placeholder="Email"
          />
          <input
            bind:value={form.hourValue}
            type="number"
            class="bg-gray-50 rounded-3xl h-16 pl-6 outline-none"
            placeholder="Valor aula (Ex: 25)"
          />
        </div>
        <div class="flex flex-col items-center">
          <label for="upload">
            {#if avatar}
              <img
                class="hover:cursor-pointer h-40 w-40 rounded-full mb-4"
                src={avatar.toString()}
                alt="d"
              />
            {:else}
              <div
                class="hover:cursor-pointer flex pl-10 text-center items-center h-40 w-40 rounded-full bg-gray-200 mb-4 transition duration-100 ease-in-out hover:bg-gray-300"
              >
                <p class="text-gray-400">Inserir foto</p>
              </div>
            {/if}
            <input
              accept="image/*"
              type="file"
              id="upload"
              style="display:none"
              on:change={addProfilePicture}
            />
          </label>
          <p class="font-bold">Foto de perfil</p>
          <p class="text-gray-400">(Opcional)</p>
        </div>
      </div>
      <div class="flex justify-end p-6 gap-6 mt-10">
        <Button name="Cancelar" on:click={closeModal} secondary />
        <Button
          name="Adicionar"
          on:click={createUser}
          disabled={!isFormValid}
        />
      </div>
    </div>
  </div>
  <div class="opacity-25 fixed inset-0 z-40 bg-black" />
{/if}
