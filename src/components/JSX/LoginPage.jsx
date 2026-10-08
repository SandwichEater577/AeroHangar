import { AeroHangarProfile } from "../../data/LayoutData.js";
import { handleLogin } from "../../handlers/aircraftHandlers.js";

export default function LoginPage({ setIsLoggedIn }) {
  return (
    <div className="login-page">
      <div className="welcome-container">
        <h1>Welcome to AeroHangar</h1>
        <p>To continue, please log in.</p>
      </div>

      <div className="login-main-container">
        <img
          className="login-user-pfp"
          src={AeroHangarProfile}
          alt="AeroHangar profile"
        />

        <div className="login-user-name">AeroHangar</div>

        <button
          className="login-button"
          type="button"
          onClick={() => handleLogin(setIsLoggedIn)}
        >
          Log in
        </button>
      </div>
    </div>
  );
}
