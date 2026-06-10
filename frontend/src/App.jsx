import { useState } from "react";

import Login from "./pages/login";
import Onboarding from "./pages/onboarding";

function App() {

  const [page, setPage] = useState("login");

  return (
    <>

      {page === "login" && (
        <Login goToOnboarding={() => setPage("onboarding")} />
      )}

      {page === "onboarding" && (
        <Onboarding goToDashboard={() => alert("lanjut dashboard")} />
      )}

    </>
  );
}

export default App;