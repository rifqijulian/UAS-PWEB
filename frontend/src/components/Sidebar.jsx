import "./Sidebar.css";

import {
  HiHome,
  HiOutlineMusicNote,
  HiOutlineMap,
  HiOutlineChartBar,
  HiOutlineUser,
  HiOutlineCog
} from "react-icons/hi";

export default function Sidebar({

  activePage,

  goToDashboard,
  goToMusic,
  goToMaps,
  goToInsight,
  goToProfile,
  goToSettings

}) {

  return (

    <div className="sidebar">

      {/* LOGO */}

      <div className="logo">

        <div className="music-logo">

          <div className="note-body"></div>

          <div className="note-head"></div>

        </div>

        <div className="logo-text">

          <h2>
            Vibestune
          </h2>

          <p>
            your mood, your soundtrack
          </p>

        </div>

      </div>

      {/* MENU */}

      <div className="menu">

        <div
          className={
            activePage === "dashboard"
              ? "menu-item active"
              : "menu-item"
          }
          onClick={goToDashboard}
        >

          <HiHome />

          <span>
            Dashboard
          </span>

        </div>

        <div
          className={
            activePage === "music"
              ? "menu-item active"
              : "menu-item"
          }
          onClick={goToMusic}
        >

          <HiOutlineMusicNote />

          <span>
            Music
          </span>

        </div>

        <div
          className={
            activePage === "maps"
              ? "menu-item active"
              : "menu-item"
          }
          onClick={goToMaps}
        >

          <HiOutlineMap />

          <span>
            Maps
          </span>

        </div>

        <div
          className={
            activePage === "insight"
              ? "menu-item active"
              : "menu-item"
          }
          onClick={goToInsight}
        >

          <HiOutlineChartBar />

          <span>
            Insight
          </span>

        </div>

        <div
          className={
            activePage === "profile"
              ? "menu-item active"
              : "menu-item"
          }
          onClick={goToProfile}
        >

          <HiOutlineUser />

          <span>
            Profile
          </span>

        </div>

        <div
          className={
            activePage === "settings"
              ? "menu-item active"
              : "menu-item"
          }
          onClick={goToSettings}
        >

          <HiOutlineCog />

          <span>
            Settings
          </span>

        </div>

      </div>

    </div>

  );

}