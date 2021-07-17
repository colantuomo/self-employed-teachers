<script lang="ts">
  import { Router, Route } from "svelte-navigator";

  import ProfileHeader from "./components/ProfileHeader.svelte";
  import Login from "./pages/Login.svelte";
  import Home from "./pages/Home.svelte";
  import Tailwind from "./utils/Tailwind.svelte";
  export const url = "";
</script>

<ProfileHeader />
<div class="pb-36"></div>
<main class="container mx-auto px-6">
  <Router>
    <Route path="/">
      <Home />
    </Route>
    <Route path="login">
      <Login />
    </Route>
  </Router>
</main>

<Tailwind />
