import "./login.css";

export default function Login({ goToOnboarding }) {
  return (
    <div className="login-container">

      {/* animated background */}
      <div className="gradient-ball ball1"></div>
      <div className="gradient-ball ball2"></div>
      <div className="gradient-ball ball3"></div>

      {/* floating mood icons */}
      <div className="floating mood1">☾</div>
      <div className="floating mood2">♫</div>
      <div className="floating mood3">♡</div>
      <div className="floating mood4">☁</div>
      <div className="floating mood5">✦</div>

      {/* title section */}
      <div className="title-section">

        <div className="logo-wrapper">

          <div className="logo-ring">

            <div className="logo-core">
              V
            </div>

          </div>

        </div>

        <h1 className="logo-text">
          Vibestune
        </h1>

        <p className="tagline">
          every mood has its own melody.
        </p>

      </div>

      {/* login card */}
      <div className="login-card">

        <div className="input-group">
          <label>Email</label>

          <input
            type="email"
            placeholder="masukkan email kamu"
          />
        </div>

        <div className="input-group">
          <label>Password</label>

          <input
            type="password"
            placeholder="masukkan password"
          />
        </div>

        <div className="forgot-password">
          <a href="#">
            lupa password?
          </a>
        </div>

        <button className="login-btn" onClick={goToOnboarding}>
          masuk sekarang
        </button>

        <div className="divider">
          <span>atau</span>
        </div>

        <button className="spotify-btn">
          connect with spotify
        </button>

        <p className="register-text">
          belum punya akun?
          <a href="#"> daftar di sini</a>
        </p>

      </div>

    </div>
  );
}