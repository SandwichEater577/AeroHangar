import Header from "./components/JSX/Header.jsx";
import Main from "./components/JSX/MainPage.jsx";
import { useState } from "react";
import LoginPage from "./components/JSX/LoginPage.jsx";
import "./components/CSS/Main.css";
import "./components/CSS/Header.css";
import "./components/CSS/Profile.css";
import "./components/CSS/Aircraft.css";
import "./components/CSS/Login.css";

export default function App() {
  const [currentOpenAircraftHero, setCurrentOpenAircraftHero] = useState(0);
  const [currentActivePage, setCurrentActivePage] = useState("aircraft");
  const [currentAircraftPage, setCurrentAircraftPage] = useState("1");
  const [currentProfilePage, setCurrentProfilePage] = useState("1");
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

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
              currentPage={currentActivePage}
              currentProfilePage={currentProfilePage}
              currentAircraftPage={currentAircraftPage}
              setCurrentProfilePage={setCurrentProfilePage}
              setCurrentAircraftPage={setCurrentAircraftPage}
              currentOpenAircraftHero={currentOpenAircraftHero}
              setCurrentOpenAircraftHero={setCurrentOpenAircraftHero}
            />
          </>
        ) : (
          <LoginPage setIsLoggedIn={setIsUserLoggedIn} />
        )}
      </div>
    </>
  );
}
