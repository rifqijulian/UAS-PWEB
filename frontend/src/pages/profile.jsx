import "./profile.css";
import Sidebar from "../components/Sidebar";

export default function Profile({
  goToDashboard,
  goToMusic,
  goToMaps,
  goToInsight,
  goToSettings
}) {

  return (

    <div className="dashboard-layout">

      <Sidebar
        activePage="profile"

        goToDashboard={goToDashboard}
        goToMusic={goToMusic}
        goToMaps={goToMaps}
        goToInsight={goToInsight}
        goToSettings={goToSettings}
      />

      <div className="dashboard-content">

        <h1>
          Profil Saya
        </h1>

        <div className="profile-card">

          <div className="profile-left">

            <div className="profile-photo">
              SR
            </div>

          </div>

          <div className="profile-right">

            <h2>
              Sazkia Rahmadina
            </h2>

            <p>
              Mahasiswa Sistem Informasi
            </p>

            <div className="profile-info">

              <div className="info-box">
                ☁ Mood Favorit
                <strong>Tenang</strong>
              </div>

              <div className="info-box">
                🎵 Lagu Favorit
                <strong>Blue Jeans</strong>
              </div>

              <div className="info-box">
                📍 Total Memori
                <strong>24</strong>
              </div>

            </div>

          </div>

        </div>

      </div>

    </div>

  );
}