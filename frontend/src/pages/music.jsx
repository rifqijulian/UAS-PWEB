import "./music.css";
import { useState } from "react";

export default function Music({
  goToDashboard,
  goToProfile
}) {

  const moods = {

    sad: {
      title: "late night overthinking",
      subtitle: "24 lagu • mellow vibes",

      image:
        "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?q=80&w=1200&auto=format&fit=crop",

      songs: [
        {
          title: "Another Love",
          artist: "Tom Odell",
        },

        {
          title: "Glimpse of Us",
          artist: "Joji",
        },

        {
          title: "Blue Jeans",
          artist: "Gangga",
        },
      ],
    },

    chill: {
      title: "rainy cafe ambience",
      subtitle: "18 lagu • calm vibes",

      image:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop",

      songs: [
        {
          title: "golden hour",
          artist: "JVKE",
        },

        {
          title: "double take",
          artist: "dhruv",
        },

        {
          title: "those eyes",
          artist: "new west",
        },
      ],
    },

    happy: {
      title: "sunshine energy",
      subtitle: "30 lagu • happy vibes",

      image:
        "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop",

      songs: [
        {
          title: "Best Day Of My Life",
          artist: "American Authors",
        },

        {
          title: "Sunday Best",
          artist: "Surfaces",
        },

        {
          title: "Electric Love",
          artist: "BORNS",
        },
      ],
    },

    focus: {
      title: "deep focus session",
      subtitle: "16 lagu • study vibes",

      image:
        "https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=1200&auto=format&fit=crop",

      songs: [
        {
          title: "Snowfall",
          artist: "Øneheart",
        },

        {
          title: "Experience",
          artist: "Ludovico Einaudi",
        },

        {
          title: "Time",
          artist: "Hans Zimmer",
        },
      ],
    },

  };

  const [activeMood, setActiveMood] = useState("sad");

  return (
    <div className="music-container">

      {/* top */}
      <div className="top-bar">

        <div>

          <h1 className="title">
            lagu untukmu 🎵
          </h1>

          <p className="subtitle">
            playlist sesuai vibemu hari ini.
          </p>

        </div>

        <div className="profile-icon">
          S
        </div>

      </div>

      {/* search */}
      <div className="search-bar">

        <input
          type="text"
          placeholder="cari lagu atau artist..."
        />

      </div>

      {/* categories */}
      <div className="category-scroll">

        <div
          className={`category ${
            activeMood === "sad" ? "active" : ""
          }`}
          onClick={() => setActiveMood("sad")}
        >
          sad
        </div>

        <div
          className={`category ${
            activeMood === "chill" ? "active" : ""
          }`}
          onClick={() => setActiveMood("chill")}
        >
          chill
        </div>

        <div
          className={`category ${
            activeMood === "happy" ? "active" : ""
          }`}
          onClick={() => setActiveMood("happy")}
        >
          happy
        </div>

        <div
          className={`category ${
            activeMood === "focus" ? "active" : ""
          }`}
          onClick={() => setActiveMood("focus")}
        >
          focus
        </div>

      </div>

      {/* playlist */}
      <div className="featured-playlist">

        <img
          src={moods[activeMood].image}
          alt=""
        />

        <div className="playlist-overlay"></div>

        <div className="playlist-content">

          <h2>
            {moods[activeMood].title}
          </h2>

          <p>
            {moods[activeMood].subtitle}
          </p>

        </div>

      </div>

      {/* songs */}
      <div className="section-title">
        populer hari ini
      </div>

      <div className="song-list">

        {moods[activeMood].songs.map(
          (song, index) => (

            <div
              className="song-item"
              key={index}
            >

              <div className="song-cover"></div>

              <div className="song-info">

                <h3>{song.title}</h3>

                <p>{song.artist}</p>

              </div>

              <button>
                ▶
              </button>

            </div>

          )
        )}

      </div>

      {/* mini player */}
      <div className="mini-player">

        <div>

          <h4>
            {moods[activeMood].songs[0].title}
          </h4>

          <p>
            {moods[activeMood].songs[0].artist}
          </p>

        </div>

        <button>
          ❚❚
        </button>

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

        <div className="nav-item active">
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