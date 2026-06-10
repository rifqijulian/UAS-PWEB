import "./pages/login.css";

export default function Login() {
  return (
    <div className="login-container">

      <div className="background-overlay">

        <div className="login-card">

          <h1 className="logo">
            minddrop.
          </h1>

          <p className="subtitle">
            tempat curhatmu, <br />
            tempat harimu.
          </p>

          <form>

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
              <a href="#">Lupa Password?</a>
            </div>

            <button className="login-btn">
              Masuk Sekarang
            </button>

            <div className="divider">
              <span>atau</span>
            </div>

            <button className="spotify-btn">
              Connect With Spotify
            </button>

            <p className="register-text">
              belum punya akun?
              <a href="#"> daftar di sini</a>
            </p>

          </form>

        </div>

      </div>

    </div>
  );
}