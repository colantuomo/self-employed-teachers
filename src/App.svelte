<script lang="ts">
  import { auth } from "./firebase";
  import { Router, Route, navigate } from "svelte-navigator";
  import { userStore } from "./stores";
  import Tailwind from "./utils/Tailwind.svelte";

  import Login from "./pages/Login.svelte";
  import Classroom from "./pages/Classroom.svelte";
  import Home from "./pages/Home.svelte";
  import ContentWithSideMenu from "./templates/ContentWithSideMenu.svelte";

  import ProfileHeader from "./components/ProfileHeader.svelte";
  import TeacherCalendar from "./pages/TeacherCalendar.svelte";
  import * as Services from "./services";
  import Students from "./pages/Students.svelte";

  export const url = "";

  auth.onAuthStateChanged((item) => {
    if (item) {
      $userStore = item;
      Services.Students.all(item.uid);
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
      <Classroom id={params.id} />
    </Route>
  </Router>
</main>

<Tailwind />
