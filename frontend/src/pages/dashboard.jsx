import "./dashboard.css";
import Sidebar from "../components/Sidebar";

export default function Dashboard({
  goToMusic,
  goToMaps,
  goToInsight,
  goToProfile,
  goToSettings
}) {

  const selectMood = (mood) => {

    localStorage.setItem(
      "selectedMood",
      mood
    );

    goToInsight();

  };

  return (

    <div className="dashboard-layout">

      <Sidebar

        activePage="dashboard"

        goToDashboard={() => {}}

        goToMusic={goToMusic}

        goToMaps={goToMaps}

        goToInsight={goToInsight}

        goToProfile={goToProfile}

        goToSettings={goToSettings}

      />

      <div className="dashboard-content">

        {/* HERO */}

        <div className="hero-card">

          <div>

            <span className="hero-badge">

              your current chapter

            </span>

            <h1>

              every feeling has
              a soundtrack.

            </h1>

            <p>

              discover playlists,
              save memories,
              and let every moment
              tell its story.

            </p>

          </div>

          <div className="hero-circle"></div>

        </div>

        {/* MOOD SECTION */}

        <div className="section-header">

          <h2>

            how are you feeling today?

          </h2>

        </div>

        <div className="mood-grid">

          {/* HAPPY */}

          <div
            className="mood-card happy"
            onClick={() =>
              selectMood("Happy")
            }
          >

            <div className="mood-logo happy-logo"></div>

            <h3>

              Happy

            </h3>

            <p>

              bright days and
              lighter hearts

            </p>

          </div>

          {/* LOVE */}

          <div
            className="mood-card love"
            onClick={() =>
              selectMood(
                "Falling In Love"
              )
            }
          >

            <div className="mood-logo love-logo"></div>

            <h3>

              Falling In Love

            </h3>

            <p>

              butterflies and
              favorite songs

            </p>

          </div>

          {/* SAD */}

          <div
            className="mood-card sad"
            onClick={() =>
              selectMood("Sad")
            }
          >

            <div className="mood-logo sad-logo"></div>

            <h3>

              Sad

            </h3>

            <p>

              music that understands
              silence

            </p>

          </div>

          {/* DISAPPOINTED */}

          <div
            className="mood-card disappointed"
            onClick={() =>
              selectMood(
                "Disappointed"
              )
            }
          >

            <div className="mood-logo disappointed-logo"></div>

            <h3>

              Disappointed

            </h3>

            <p>

              when reality feels
              different

            </p>

          </div>

          {/* ANGRY */}

          <div
            className="mood-card angry"
            onClick={() =>
              selectMood("Angry")
            }
          >

            <div className="mood-logo angry-logo"></div>

            <h3>

              Angry

            </h3>

            <p>

              breathe,
              pause and reset

            </p>

          </div>

        </div>

        {/* PLAYLIST */}

        <div className="section-header">

          <h2>

            made for your vibe

          </h2>

        </div>

        <div className="playlist-grid">

          <div className="playlist-card">

            <div className="playlist-cover cover1"></div>

            <h3>

              happy moments

            </h3>

            <p>

              songs for brighter
              days

            </p>

          </div>

          <div className="playlist-card">

            <div className="playlist-cover cover2"></div>

            <h3>

              butterfly feelings

            </h3>

            <p>

              romantic songs
              for your era

            </p>

          </div>

          <div className="playlist-card">

            <div className="playlist-cover cover3"></div>

            <h3>

              rainy thoughts

            </h3>

            <p>

              music that stays
              when words leave

            </p>

          </div>

        </div>

        {/* RECAP */}

        <div className="section-header">

          <h2>

            your vibe recap

          </h2>

        </div>

        <div className="stats-grid">

          <div className="stat-card">

            <h3>

              24

            </h3>

            <p>

              memories saved

            </p>

          </div>

          <div className="stat-card">

            <h3>

              60%

            </h3>

            <p>

              happy moments

            </p>

          </div>

          <div className="stat-card">

            <h3>

              Blue Jeans

            </h3>

            <p>

              most played track

            </p>

          </div>

        </div>

      </div>

    </div>

  );

}