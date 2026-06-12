import "./memory.css";
import Sidebar from "../components/Sidebar";

export default function Memory({
  goToDashboard,
  goToMusic,
  goToMaps,
  goToInsight,
  goToProfile,
  goToSettings
}) {

  const memories = [

    {
      title: "Belajar di Cafe Nako",
      mood: "☁ Tenang",
      song: "Blue Jeans",
      date: "12 Juni 2026"
    },

    {
      title: "Jalan Sore",
      mood: "😊 Bahagia",
      song: "Sunday Best",
      date: "10 Juni 2026"
    },

    {
      title: "Persiapan Presentasi",
      mood: "⚡ Focus",
      song: "Snowfall",
      date: "8 Juni 2026"
    }

  ];

  return (

    <div className="dashboard-layout">

      <Sidebar
        activePage="memory"
        goToDashboard={goToDashboard}
        goToMusic={goToMusic}
        goToMaps={goToMaps}
        goToInsight={goToInsight}
        goToProfile={goToProfile}
        goToSettings={goToSettings}
      />

      <div className="dashboard-content">

        <h1>Memory Journal</h1>

        <p className="memory-subtitle">
          Semua momen yang pernah kamu simpan.
        </p>

        <div className="memory-list">

          {memories.map((memory, index) => (

            <div
              key={index}
              className="memory-item"
            >

              <div>

                <h3>
                  {memory.title}
                </h3>

                <p>
                  {memory.date}
                </p>

              </div>

              <div className="memory-info">

                <span>
                  {memory.mood}
                </span>

                <span>
                  🎵 {memory.song}
                </span>

              </div>

            </div>

          ))}

        </div>

      </div>

    </div>

  );
}