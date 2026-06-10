import "./onboarding.css";
import { useState } from "react";

export default function Onboarding({ goToDashboard }) {

  const slides = [
    {
      title: "selamat datang di Vibestune",
      desc: "temukan lagu yang cocok dengan setiap mood dan perasaanmu.",
      image:
        "https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=1200&auto=format&fit=crop",
    },

    {
      title: "simpan cerita dan memori",
      desc: "abadikan momen bersama lagu favorit dan tempat spesialmu.",
      image:
        "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?q=80&w=1200&auto=format&fit=crop",
    },

    {
      title: "setiap mood punya melodinya",
      desc: "dapatkan rekomendasi musik berdasarkan vibe harimu.",
      image:
        "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop",
    },
  ];

  const [current, setCurrent] = useState(0);

  const nextSlide = () => {

    if (current < slides.length - 1) {
      setCurrent(current + 1);
    } else {
      goToDashboard();
    }

  };

  return (
    <div className="onboarding-container">

      {/* animated background */}
      <div className="bg-circle circle1"></div>
      <div className="bg-circle circle2"></div>

      {/* floating icons */}
      <div className="floating-icon icon1">☾</div>
      <div className="floating-icon icon2">♫</div>
      <div className="floating-icon icon3">✦</div>

      {/* card */}
      <div className="onboarding-card">

        {/* image */}
        <div className="image-section">

          <img
            src={slides[current].image}
            alt="vibes"
          />

          <div className="image-overlay"></div>

        </div>

        {/* content */}
        <div className="content-section">

          <h1>
            {slides[current].title}
          </h1>

          <p>
            {slides[current].desc}
          </p>

          {/* dots */}
          <div className="dots">

            {slides.map((_, index) => (
              <span
                key={index}
                className={current === index ? "active" : ""}
              ></span>
            ))}

          </div>

          {/* button */}
          <button onClick={nextSlide}>

            {current === slides.length - 1
              ? "masuk ke halaman selanjutnya"
              : "lanjutkan"}

          </button>

        </div>

      </div>

    </div>
  );
}