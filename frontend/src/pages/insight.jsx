import "./insight.css";
import Sidebar from "../components/Sidebar";

export default function Insight({
  goToDashboard,
  goToMusic,
  goToMaps,
  goToProfile,
  goToSettings
}) {

  const mood =
    localStorage.getItem(
      "selectedMood"
    ) || "Happy";

  const moodData = {

    Happy: {
      quote:
        "today feels a little lighter. enjoy the little things.",
      playlist:
        "Happy Moments",
      color:
        "#8b5cf6"
    },

    "Falling In Love": {
      quote:
        "sometimes one person can change your whole playlist.",
      playlist:
        "Butterfly Feelings",
      color:
        "#a78bfa"
    },

    Sad: {
      quote:
        "it's okay to slow down and just feel.",
      playlist:
        "Rainy Thoughts",
      color:
        "#7c3aed"
    },

    Disappointed: {
      quote:
        "not every story goes as planned, and that's okay.",
      playlist:
        "Healing Chapters",
      color:
        "#6d28d9"
    },

    Angry: {
      quote:
        "take a breath. not everything needs an answer right now.",
      playlist:
        "Storm Inside",
      color:
        "#5b21b6"
    }

  };

  return (

    <div className="dashboard-layout">

      <Sidebar

        activePage="insight"

        goToDashboard={goToDashboard}

        goToMusic={goToMusic}

        goToMaps={goToMaps}

        goToProfile={goToProfile}

        goToSettings={goToSettings}

      />

      <div className="insight-content">

        <div
          className="insight-hero"
          style={{
            background:
              moodData[mood].color
          }}
        >

          <span>
            current mood
          </span>

          <h1>
            {mood}
          </h1>

          <p>
            {moodData[mood].quote}
          </p>

        </div>

        <div className="insight-grid">

          <div className="insight-card">

            <h3>
              Current Mood
            </h3>

            <h2>
              {mood}
            </h2>

          </div>

          <div className="insight-card">

            <h3>
              Recommended Playlist
            </h3>

            <h2>
              {moodData[mood].playlist}
            </h2>

          </div>

          <div className="insight-card">

            <h3>
              Memories Saved
            </h3>

            <h2>
              24
            </h2>

          </div>

        </div>

        <div className="weekly-card">

          <h2>
            your mood journey
          </h2>

          <p>
            based on your selected vibe today.
          </p>

          <div className="journey-line"></div>

        </div>

      </div>

    </div>

  );
}