import "./settings.css";
import Sidebar from "../components/Sidebar";

export default function Settings({
  goToDashboard,
  goToMusic,
  goToMaps,
  goToInsight,
  goToProfile
}) {

  return (

    <div className="dashboard-layout">

      <Sidebar
        activePage="settings"
        goToDashboard={goToDashboard}
        goToMusic={goToMusic}
        goToMaps={goToMaps}
        goToInsight={goToInsight}
        goToProfile={goToProfile}
      />

      <div className="dashboard-content">

        <h1>Pengaturan</h1>

        <p className="settings-subtitle">
          Kelola akun dan preferensimu.
        </p>

        <div className="settings-container">

          <div className="setting-card">
            <h3>👤 Edit Profil</h3>
            <p>
              Ubah foto profil, nama,
              dan informasi akun.
            </p>
          </div>

          <div className="setting-card">
            <h3>🔔 Notifikasi</h3>
            <p>
              Atur notifikasi mood,
              playlist, dan memori.
            </p>
          </div>

          <div className="setting-card">
            <h3>🌙 Dark Mode</h3>
            <p>
              Ganti tampilan website
              menjadi mode gelap.
            </p>
          </div>

          <div className="setting-card">
            <h3>🔒 Keamanan</h3>
            <p>
              Ubah password dan
              tingkatkan keamanan akun.
            </p>
          </div>

          <div className="setting-card">
            <h3>🌐 Bahasa</h3>
            <p>
              Pilih bahasa aplikasi.
            </p>
          </div>

          <div className="setting-card logout-card">
            <h3>🚪 Keluar</h3>
            <p>
              Logout dari akun Vibestune.
            </p>
          </div>

        </div>

      </div>

    </div>

  );
}