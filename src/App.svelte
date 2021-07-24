<script lang="ts">
  import { auth } from "./firebase";
  import { Router, Route, navigate } from "svelte-navigator";
  import { userStore } from "./stores";
  import Tailwind from "./utils/Tailwind.svelte";

  import Login from "./pages/Login.svelte";
  import Classroom from "./pages/Classroom.svelte";
  import Home from "./pages/Home.svelte";
  import Students from "./pages/Students.svelte";
  import ContentWithSideMenu from "./templates/ContentWithSideMenu.svelte";

  import ProfileHeader from "./components/ProfileHeader.svelte";
  import TeacherCalendar from "./pages/TeacherCalendar.svelte";

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
    <Route path="login">
      <Login />
    </Route>
    <Route path="">
      <ContentWithSideMenu>
        <Home />
      </ContentWithSideMenu>
    </Route>
    <Route path="students">
      <ContentWithSideMenu>
        <Students />
      </ContentWithSideMenu>
    </Route>
    <Route path="calendar">
      <ContentWithSideMenu>
        <TeacherCalendar />
      </ContentWithSideMenu>
    </Route>
    <Route path="classroom/:id" let:params>
      <ProfileHeader />
      <div class="pb-36" />
      <div class="container mx-auto">
        <Classroom id={params.id} />
      </div>
    </Route>
  </Router>
</main>

<Tailwind />
