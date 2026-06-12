import "./memoryDetail.css";
import Sidebar from "../components/Sidebar";

export default function MemoryDetail({
  goToDashboard,
  goToMusic,
  goToMaps,
  goToInsight,
  goToProfile,
  goToSettings
}) {

  return (

    <div className="dashboard-layout">

      <Sidebar
        activePage="maps"
        goToDashboard={goToDashboard}
        goToMusic={goToMusic}
        goToMaps={goToMaps}
        goToInsight={goToInsight}
        goToProfile={goToProfile}
        goToSettings={goToSettings}
      />

      <div className="dashboard-content">

        <div className="memory-header">

          <h1>
            📍 Cafe Nako
          </h1>

          <p>
            Pekanbaru • 12 Juni 2026
          </p>

        </div>

        <div className="memory-banner">

          <img
            src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=1200"
            alt=""
          />

        </div>

        <div className="memory-grid">

          <div className="memory-card">

            <h3>Mood</h3>

            <p>☁ Tenang</p>

          </div>

          <div className="memory-card">

            <h3>Lagu</h3>

            <p>
              🎵 Blue Jeans
            </p>

          </div>

          <div className="memory-card">

            <h3>Cuaca</h3>

            <p>
              🌧 Hujan
            </p>

          </div>

        </div>

        <div className="journal-card">

          <h2>
            Catatan Harian
          </h2>

          <p>
            Hari ini mengerjakan tugas
            sambil menikmati kopi.
            Suasananya tenang dan
            membuat fokus belajar.
          </p>

        </div>

        <div className="reflection-card">

          <h2>
            Refleksi
          </h2>

          <p>
            Aku berhasil menyelesaikan
            target hari ini dan merasa
            lebih produktif.
          </p>

        </div>

      </div>

    </div>

  );
}