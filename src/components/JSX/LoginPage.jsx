import {
  AeroHangarProfile,
  AeroHangarLandscape,
} from "../../data/LayoutData.js";

export default function LoginPage({ setIsLoggedIn }) {
  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <div className="login-page">
      <div className="welcome-container">
        <h1>Welcome to AeroHangar</h1>
      </div>
      <div className="login-container">
        <div id="logo-container">
          <img
            src={AeroHangarLandscape}
            id="profile-pic-at-login"
            alt="AeroHangar Profile Picture"
          />
        </div>
        <button id="login-button" onClick={handleLogin}>
          <h3>Login as AeroHangar User</h3>
        </button>
      </div>
    </div>
  );
}
