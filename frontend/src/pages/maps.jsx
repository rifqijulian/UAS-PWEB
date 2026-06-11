import "./maps.css";

export default function Maps({
  goToDashboard,
  goToMusic,
  goToProfile,
  goToDetail
}) {

  const memory = {
    title: "Kopi Nako",
    city: "Pekanbaru",
    date: "9 Juni 2026",
    weather: "Hujan",
    song: "Glimpse of Us",
    artist: "Joji",
    note:
      "Tugas numpuk, tapi tetap semangat. Kopi dan hujan teman terbaik.",
    reflection:
      "Alhamdulillah dapat A!"
  };

  return (
    <div className="maps-container">

      <div className="maps-header">
        <h1>map memori</h1>
      </div>

      <div className="category-row">
        <button className="active">semua</button>
        <button>cafe</button>
        <button>rumah</button>
        <button>lainnya</button>
      </div>

      <div className="map-area">

        <div className="pin pin1">📍</div>
        <div className="pin pin2">📍</div>
        <div className="pin pin3">📍</div>
        <div className="pin pin4">📍</div>

        <div
          className="memory-preview"
          onClick={() => goToDetail(memory)}
        >
          <img
            src="https://images.unsplash.com/photo-1554118811-1e0d58224f24"
            alt=""
          />

          <div>

            <h3>Kopi Nako</h3>

            <p>📍 Pekanbaru</p>

            <p>🗓 9 Juni 2026</p>

            <p>🌧 Hujan</p>

          </div>

        </div>

      </div>

      <div className="bottom-nav">

        <div
          className="nav-item"
          onClick={goToDashboard}
        >
          🏠
          <span>beranda</span>
        </div>

        <div
          className="nav-item"
          onClick={goToMusic}
        >
          🎵
          <span>lagu</span>
        </div>

        <div className="nav-add">
          +
        </div>

        <div className="nav-item active-nav">
          📍
          <span>map</span>
        </div>

        <div
          className="nav-item"
          onClick={goToProfile}
        >
          👤
          <span>profil</span>
        </div>

      </div>

    </div>
  );
}