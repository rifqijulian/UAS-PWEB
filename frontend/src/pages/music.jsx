import "./music.css";
import Sidebar from "../components/Sidebar";

export default function Music({
  goToDashboard,
  goToMaps,
  goToInsight,
  goToProfile,
  goToSettings
}) {

  return (

    <div className="dashboard-layout">

      <Sidebar
        activePage="music"
        goToDashboard={goToDashboard}
        goToMusic={() => {}}
        goToMaps={goToMaps}
        goToInsight={goToInsight}
        goToProfile={goToProfile}
        goToSettings={goToSettings}
      />

      <div className="music-page">

        <div className="music-topbar">

          <input
            type="text"
            placeholder="lagi nyari lagu yang relate?"
          />

        </div>

        <div className="hero-playlist">

          <div>

            <span className="playlist-tag">
              for your current mood
            </span>

            <h1>
              lagi di chapter yang mana?
            </h1>

            <p>
              setiap fase punya soundtrack-nya sendiri.
            </p>

          </div>

        </div>


        <div className="mood-filter">

          <button>healing mode</button>
          <button>slow living</button>
          <button>locked in</button>
          <button>late night thoughts</button>

        </div>

        <h2 className="section-title">
          made for your vibe
        </h2>

        <div className="playlist-grid">

          <div className="playlist-card">

            <img
              src="https://images.unsplash.com/photo-1511379938547-c1f69419868d"
              alt=""
            />

            <h3>
              midnight café
            </h3>

            <p>
              untuk malam yang panjang
              dan pikiran yang belum pulang.
            </p>

          </div>

          <div className="playlist-card">

            <img
              src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
              alt=""
            />

            <h3>
              soft reset
            </h3>

            <p>
              saat semuanya terasa berat,
              pelan-pelan aja.
            </p>

          </div>

          <div className="playlist-card">

            <img
              src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f"
              alt=""
            />

            <h3>
              main character energy
            </h3>

            <p>
              karena hidupmu juga
              layak punya soundtrack.
            </p>

          </div>

        </div>

        <h2 className="section-title">
          on repeat lately
        </h2>

        <div className="song-list">

          <div className="song-row">

            <img
              src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f"
              alt=""
            />

            <div className="song-info">

              <h4>
                Blue Jeans
              </h4>

              <p>
                Gangga
              </p>

            </div>

            <button className="play-btn">
              Listen
            </button>

          </div>

          <div className="song-row">

            <img
              src="https://images.unsplash.com/photo-1516280440614-37939bbacd81"
              alt=""
            />

            <div className="song-info">

              <h4>
                Glimpse of Us
              </h4>

              <p>
                Joji
              </p>

            </div>

            <button className="play-btn">
              Listen
            </button>

          </div>

          <div className="song-row">

            <img
              src="https://images.unsplash.com/photo-1506157786151-b8491531f063"
              alt=""
            />

            <div className="song-info">

              <h4>
                Until I Found You
              </h4>

              <p>
                Stephen Sanchez
              </p>

            </div>

            <button className="play-btn">
              Listen
            </button>

          </div>

        </div>

      </div>

    </div>

  );
}