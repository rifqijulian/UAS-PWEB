import { useState } from "react";
import "./maps.css";
import Sidebar from "../components/Sidebar";

export default function Maps({

  goToDashboard,
  goToMusic,
  goToInsight,
  goToProfile,
  goToSettings

}) {

  const locations = [

    {
      id:1,
      name:"Cafe Nako",
      mood:"Calm",
      song:"Blue Jeans",
      date:"12 June 2026",
      note:
      "finished assignments while enjoying a cup of coffee."
    },

    {
      id:2,
      name:"Library",
      mood:"Focus",
      song:"Snowfall",
      date:"10 June 2026",
      note:
      "studying for an upcoming presentation."
    },

    {
      id:3,
      name:"City Park",
      mood:"Happy",
      song:"Sunday Best",
      date:"8 June 2026",
      note:
      "an evening walk with fresh air and good vibes."
    }

  ];

  const [selectedLocation,setSelectedLocation] =
    useState(locations[0]);

  return (

    <div className="dashboard-layout">

      <Sidebar

        activePage="maps"

        goToDashboard={goToDashboard}

        goToMusic={goToMusic}

        goToMaps={() => {}}

        goToInsight={goToInsight}

        goToProfile={goToProfile}

        goToSettings={goToSettings}

      />

      <div className="maps-page">

        <h1>
          memory map
        </h1>

        <p className="maps-subtitle">
          revisit places,
          memories,
          and the soundtrack
          behind them.
        </p>

        <div className="maps-layout">

          {/* MAP */}

          <div className="map-area">

            <div
              className="pin pin1"
              onClick={() =>
                setSelectedLocation(
                  locations[0]
                )
              }
            >
              📍
            </div>

            <div
              className="pin pin2"
              onClick={() =>
                setSelectedLocation(
                  locations[1]
                )
              }
            >
              📍
            </div>

            <div
              className="pin pin3"
              onClick={() =>
                setSelectedLocation(
                  locations[2]
                )
              }
            >
              📍
            </div>

          </div>

          {/* DETAIL */}

          <div className="memory-panel">

            <h2>
              {selectedLocation.name}
            </h2>

            <div className="info-card">

              <span>
                mood
              </span>

              <h4>
                {selectedLocation.mood}
              </h4>

            </div>

            <div className="info-card">

              <span>
                soundtrack
              </span>

              <h4>
                {selectedLocation.song}
              </h4>

            </div>

            <div className="info-card">

              <span>
                date
              </span>

              <h4>
                {selectedLocation.date}
              </h4>

            </div>

            <div className="note-card">

              <h3>
                memory note
              </h3>

              <p>
                {selectedLocation.note}
              </p>

            </div>

          </div>

        </div>

      </div>

    </div>

  );

}