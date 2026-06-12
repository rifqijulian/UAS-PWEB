import "./onboarding.css";
import { useState } from "react";

import happy from "../assets/onboarding/happy.jpg";
import love from "../assets/onboarding/love.jpg";
import sad from "../assets/onboarding/sad.jpg";
import disappointed from "../assets/onboarding/disappointed.jpg";
import angry from "../assets/onboarding/angry.jpg";

export default function Onboarding({
  goToDashboard
}) {

  const moods = [

    {
      title: "Happy",
      image: happy,
      quote:
        "today feels a little lighter. nikmati hal-hal kecil yang diam-diam bikin bahagia."
    },

    {
      title: "Falling In Love",
      image: love,
      quote:
        "kadang seseorang hadir dan tiba-tiba semua lagu jadi terdengar berbeda."
    },

    {
      title: "Sad",
      image: sad,
      quote:
        "ga apa-apa kalau hari ini berat. besok masih punya ruang untuk memulai lagi."
    },

    {
      title: "Disappointed",
      image: disappointed,
      quote:
        "tidak semua harapan berakhir sesuai cerita. dan itu tidak membuatmu gagal."
    },

    {
      title: "Angry",
      image: angry,
      quote:
        "ambil waktu untuk tenang. ga semua hal harus dijawab saat hati sedang berisik."
    }

  ];

  const [currentMood, setCurrentMood] =
    useState(0);

  const nextSlide = () => {

    if (currentMood < moods.length - 1) {

      setCurrentMood(
        currentMood + 1
      );

    } else {

      goToDashboard();

    }

  };

  const prevSlide = () => {

    if (currentMood > 0) {

      setCurrentMood(
        currentMood - 1
      );

    }

  };

  return (

    <div className="onboarding-page">

      <div className="bg-glow glow1"></div>
      <div className="bg-glow glow2"></div>
      <div className="bg-glow glow3"></div>

      <div className="floating floating1">
        your vibe matters
      </div>

      <div className="floating floating2">
        every mood has a soundtrack
      </div>

      <div className="floating floating3">
        welcome to vibestune
      </div>

      <div className="onboarding-card">

        <img
          src={moods[currentMood].image}
          alt=""
          className="mood-image"
        />

        <div className="mood-badge">

          current mood

        </div>

        <h1>

          {moods[currentMood].title}

        </h1>

        <p>

          {moods[currentMood].quote}

        </p>

        <div className="dots">

          {moods.map((_, index) => (

            <span
              key={index}
              className={
                currentMood === index
                  ? "dot active"
                  : "dot"
              }
            ></span>

          ))}

        </div>

        <div className="button-group">

          <button
            className="back-btn"
            onClick={prevSlide}
          >
            Back
          </button>

          <button
            className="next-btn"
            onClick={nextSlide}
          >
            {currentMood ===
            moods.length - 1
              ? "Start Journey"
              : "Next"}
          </button>

        </div>

      </div>

    </div>

  );
}