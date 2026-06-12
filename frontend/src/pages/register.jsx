import "./register.css";

export default function Register({
  goToLogin,
  goToOnboarding
}) {

  return (

    <div className="register-page">

      <div className="register-card">

        <h1>
          Vibestune
        </h1>

        <p>
          mulai perjalanan musikmu hari ini
        </p>

        <input
          type="text"
          placeholder="nama lengkap"
        />

        <input
          type="email"
          placeholder="email"
        />

        <input
          type="password"
          placeholder="password"
        />

        <input
          type="password"
          placeholder="konfirmasi password"
        />

        <button
          onClick={goToOnboarding}
        >
          create account
        </button>

        <button
          className="back-btn"
          onClick={goToLogin}
        >
          back to login
        </button>

      </div>

    </div>

  );
}