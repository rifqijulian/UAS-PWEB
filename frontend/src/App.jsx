import { useState } from "react";

import Login from "./pages/login";
import Register from "./pages/register";
import Onboarding from "./pages/onboarding";

import Dashboard from "./pages/dashboard";
import Music from "./pages/music";
import Maps from "./pages/maps";
import MemoryDetail from "./pages/memoryDetail";
import Insight from "./pages/insight";
import Profile from "./pages/profile";
import Settings from "./pages/settings";

function App() {

  const [page, setPage] =
    useState("login");

  return (
    <>

      {/* LOGIN */}

      {page === "login" && (

        <Login

          goToOnboarding={() =>
            setPage("onboarding")
          }

          goToRegister={() =>
            setPage("register")
          }

        />

      )}

      {/* REGISTER */}

      {page === "register" && (

        <Register

          goToLogin={() =>
            setPage("login")
          }

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

          goToMusic={() =>
            setPage("music")
          }

          goToMaps={() =>
            setPage("maps")
          }

          goToInsight={() =>
            setPage("insight")
          }

          goToProfile={() =>
            setPage("profile")
          }

          goToSettings={() =>
            setPage("settings")
          }

        />

      )}

      {/* MUSIC */}

      {page === "music" && (

        <Music

          goToDashboard={() =>
            setPage("dashboard")
          }

          goToMaps={() =>
            setPage("maps")
          }

          goToInsight={() =>
            setPage("insight")
          }

          goToProfile={() =>
            setPage("profile")
          }

          goToSettings={() =>
            setPage("settings")
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

          goToInsight={() =>
            setPage("insight")
          }

          goToProfile={() =>
            setPage("profile")
          }

          goToSettings={() =>
            setPage("settings")
          }

          goToMemoryDetail={() =>
            setPage("memoryDetail")
          }

        />

      )}

      {/* MEMORY DETAIL */}

      {page === "memoryDetail" && (

        <MemoryDetail

          goBack={() =>
            setPage("maps")
          }

        />

      )}

      {/* INSIGHT */}

      {page === "insight" && (

        <Insight

          goToDashboard={() =>
            setPage("dashboard")
          }

          goToMusic={() =>
            setPage("music")
          }

          goToMaps={() =>
            setPage("maps")
          }

          goToProfile={() =>
            setPage("profile")
          }

          goToSettings={() =>
            setPage("settings")
          }

        />

      )}

      {/* PROFILE */}

      {page === "profile" && (

        <Profile

          goToDashboard={() =>
            setPage("dashboard")
          }

          goToMusic={() =>
            setPage("music")
          }

          goToMaps={() =>
            setPage("maps")
          }

          goToInsight={() =>
            setPage("insight")
          }

          goToSettings={() =>
            setPage("settings")
          }

        />

      )}

      {/* SETTINGS */}

      {page === "settings" && (

        <Settings

          goToDashboard={() =>
            setPage("dashboard")
          }

          goToMusic={() =>
            setPage("music")
          }

          goToMaps={() =>
            setPage("maps")
          }

          goToInsight={() =>
            setPage("insight")
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