import "./login.css";

export default function Login({
  goToOnboarding,
  goToRegister
}) {

  return (

    <div className="login-page">

      {/* LEFT SIDE */}

      <div className="login-left">

        <div className="blob blob1"></div>
        <div className="blob blob2"></div>
        <div className="blob blob3"></div>

        <div className="overlay"></div>

        {/* Floating Mood Shapes */}

        <div className="mood-cloud"></div>
        <div className="mood-circle"></div>
        <div className="mood-drop"></div>

        {/* HERO */}

        <div className="hero-content">

          <div className="music-logo">

            <div className="note-body"></div>

            <div className="note-head"></div>

          </div>

          <h1>
            Vibestune
          </h1>

          <p>
            simpan mood,
            kenang cerita,
            temukan soundtrack-nya.
          </p>

        </div>

      </div>

      {/* RIGHT SIDE */}

      <div className="login-right">

        <div className="login-card">

          <h2>
            welcome home
          </h2>

          <p className="subtitle">
            every feeling deserves
            its own soundtrack
          </p>

          <input
            type="email"
            placeholder="email"
          />

          <input
            type="password"
            placeholder="password"
          />

          <button
            onClick={goToOnboarding}
          >
            sign in
          </button>

          <div className="divider">
            or
          </div>

          <button className="spotify-btn">
            connect spotify
          </button>

          <div className="register-link">

            <span>
              don't have an account?
            </span>

            <button
              onClick={goToRegister}
            >
              create account
            </button>

          </div>

        </div>

      </div>

    </div>

  );

}