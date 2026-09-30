import Header from "./components/JSX/Header.jsx";
import Main from "./components/JSX/MainPage.jsx";
import { useState } from "react";
import LoginPage from "./components/JSX/LoginPage.jsx";
import "./components/CSS/Main.css";
import "./components/CSS/Header.css";
import "./components/CSS/Profile.css";
import "./components/CSS/Aircraft.css";

export default function App() {
  const [currentActivePage, setCurrentActivePage] = useState("aircraft");
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(true);
  const [currentProfilePage, setCurrentProfilePage] = useState("1");
  const [currentAircraftPage, setCurrentAircraftPage] = useState("1");

  return (
    <>
      <div className={!isUserLoggedIn ? `logged-out ` : `App `}>
        {isUserLoggedIn ? (
          <>
            <Header
              currentPage={currentActivePage}
              setCurrentPage={setCurrentActivePage}
              setCurrentProfilePage={setCurrentProfilePage}
            />
            <Main
              currentAircraftPage={currentAircraftPage}
              setCurrentAircraftPage={setCurrentAircraftPage}
              currentPage={currentActivePage}
              currentProfilePage={currentProfilePage}
              setCurrentProfilePage={setCurrentProfilePage}
            />
          </>
        ) : (
          <LoginPage setIsLoggedIn={setIsUserLoggedIn} />
        )}
      </div>
    </>
  );
}
