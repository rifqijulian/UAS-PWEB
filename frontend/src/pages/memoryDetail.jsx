import "./memoryDetail.css";

export default function MemoryDetail({
  memory,
  goBack
}) {

  return (
    <div className="detail-container">

      <button
        className="back-btn"
        onClick={goBack}
      >
        ←
      </button>

      <img
        className="detail-image"
        src="https://images.unsplash.com/photo-1554118811-1e0d58224f24"
        alt=""
      />

      <h1>{memory.title}</h1>

      <div className="detail-meta">

        <span>🗓 {memory.date}</span>

        <span>🌧 {memory.weather}</span>

      </div>

      <div className="song-box">

        🎵 {memory.song} — {memory.artist}

      </div>

      <div className="content-box">

        <h3>Curhatan</h3>

        <p>{memory.note}</p>

        <h3>Refleksi</h3>

        <p>{memory.reflection}</p>

      </div>

    </div>
  );
}