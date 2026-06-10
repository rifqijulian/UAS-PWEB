import { useState } from "react";

import Login from "./pages/login";
import Onboarding from "./pages/onboarding";
import Dashboard from "./pages/dashboard";
import Profile from "./pages/profile";
import Music from "./pages/music";

function App() {

  const [page, setPage] = useState("login");

  // mood user
  const [selectedMood, setSelectedMood] =
    useState("tenang");

  return (
    <>

      {/* LOGIN */}
      {page === "login" && (
        <Login
          goToOnboarding={() =>
            setPage("onboarding")
          }
        />
      )}

      {/* ONBOARDING */}
      {page === "onboarding" && (
        <Onboarding
          goToDashboard={() =>
            setPage("dashboard")
          }
        />
      )}

      {/* DASHBOARD */}
      {page === "dashboard" && (
        <Dashboard
          goToProfile={() =>
            setPage("profile")
          }

          goToMusic={() =>
            setPage("music")
          }

          selectedMood={selectedMood}

          setSelectedMood={setSelectedMood}
        />
      )}

      {/* PROFILE */}
      {page === "profile" && (
        <Profile
          goToDashboard={() =>
            setPage("dashboard")
          }

          selectedMood={selectedMood}
        />
      )}

      {/* MUSIC */}
      {page === "music" && (
        <Music
          goToDashboard={() =>
            setPage("dashboard")
          }

          goToProfile={() =>
            setPage("profile")
          }
        />
      )}

    </>
  );
}

export default App;