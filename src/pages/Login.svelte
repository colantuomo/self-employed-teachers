<script lang="ts">
  import { navigate } from "svelte-navigator";
  import { auth, providers, firebase } from "../firebase";
  import { userStore } from "../stores/userStore";
  async function login() {
    auth.setPersistence(firebase.auth.Auth.Persistence.LOCAL);
    const result = await auth.signInWithPopup(providers.google);
    if (result) {
      $userStore = result.user;
      navigate("/");
      return;
    }
  }
</script>

<div class="flex">
  <div class="flex flex-col gap-24 px-6 pt-44 flex-1 items-center">
    <div>
      <h2 class="text-5xl text-primary">Digital</h2>
      <h2 class="text-5xl font-bold text-primary">Classroom</h2>
    </div>
    <button
      on:click={login}
      class="btn h-12 w-56 rounded-lg hover:bg-blue-500 bg-blue-400 text-white font-bold flex items-center px-4 gap-3"
    >
      <img class="h-6" alt="google-icon" src="/assets/icons/google.svg" />
      Use com o google</button
    >
  </div>
  <!-- <div class="bg-primary h-screen w-full flex-1" /> -->
</div>
