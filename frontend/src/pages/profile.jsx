import "./profile.css";

export default function Profile({
  goToDashboard,
  selectedMood
}) {

  return (
    <div className="profile-container">

      {/* top */}
      <div className="top-section">

        <h1>
          profil
        </h1>

        <div className="setting-btn">
          ⚙
        </div>

      </div>

      {/* profile card */}
      <div className="profile-card">

        <img
          src="https://i.pinimg.com/736x/8f/39/9b/8f399bf4d6f6d7f5d1fbc4f6d6a7bb8b.jpg"
          alt="profile"
        />

        <h2>
          sazkia rahmadina
        </h2>

        <p>
          @sazkiarahmadina
        </p>

        <div className="current-mood">

  mood sekarang:
  <strong>
    {selectedMood}
  </strong>

</div>

      </div>

      {/* stats */}
      <div className="stats-grid">

        <div className="stats-card">

          <h3>28</h3>

          <p>memori</p>

        </div>

        <div className="stats-card">

          <h3>156</h3>

          <p>lagu tersimpan</p>

        </div>

        <div className="stats-card">

          <h3>12</h3>

          <p>pin cafe</p>

        </div>

      </div>

      {/* menu */}
      <div className="menu-section">

        <div className="menu-item">

          <span>
            ♡ memori tersimpan
          </span>

          <p>›</p>

        </div>

        <div className="menu-item">

          <span>
            ♫ playlist favorit
          </span>

          <p>›</p>

        </div>

        <div className="menu-item">

          <span>
            📊 insight & statistik
          </span>

          <p>›</p>

        </div>

        <div className="menu-item">

          <span>
            ⚙ pengaturan akun
          </span>

          <p>›</p>

        </div>

      </div>

      {/* favorite songs */}
      <div className="fav-section">

        <h3>
          lagu paling didengar
        </h3>

        {/* song 1 */}
        <div className="song-item">

          <div className="song-left">

            <div className="song-cover"></div>

            <div className="song-info">

              <h4>Glimpse of Us</h4>

              <p>Joji</p>

            </div>

          </div>

          <button className="play-btn">
            ▶
          </button>

        </div>

        {/* song 2 */}
        <div className="song-item">

          <div className="song-left">

            <div className="song-cover"></div>

            <div className="song-info">

              <h4>Blue Jeans</h4>

              <p>Gangga</p>

            </div>

          </div>

          <button className="play-btn">
            ▶
          </button>

        </div>

      </div>

      {/* bottom nav */}
      <div className="bottom-nav">

        <div
          className="nav-item"
          onClick={goToDashboard}
        >
          🏠
          <span>beranda</span>
        </div>

        <div className="nav-item">
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

        <div className="nav-item active">
          👤
          <span>profil</span>
        </div>

      </div>

    </div>
  );
}