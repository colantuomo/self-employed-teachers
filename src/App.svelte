<script lang="ts">
  import { auth } from "../init-firebase";
  import { Router, Route, navigate } from "svelte-navigator";

  import ProfileHeader from "./components/ProfileHeader.svelte";
  import Login from "./pages/Login.svelte";
  import Classroom from "./pages/Classroom.svelte";
  import Home from "./pages/Home.svelte";
  import Tailwind from "./utils/Tailwind.svelte";
  import { userStore } from "./stores";
  export const url = "";
  auth.onAuthStateChanged((item) => {
    if (item) {
      $userStore = item;
      return;
    }
    navigate("login");
  });
</script>

<main>
  <Router>
    <Route path="">
      <Home />
    </Route>
    <Route path="login">
      <Login />
    </Route>
    <Route path="classroom">
      <ProfileHeader />
      <div class="pb-36" />
      <div class="container mx-auto">
        <Classroom />
      </div>
    </Route>
  </Router>
</main>

<Tailwind />
