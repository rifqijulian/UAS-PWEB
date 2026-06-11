import { useState } from "react";

import Login from "./pages/login";
import Onboarding from "./pages/onboarding";
import Dashboard from "./pages/dashboard";
import Profile from "./pages/profile";
import Music from "./pages/music";
import Maps from "./pages/maps";
import MemoryDetail from "./pages/memoryDetail";

function App() {

  const [page, setPage] = useState("login");

  const [selectedMood, setSelectedMood] =
    useState("tenang");

  const [selectedMemory, setSelectedMemory] =
    useState(null);

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

          goToMaps={() =>
            setPage("maps")
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

      {/* MAPS */}
      {page === "maps" && (
        <Maps
          goToDashboard={() =>
            setPage("dashboard")
          }

          goToMusic={() =>
            setPage("music")
          }

          goToProfile={() =>
            setPage("profile")
          }

          goToDetail={(memory) => {
            setSelectedMemory(memory);
            setPage("detail");
          }}
        />
      )}

      {/* MEMORY DETAIL */}
      {page === "detail" && (
        <MemoryDetail
          memory={selectedMemory}
          goBack={() =>
            setPage("maps")
          }
        />
      )}

    </>
  );
}

export default App;