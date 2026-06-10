import "./dashboard.css";

export default function Dashboard({
  goToProfile,
  goToMusic,
  selectedMood,
  setSelectedMood
}) {
  return (
    <div className="dashboard-container">

      {/* top */}
      <div className="top-bar">

        <h1 className="logo">
          Vibestune.
        </h1>

        <div className="profile-section">

          <img
            src="https://i.pinimg.com/736x/8f/39/9b/8f399bf4d6f6d7f5d1fbc4f6d6a7bb8b.jpg"
            alt="profile"
          />

          <span>kia</span>

        </div>

      </div>

      {/* location */}
      <div className="location-weather">

        <div className="location">
          📍 pekanbaru
        </div>

        <div className="weather">
          ☁ 24°C
        </div>

      </div>

      {/* title */}
      <h2 className="title">
        perasaanmu sekarang?
      </h2>

      {/* mood cards */}
     <div className="mood-grid">

  {/* sedih */}
  <div
    className={`mood-card ${
      selectedMood === "sedih"
        ? "selected"
        : ""
    }`}
    onClick={() =>
      setSelectedMood("sedih")
    }
  >

    <img
      src="https://images.unsplash.com/photo-1515694346937-94d85e41e6f0?q=80&w=1200&auto=format&fit=crop"
      alt=""
    />

    <div className="overlay"></div>

    <span>sedih</span>

  </div>

  {/* tenang */}
  <div
    className={`mood-card ${
      selectedMood === "tenang"
        ? "selected"
        : ""
    }`}
    onClick={() =>
      setSelectedMood("tenang")
    }
  >

    <img
      src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop"
      alt=""
    />

    <div className="overlay"></div>

    <span>tenang</span>

  </div>

  {/* semangat */}
  <div
    className={`mood-card ${
      selectedMood === "bersemangat"
        ? "selected"
        : ""
    }`}
    onClick={() =>
      setSelectedMood("bersemangat")
    }
  >

    <img
      src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?q=80&w=1200&auto=format&fit=crop"
      alt=""
    />

    <div className="overlay"></div>

    <span>bersemangat</span>

  </div>

  {/* kecewa */}
  <div
    className={`mood-card ${
      selectedMood === "kecewa"
        ? "selected"
        : ""
    }`}
    onClick={() =>
      setSelectedMood("kecewa")
    }
  >

    <img
      src="https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?q=80&w=1200&auto=format&fit=crop"
      alt=""
    />

    <div className="overlay"></div>

    <span>kecewa</span>

  </div>

</div>
      {/* memory */}
      <div className="memory-card">

        <div className="memory-title">
          ⏺ memori terakhir.
        </div>

        <div className="memory-item">

          <span>
            • Blue Jeans — Gangga
          </span>

          <p>2 jam lalu</p>

        </div>

        <div className="memory-item">

          <span>
            • "tugas di cafe..."
          </span>

          <p>kemarin</p>

        </div>

      </div>

      {/* bottom nav */}
      <div className="bottom-nav">

        <div className="nav-item active">
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

        <div className="nav-item">
          📍
          <span>map</span>
        </div>

        <div className="nav-item" onClick={goToProfile}>
          👤
          <span>profil</span>
        </div>

      </div>

    </div>
  );
}